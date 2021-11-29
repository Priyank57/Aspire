export const loanService = {
  getAll,
  repay,
  save,
};

function repay(id: string) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`/loans/${id}`, requestOptions)
    .then(handleResponse);
}

function save({ amount, terms, name }: { amount: number; terms: number, name: string }) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, terms, name, userId: 1 }),
  };
  return fetch(`/loans/save`, requestOptions)
    .then(handleResponse);
}

function getAll() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`/loans`, requestOptions).then(handleResponse);
}

function handleResponse(response: Response) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
