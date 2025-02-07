<script setup lang="ts">
const props = defineProps({
  path: String
})
</script>

<template>
  <div class="popup">
    <div class="container">
      <h4 class="name">
        Войти в профиль
      </h4>
      <form action="#" class="auth">
        <input class="email" type="email" name="auth_email" placeholder="Логин" required>
        <input type="password" name="auth_pass" placeholder="Пароль" required >
        <button class="form_auth_button" type="submit" name="form_auth_submit">Войти</button>
      </form>
      <a class="recover">Восстановить пароль</a>
      <div class="cont-sign-in">
        <p>У Вас нет профиля?</p>
        <NuxtLink class="sign-in" :to="props.path">
          <p class="space">Зарегистрироваться</p>
        </NuxtLink>
      </div>
      </div>
  </div>
</template>

<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  fill: #fff;
  box-shadow: 0 0 24px 0 rgba(52, 56, 77, 0.2);
  width: 700px;
  height: 501px;
}

.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 100%;
}

.name {
  margin-top: 14%;
  margin-left: 14%;
  align-self: start;
  font-weight: 600;
  font-size: 36px;
  color: #2c2c2c;
}

.auth {
  width: 502px;
  height: 140px;
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
  color: rgba(0, 0, 0, 0.3);
}

.form_auth_button {
  margin-top: 15%;
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

.recover {
  padding-left: 14%;
  align-self: self-start;
  font-weight: 400;
  font-size: 18px;
  line-height: 137%;
  color: #aaa;
  border: 0;
}

.cont-sign-in {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 137%;
  color: #aaa;
  padding: 15%;
}

.sign-in {
  font-weight: 400;
  font-size: 18px;
  line-height: 137%;

  color: #000;
  text-decoration: none;
}

.space {
  padding-left: 10%;
}

</style>