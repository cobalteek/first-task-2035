<script setup lang="ts">
const formFields = [
  { name: "auth_email", type: "email", placeholder: "Почта", required: true, class: "input" }
];

const path = '/recover/code'

</script>

<template>
  <Popup
    name="Восстановление пароля"
    :form-fields = 'formFields'
    name-button="Отправить"
    form-class="auth"
    button-class="form_recover_button"
    popup-height="437px"
    :redirect-to="path"
  />
</template>

<style scoped>

:global(.auth) {
  width: 502px;
  height: 140px;
}

:global(.form_recover_button) {
  margin-top: 8%;
  border-radius: 500px;
  border: 0;
  width: 500px;
  height: 72px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  background: #148c88;
  font-weight: 600;
  font-size: 21px;
  text-align: center;
  color: #fff;
}
</style>