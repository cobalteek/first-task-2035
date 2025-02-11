<script setup lang="ts">
const formFields = [
  { name: "name", type: "text", placeholder: "Полное имя", required: true, class: "input" },
  { name: "login", type: "text", placeholder: "Логин", required: true, class: "input" },
  { name: "auth_email", type: "email", placeholder: "E-mail", required: true, class: "input" },
  { name: "auth_pass", type: "password", placeholder: "Пароль", required: true, class: "input" },
  { name: "auth_pass_again", type: "password", placeholder: "Повторите пароль", required: true, class: "input" },
];

const path = '/'

</script>

<template>
  <Popup
      name="Регистрация профиля"
      surname="У вас уже есть профиль?"
      first-link="Нажимая на кнопку, я соглашаюсь на обработку "
      bold-text="персональных данных"
      second-link="Войти"
      :path1="path"
      :form-fields = 'formFields'
      name-button="Зарегистрироваться"
      form-class="sign-in-page"
      button-class="form_signin_button"
      popup-height="763px"
      :redirect-to="path"
  />
</template>

<style scoped>

:global(.sign-in-page) {
  width: 502px;
  height: 320px;
}

:global(.form_signin_button) {
  margin-top: 22.5%;
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

input:focus {
  outline: none;
}
input {
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  width: 500px;
  height: 60px;
  font-weight: 400;
  font-size: 24px;
  color: rgba(98, 98, 98, 0.08);
}
</style>