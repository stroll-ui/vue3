<template>
<NConfigProvider :theme="theme">
  <NLayout has-sider class="stroll-layout-left" >
    <NLayoutSider>
      <slot v-if="slotList.menu" name="menu"></slot>
      <div v-else>
        menu
      </div>
    </NLayoutSider>
    <NLayout class="stroll-layout-right">
      <NLayoutHeader class="stroll-layout-header">
        <slot v-if="slotList.header" name="header"></slot>
        <div v-else>
          header
        </div>
      </NLayoutHeader>
      <NLayoutContent class="stroll-layout-content">
        <slot v-if="slotList.content" name="content"></slot>
        <div v-else>
          content
        </div>
      </NLayoutContent>
      <NLayoutFooter class="stroll-layout-footer">
        <slot v-if="slotList.footer" name="footer"></slot>
        <div v-else>
          footer
        </div>
      </NLayoutFooter>
    </NLayout>
  </NLayout>
</NConfigProvider>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  nextTick,
  onMounted,
  onBeforeUnmount,
  PropType
} from 'vue'
import {
  NConfigProvider,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter
} from 'naive-ui'
import type { GlobalTheme, MenuOption } from 'naive-ui'
// import methods from '@methods'

const layoutProps = {
  theme: { type: Object as PropType<GlobalTheme | null>, default: null },
  collapsed: { type: Boolean, default: true },
  menuOptions: { type: Object as PropType<MenuOption[]>, default: [] }
} as const

export default defineComponent({
  name: 'Layout',
  props: layoutProps,
  components: {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NConfigProvider
  },
  setup (props, content) {
    const { slots: slotList} = content || {}
    const theme = ref(props.theme || null)
    const headerHeight = ref(0)
    const footerHeigh = ref(0)

    console.log(content);
    const onResize = () => {
      const headerEl = document.querySelector('.stroll-layout-header') as HTMLElement
      const footerEl = document.querySelector('.stroll-layout-footer') as HTMLElement
      const contentEl = document.querySelector('.stroll-layout-content') as HTMLElement
      const { clientHeight = 0 } = document.querySelector('.stroll-layout-right') as HTMLElement

      headerHeight.value = headerEl.offsetHeight
      footerHeigh.value = footerEl.offsetHeight

      if (clientHeight) {
        contentEl.style.height = `${clientHeight - headerHeight.value - footerHeigh.value}px`
      }
    }
    
    onMounted(() => {
      window.addEventListener('resize', onResize)
      nextTick(() => {
        onResize()
      })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize)
    })
    
    return {
      slotList,
      theme
    }
  }
})
</script>

<style scoped>
.stroll-layout-left{
  height: calc(100vh);
}
</style>
