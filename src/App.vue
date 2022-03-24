<template>
<SLayout ref="SLayout" :menuOptions="menuOptions" :logo="logo" :minLogo="minLogo">
  <!-- <template #menu>
    <span>menu1</span>
  </template> -->
  <!-- <template #header>
    <span>header1</span>
  </template> -->
  <template #content>
    <router-view />
  </template>
</SLayout>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, reactive } from 'vue'
import { darkTheme } from 'naive-ui'
import minLogo from './assets/logo_shou.png'
import logo from './assets/logo_zhan.png'
export default defineComponent({
  setup () {
    const SLayout = ref()
    const menuOptions = reactive([
      {
        label: '且听风吟',
        icon: 'stroll-bell',
        key: '//baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199',
      },
      {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        icon: 'stroll-bell',
        disabled: false,
        children: [
          {
            label: '鼠',
            key: 'rat'
          }
        ]
      },
      {
        label: '寻羊冒险记',
        key: '/a',
        icon: 'stroll-bell',
        disabled: false
      },
      {
        label: '舞，舞，舞',
        key: '/t',
        icon: 'stroll-bell',
        children: [
          {
            // type: 'group',
            label: '人物',
            key: 'people',
            children: [
              {
                label: '叙事者',
                key: 'test'
              },
              {
                label: '羊男',
                key: 'test'
              }
            ]
          },
          {
            label: '饮品',
            key: 'beverage',
            children: [
              {
                label: '威士忌',
                key: 'test',
                href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
              }
            ]
          },
          {
            label: '食物',
            key: 'test',
            children: [
              {
                label: '三明治',
                key: 'test'
              }
            ]
          },
          {
            label: '过去增多，未来减少',
            key: 'test'
          }
        ]
      }
    ])
    
    onMounted(() => {
      nextTick(() => {
        // console.log(SLayout.value.theme);
      })
    })
    
    return {
      logo,
      minLogo,
      SLayout,
      menuOptions,
      darkTheme
    }
  }
})
</script>

<style>

</style>
