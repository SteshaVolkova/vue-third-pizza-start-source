import { defineStore } from "pinia";

export const usePizzaStore = defineStore("columns", {
  state: () => ({
    index: null,
    name: "",
    sauceId: 0,
    doughId: 0,
    sizeId: 0,
    ingredients: [],
  }),
  getters: {},
  actions: {},
});
