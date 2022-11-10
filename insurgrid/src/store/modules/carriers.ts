import axiosClient from "@/utils/requests";

const state = {
  carriers: [
    {
      id: 1,
      name: "Progressive",
      loginUrl: "https://account.apps.progressive.com/access/login",
    },
  ],
  currentCarrier: {
    id: 1,
    name: "Progressive",
    loginUrl: "https://account.apps.progressive.com/access/login",
  },
  username: undefined,
  password: undefined,
  pdf: undefined,
  loading: false,
  error: undefined,
};
const getters = {
  getCarriers: (state: any) => {
    return state.carriers;
  },
  getCurrentCarrier: (state: any) => {
    return state.currentCarrier;
  },
};
const mutations = {
  setCarriers: (state: any, carriers: any) => {
    console.log(`carriers: ${carriers}`);
    state.carriers = carriers;
  },
  setCurrentCarrier: (state: any, carrier: any) => {
    state.currentCarrier = carrier;
  },
  setUsername: (state: any, username: string) => {
    state.username = username;
  },
  setPassword: (state: any, password: string) => {
    state.password = password;
  },
  setPdf: (state: any, pdf: any) => {
    state.pdf = pdf;
  },
  setLoading: (state: any, loading: boolean) => {
    state.loading = loading;
  },
  setError: (state: any, error: string) => {
    state.error = error;
  },
};
const actions = {
  getCarriers: async ({ commit }, _: any) => {
    const { data } = await axiosClient.get("/carriers");
    commit("setCarriers", data);
  },
  carrierLogin: async ({ state, commit }, _: any) => {
    commit("setError", undefined);
    try {
      const { data } = await axiosClient.post(
        `/carriers/${state.currentCarrier.id}/login`,
        {
          username: state.username,
          password: state.password,
          url: state.currentCarrier.loginUrl,
        },
        { responseType: "blob" }
      );

      const url = URL.createObjectURL(
        new Blob([data], { type: "application/pdf" })
      );
      commit("setPdf", url);
      commit("setLoading", false);
    } catch (err) {
      commit("setError", "Error logging in!");
      commit("setLoading", false);
    }
  },
  updateUsername: ({ commit }, username: string) => {
    commit("setUsername", username);
  },
  updatePassword: ({ commit }, password: string) => {
    commit("setPassword", password);
  },
  updateCurrentCarrier: ({ commit }, carrier: any) => {
    commit("setCurrentCarrier", carrier);
  },
  updateLoading: ({ commit }, loading: boolean) => {
    commit("setLoading", loading);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
