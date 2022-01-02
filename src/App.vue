<script setup lang="ts">
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SButton type="min" >
    <template v-slot="row">
      sss{{row}}
    </template>
  </SButton>
</template>


<style>
[class*=gennlife_] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
