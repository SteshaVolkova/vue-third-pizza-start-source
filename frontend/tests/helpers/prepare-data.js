import { useDataStore } from "@/stores/data";
import doughJSON from "../mocks/dough.json";
import ingredientsJSON from "../mocks/ingredients.json";
import saucesJSON from "../mocks/sauces.json";
import sizesJSON from "../mocks/sizes.json";
import miscJSON from "../mocks/misc.json";

export const prepareData = () => {
  const dataStore = useDataStore();
  dataStore.doughs = doughJSON;
  dataStore.ingredients = ingredientsJSON;
  dataStore.misc = miscJSON;
  dataStore.sauces = saucesJSON;
  dataStore.sizes = sizesJSON;
  return dataStore;
};
