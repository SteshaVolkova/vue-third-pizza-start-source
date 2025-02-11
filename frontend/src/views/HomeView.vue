<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <app-dough
          v-if="doughItems && doughItems.length"
          :dough-items="doughItems"
        />

        <app-diameter
          v-if="sizeItems && sizeItems.length"
          :size-items="sizeItems"
        />

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

            <div class="sheet__content ingredients">
              <app-ingredients-sauce
                v-if="sauceItems && sauceItems.length"
                :sauce-items="sauceItems"
              />

              <app-ingredients-filling
                v-if="ingredientItems && ingredientItems.length"
                :ingredient-items="ingredientItems"
              />
            </div>
          </div>
        </div>

        <app-pizza />
      </div>
    </form>
  </main>
</template>

<script setup>
import AppDough from "@/modules/constructor/AppDough.vue";
import AppDiameter from "@/modules/constructor/AppDiameter.vue";
import AppIngredientsSauce from "@/modules/constructor/AppIngredientsSauce.vue";
import AppIngredientsFilling from "@/modules/constructor/AppIngredientsFilling.vue";
import AppPizza from "@/modules/constructor/AppPizza.vue";

import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSize,
} from "@/common/helpers/normalize";

import doughJSON from "@/mocks/dough.json";
import ingredientsJSON from "@/mocks/ingredients.json";
import saucesJSON from "@/mocks/sauces.json";
import sizesJSON from "@/mocks/sizes.json";

const doughItems = doughJSON.map(normalizeDough);
const sizeItems = sizesJSON.map(normalizeSize);
const ingredientItems = ingredientsJSON.map(normalizeIngredients);
const sauceItems = saucesJSON.map(normalizeSauces);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.content {
  padding-top: 20px;
}

.content__wrapper {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 920px;
  margin: 0 auto;
  padding-right: 2.12%;
  padding-bottom: 30px;
  padding-left: 2.12%;
}

.content__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

:deep(.content__constructor) {
  width: 315px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
}

:deep(.content__result) {
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

:deep(.sheet) {
  padding-top: 15px;
  border-radius: 8px;
  background-color: $white;
  box-shadow: $shadow-light;
}

:deep(.sheet__title) {
  padding-right: 18px;
  padding-left: 18px;
}

:deep(.sheet__content) {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;
  border-top: 1px solid rgba($green-500, 0.1);
}

:deep(.ingredients__input) {
  margin-right: 24px;
  margin-bottom: 10px;
}

.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}

:deep(.ingredients__list) {
  @include clear-list;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
