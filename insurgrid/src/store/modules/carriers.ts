import axiosClient from "@/utils/requests";

const state = {
  carriers: [
    {
      id: 1,
      name: "Progressive",
      loginUrl: "https://www.progressive.com",
    },
  ],
  currentCarrier: {
    id: 1,
    name: "Progressive",
    loginUrl: "https://www.progressive.com",
  },
  username: undefined,
  password: undefined,
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
};
const actions = {
  getCarriers: async ({ commit }, _: any) => {
    const { data } = await axiosClient.get("/carriers");
    commit("setCarriers", data);
  },
  carrierLogin: async ({ state }, _: any) => {
    const { data } = await axiosClient.post(
      `/carriers/${state.currentCarrier.id}/login`,
      {
        username: state.username,
        password: state.password,
        loginUrl: state.currentCarrier.loginUrl,
      }
    );
    console.log(`data ${data}`);
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
