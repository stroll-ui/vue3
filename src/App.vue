<template>
<SLayout ref="SLayout" :theme="darkTheme">
  <!-- <template #menu>
    <span>menu1</span>
  </template> -->
  <!-- <template #header>
    <span>header1</span>
  </template> -->
  <template #content>
    <span>content1</span>
  </template>
</SLayout>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { darkTheme } from 'naive-ui'
export default defineComponent({
  setup () {
    const SLayout = ref()
    
    onMounted(() => {
      nextTick(() => {
        console.log(SLayout.value.theme);
      })
    })
    
    return {
      SLayout,
      darkTheme
    }
  }
})
</script>

<style>

</style>
