import { loanService } from "../_services";

interface ILoan {
  id: string;
  name: string;
  amount: number;
  terms: number;
  userId?: number;
  repay?: boolean;
}
interface ILoanState {
  loans: ILoan[];
  loading: boolean;
  item: ILoan | null | undefined;
  error: string | null;
}

const state = {
  loans: [],
  loading: false,
  item: null,
  error: "",
};

const actions: any = {
  getAll({ commit }: any): void {
    commit("getAllRequest");

    loanService.getAll().then(
      (loans) => commit("getAllSuccess", loans),
      (error) => commit("getAllFailure", error)
    );
  },

  repay({ commit }: any, id: string ): void {
    commit("repayRequest", id);
    loanService.repay(id).then(
      () => commit("repaySuccess", id),
      (error) => commit("repayFailure", { id, error: error.toString() })
    );
  },

  save({ commit }: any, data: any): void {
    commit("saveRequest");
    loanService.save(data).then(
      (data) => commit("saveSuccess", data),
      (error) => commit("saveFailure", { error: error.toString() })
    );
  },
};

const mutations = {
  getAllRequest(state: ILoanState) {
    state.loading = true;
  },
  getAllSuccess(state: ILoanState, loans: []) {
    state.loans = loans;
    state.loading = false;
  },
  saveRequest(state: ILoanState) {
    state.loading = true;
  },
  saveSuccess(state: ILoanState, loan: ILoan) {
    state.loans = [...state.loans, loan];
    state.loading = false;
  },
  saveFailure(state: ILoanState, error: any) {
    state.error = error;
    state.loading = false;
  },
  getAllFailure(state: ILoanState, error: any) {
    state.error = error;
  },
  repayRequest(state: ILoanState, id: string) {
    state.loading = true;
    state.loans = state.loans.map((item: ILoan) => {
      return {
        ...item,
        repay: item.id === id,
      };
    });
  },
  repaySuccess(state: ILoanState, id: string) {
    state.loans = state.loans.filter(
      (item: ILoan) => item.id !== id && item.repay !== true
    );
    state.loading = false;
  },
  repayFailure(state: ILoanState, { error }: any) {
    state.error = error;
    state.loading = false;
  },
};

export const loans = {
  namespaced: true,
  state,
  actions,
  mutations,
};
