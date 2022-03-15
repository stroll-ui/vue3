<template>
<SLayout :theme="darkTheme">
  <template #menu>
    <span>menu1</span>
  </template>
  <template #header>
    <span>header1</span>
  </template>
  <template #content>
    <span>content1</span>
  </template>
</SLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'
export default defineComponent({
  setup () {
    return {
      darkTheme
    }
  }
})
</script>

<style>
[class*=gennlife_] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
