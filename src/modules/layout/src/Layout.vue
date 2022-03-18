<template>
  <NLayout has-sider >
    <NLayoutSider
      bordered
      show-trigger="bar"
      collapse-mode="width"
      class="stroll-layout-left"
      :collapsed="collapsed"
      :collapsed-width="menuMinSize"
      :width="menuMaxSize"
      :native-scrollbar="false"
      @update:collapsed="onCollapsed">
      <slot v-if="slotList.menu" name="menu"></slot>
      <Menu v-else />
    </NLayoutSider>
    <NLayout class="stroll-layout-right">
      <NLayoutHeader class="stroll-layout-header">
        <slot v-if="slotList.header" name="header"></slot>
        <div v-else>
          <i
            @click="collapsed = !collapsed"
            :class="collapsed ? 'stroll_menu_open': 'stroll_menu_stow'"
          ></i>
        </div>
      </NLayoutHeader>
      <NLayoutContent class="stroll-layout-content">
        <slot v-if="slotList.content" name="content"></slot>
        <div v-else> content </div>
      </NLayoutContent>
      <NLayoutFooter class="stroll-layout-footer">
        <slot v-if="slotList.footer" name="footer"></slot>
      </NLayoutFooter>
    </NLayout>
  </NLayout>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  watch,
  onBeforeUnmount
} from 'vue'
import {
  NConfigProvider,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter
} from 'naive-ui'
import variable from './lib/variable'
import { SEl, windowHeight } from './../../methods'
import Menu from './compontents/menu.vue'
import { layoutProps } from './lib/interface'

export default defineComponent({
  name: 'Layout',
  props: layoutProps,
  components: {
    Menu,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NConfigProvider
  },
  setup (props, content) {
    const { slots: slotList} = content || {}
    if (props.field) {
      Object.keys(props.field).forEach(k => {
        variable.field[k] = props.field[k]
      })
    }
    Object.keys(props).forEach(key => {
      if(variable[key]) {
        variable[key].value = props[key]
      }
    })

    const onCollapsed = (coll: boolean) => {
      collapsed.value = coll
    }

    const onResize = async () => {
      const headerEl = await SEl('.stroll-layout-header')
      const contentEl = await SEl('.stroll-layout-content')
      const footerEl = await SEl('.stroll-layout-footer')
      const clientHeight =  await windowHeight()

      if (clientHeight) {
        contentEl.style.height = `${clientHeight - headerEl.offsetHeight - footerEl.offsetHeight}px`
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

    const { collapsed, menuMinSize, menuMaxSize } = variable
    return {
      onCollapsed,
      onResize,
      variable,
      slotList,
      collapsed,
      menuMinSize,
      menuMaxSize
    }
  }
})
</script>
<style>
@import url('./../../icon/iconfont.css');
[class*=stroll_] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar { /* 滚动条 */
  width: 9px;
  height: 9px;
}
::-webkit-scrollbar-track { /* 滚动槽 */
  -webkit-box-shadow: #dddddd;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb { /* 滚动条滑块 */
  border-radius: 10px;
  background-color: #dddddd;
  -webkit-box-shadow: #dddddd;
}
::-webkit-scrollbar-thumb:window-inactive {
  background-color: #dddddd;
}
</style>
<style scoped>
.stroll-layout-left{
  height: calc(100vh);
  /* border-right: 1px #dddddd solid; */
}
.stroll-layout-header{
  border-bottom: 1px #dddddd solid;
}
[class*=stroll_menu] {
  cursor: pointer;
  display:inline-block;
  font-size: 16px;
  padding: 12px 10px;
}
</style>
