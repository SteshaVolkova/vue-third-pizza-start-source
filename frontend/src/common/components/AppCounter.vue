<template>
  <div class="counter" :class="classCounter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="disabledMinus"
      @click="emit('decrementValue', ingredientType.value)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="value"
      @input="emit('inputValue', ingredientType.value, $event.target.value)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="disabledPlus"
      @click="emit('incrementValue', ingredientType.value)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  classCounter: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  disabledPlus: {
    type: Boolean,
    default: false,
  },
  disabledMinus: {
    type: Boolean,
    default: false,
  },
  ingredientType: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["decrementValue", "inputValue", "incrementValue"]);
</script>
