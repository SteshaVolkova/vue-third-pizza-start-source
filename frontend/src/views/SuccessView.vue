<template>
  <transition name="fade" appear>
    <app-popup>
      <router-link :to="{ name: redirectRouteName }" class="close">
        <span class="visually-hidden">Закрыть попап</span>
      </router-link>
      <app-popup-title> Спасибо за заказ </app-popup-title>
      <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
      <app-popup-button>
        <router-link :to="{ name: redirectRouteName }" class="button">
          Отлично, я жду!
        </router-link>
      </app-popup-button>
    </app-popup>
  </transition>
</template>

<script setup>
import AppPopup from "@/common/components/popup/AppPopup.vue";
import AppPopupTitle from "@/common/components/popup/AppPopupTitle.vue";
import AppPopupButton from "@/common/components/popup/AppPopupButton.vue";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const redirectRouteName = computed(() =>
  authStore.isAuthenticated ? "orders" : "home",
);
</script>
