<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  fields: {
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
    class?: string;
  }[];
  buttonClass?: string;
  formClass?: string;
  nameButton?: string;
  redirectTo?: string
}>();

const formData = ref(
    (props.fields ?? []).reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {} as Record<string, string>)
);

const submitForm = () => {
  console.log("Отправленные данные:", formData.value);

};
</script>

<template>
  <form @submit.prevent="submitForm" :class="formClass || 'auth'">
    <input
        v-for="(field, index) in fields"
        :key="index"
        v-model="formData[field.name]"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
        :required="field.required"
        :class="[field.class, 'form-input']"
    />
    <NuxtLink :to="redirectTo">
      <button :class="buttonClass" type="button">{{ nameButton }}</button>
    </NuxtLink>
  </form>
</template>

<style scoped>

:global(.form-input) {
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  width: 500px;
  height: 60px;
  font-size: 24px;
  padding-left: 10px;
}

.form-input:focus {
  outline: none;
}
::placeholder {
  color: #AAAAAAFF;
}
.form_auth_button:hover {
  background: #0f6f6c;
}
</style>
