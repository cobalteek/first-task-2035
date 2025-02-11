<script setup lang="ts">
const path = '/'
</script>

<template>
  <header>
    <div class="name">
      <NuxtLink class="link" :to="path">
        ПЛАТФОРМА
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>

header {
  display: flex;
  justify-content: start;
  align-items: center;
  background: #332f37;
  width: 100%;
  height: 100px;
}

.name {
  margin: 5%;
  font-weight: 400;
  font-size: 32px;
  color: #fff;
}

.link {
  text-decoration: none;
  color: #fff;
}


</style>