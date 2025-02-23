import { defineStore } from "pinia";

export const useCartStore = defineStore("columns", {
  state: () => ({
    phone: "",
    address: {
      street: "",
      building: "",
      flat: "",
      comment: "",
    },
    pizzas: [],
    misc: [],
  }),
  getters: {},
  actions: {},
});
