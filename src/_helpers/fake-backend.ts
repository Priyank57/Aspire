export function configureFakeBackend() {
  // eslint-disable-next-line
  let realFetch = window.fetch;
  window.fetch = <any>function (url: string, opts: any): any {
    return new Promise((resolve): any => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        if (url.endsWith("/loans/save") && opts.method === "POST") {
          const params = JSON.parse(opts.body);
          if (!params) return error("Request perameters are required");
          const loans = JSON.parse(localStorage.getItem("loans")|| JSON.stringify('')) || [];
          localStorage.setItem("loans", JSON.stringify([...loans, {...params, id: loans.length + 1 }]));
          return ok([...loans, params]);
        }

        if (url.match(/\/loans\/\d+$/) && opts.method === "GET") {
          // get id from request url
          const urlParts = url.split("/");
          const id = parseInt(urlParts[urlParts.length - 1]);
          const loans = JSON.parse(localStorage.getItem("loans")|| JSON.stringify('')) || [];
          localStorage.setItem("loans", JSON.stringify(loans.filter((loan: any)=> loan.id !== id)));
          
          return ok(true);
        }

        // get all loans
        if (url.endsWith("/loans") && opts.method === "GET") {
          return ok(JSON.parse(localStorage.getItem("loans")|| JSON.stringify('')) || []);
        }

        // pass through any requests not handled above
        realFetch(url, opts).then((response) => resolve(response));

        // private helper functions
        function ok(body: any) {
          resolve({
            status: 200,
            ok: true,
            text: () => Promise.resolve(JSON.stringify(body)),
          });
        }

        function error(message: string) {
          resolve({
            status: 400,
            text: () => Promise.resolve(JSON.stringify({ message })),
          });
        }
      }, 500);
    });
  };
}
