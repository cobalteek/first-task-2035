<script setup lang="ts">
const signPath = '/signup'
const recoverPath = '/recover'

const formFields = [
  { name: "auth_email", type: "email", placeholder: "Логин", required: true, class: "input" },
  { name: "auth_pass", type: "password", placeholder: "Пароль", required: true, class: "input" }
];

</script>

<template>
    <Popup
        name = "Войти в профиль"
        surname="У вас нет профиля?"
        first-link="Восстановить пароль"
        second-link="Зарегистрируйтесь"
        :path1 = 'signPath'
        :path = 'recoverPath'
        :form-fields="formFields"
        form-class="auth"
        button-class="form_auth_button"
        name-button="Войти"
    />
</template>

<style scoped>

:global(.form_auth_button) {
  margin-top: 13%;
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

:global(.auth) {
  width: 502px;
  height: 140px;
}

</style>