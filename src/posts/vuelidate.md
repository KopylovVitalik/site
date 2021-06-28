---
title: "Vuelidate в компонентах"
date: "2021-06-17"
thumbnail: ../images/blogs/vuelidate/vuelidate-2.jpeg
---

Vuelidate в компонентах

## Зазвичай всі приклади використання ліби є суперпримітивними

```js
<template>
  <div
    :class="[
      'base-input',
      modifier && `base-input--${modifier}`,
      v &&
        v.$params.required &&
        v.$params.required.type === 'required' &&
        'base-input--required',
    ]"
  >
    <label v-if="label" class="base-input__label" :for="id" v-text="label" />
    <input
      @change="updateValue($event.target.value)"
      :type="type"
      :placeholder="placeholder"
      :class="['base-input__input']"
      :id="id"
      :value="value"
    />
    <template v-if="v">
      <span class="error" v-if="v.$params.required && !v.required && v.$dirty">
        Пожалуйста, заполните поле!
      </span>
      <span class="error" v-if="type === 'email' && !v.email && v.$dirty">
        Пожалуйста, введите корректный email!
      </span>
    </template>
  </div>
</template>
```

```js
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    v: {
      type: Object,
      required: false,
    },
    modifier: {
      type: String,
    },
  },
  methods: {
    updateValue(value) {
      this.v && this.v.$touch()
      this.$emit('input', value)
    },
  },
}
</script>

```

New Text For test Ammend

![Turtle](../images/turtle.jpg)