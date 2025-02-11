<script setup lang="ts">
const props = defineProps<{
  path?: string;
  path1?: string;
  formFields: { name: string; type: string; placeholder: string; required?: boolean, class: string }[];
  buttonClass: string,
  formClass: string,
  firstLink?: string,
  secondLink?: string,
  name: string,
  surname?: string,
  nameButton: string,
  popupWidth: string,
  popupHeight: string,
  redirectTo: string,
  boldText: string
}>();


</script>

<template>
  <div class="popup" :style="{ '--popup-width': popupWidth, '--popup-height': popupHeight }">
    <div class="container">
      <h4 class="name">
        {{ props.name }}
      </h4>
      <DynamicForm
          :fields="formFields"
          :buttonClass="buttonClass"
          :formClass="formClass"
          :name-button="nameButton"
          :redirect-to="redirectTo"
      />
      <NuxtLink class="recover" :to="path">
        <p>{{firstLink}} <b>{{boldText}}</b></p>
      </NuxtLink>
      <div class="cont-sign-in">
        <p>{{ props.surname }}</p>
        <NuxtLink class="sign-in" :to="path1">
          <p class="space">{{secondLink}}</p>
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
  width: var(--popup-width, 700px);
  height: var(--popup-height, 501px);
}

.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
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

.recover {
  padding-left: 14%;
  align-self: self-start;
  font-weight: 400;
  font-size: 18px;
  line-height: 137%;
  color: #aaa;
  border: 0;
  width: 500px;
}

.cont-sign-in {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 137%;
  color: #aaa;
  padding: 15%;
  text-decoration: none;
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