<template>
  <main v-if="dataStore.isDataLoaded" class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <app-dough v-model="doughId" :dough-items="dataStore.doughs" />

        <app-diameter v-model="sizeId" :size-items="dataStore.sizes" />

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <app-ingredients-sauce
                v-model="sauceId"
                :sauce-items="dataStore.sauces"
              />

              <app-ingredients-filling
                :values="pizzaStore.ingredientQuantities"
                :ingredient-items="dataStore.ingredients"
                @update="pizzaStore.setIngredientQuantity"
              />
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              v-model="name"
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <app-pizza
            :dough="pizzaStore.dough.value"
            :sauce="pizzaStore.sauce.value"
            :ingredients="pizzaStore.ingredientsExtended"
            @drop="pizzaStore.incrementIngredientQuantity"
          />

          <div class="content__result">
            <p>Итого: {{ pizzaStore.price }} ₽</p>
            <button
              type="button"
              class="button"
              :disabled="disableSubmit"
              @click="addToCart"
            >
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import AppDough from "@/modules/constructor/AppDough.vue";
import AppDiameter from "@/modules/constructor/AppDiameter.vue";
import AppIngredientsSauce from "@/modules/constructor/AppIngredientsSauce.vue";
import AppIngredientsFilling from "@/modules/constructor/AppIngredientsFilling.vue";
import AppPizza from "@/modules/constructor/AppPizza.vue";
import { usePizzaStore } from "@/stores/pizza";
import { useDataStore } from "@/stores/data";
import { useCartStore } from "@/stores/cart";
import { useRouter } from "vue-router";

const dataStore = useDataStore();
const pizzaStore = usePizzaStore();
const cartStore = useCartStore();

const router = useRouter();

const name = computed({
  get() {
    return pizzaStore.name;
  },
  set(value) {
    pizzaStore.setName(value);
  },
});

const doughId = computed({
  get() {
    return pizzaStore.doughId;
  },
  set(value) {
    pizzaStore.setDough(value);
  },
});

const sizeId = computed({
  get() {
    return pizzaStore.sizeId;
  },
  set(value) {
    pizzaStore.setSize(value);
  },
});

const sauceId = computed({
  get() {
    return pizzaStore.sauceId;
  },
  set(value) {
    pizzaStore.setSauce(value);
  },
});

const disableSubmit = computed(() => {
  return name.value.length === 0 || pizzaStore.price === 0;
});

const addToCart = async () => {
  cartStore.savePizza(pizzaStore.$state);
  await router.push({ name: "cart" });
  resetPizza();
};

const resetPizza = () => {
  pizzaStore.setName("");
  if (dataStore.isDataLoaded) {
    pizzaStore.setDough(dataStore.doughs[0].id);
    pizzaStore.setSize(dataStore.sizes[0].id);
    pizzaStore.setSauce(dataStore.sauces[0].id);
  }
  pizzaStore.setIngredients([]);
  pizzaStore.setIndex(null);
};

onMounted(() => {
  if (pizzaStore.index === null) {
    resetPizza();
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";
.content__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__pizza {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content__result {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  p {
    @include b-s24-h28;

    margin: 0;
  }

  button {
    margin-left: 12px;
    padding: 16px 45px;
  }
}
</style>
