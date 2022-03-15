<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :render-label="renderMenuLabel"
    :render-icon="renderMenuIcon"
    :expand-icon="expandIcon"
  />
</template>

<script lang='ts'>
import { defineComponent, h} from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { menuOptions, collapsed } from './../lib/variable'
export default defineComponent({
  name: 'Menu',
  components: { NMenu, NIcon },
  setup () {
    return {
      collapsed,
      menuOptions,
      renderMenuLabel (option: MenuOption) {
        if ('href' in option) {
          return h(
            'a',
            { href: option.href, target: '_blank' },
            option.label as string
          )
        }
        return option.label as string
      },
      renderMenuIcon (option: MenuOption) {
        // 渲染图标占位符以保持缩进
        if (option.key === 'sheep-man') return true
        // 返回 falsy 值，不再渲染图标及占位符
        if (option.key === 'food') return null
        return h(NIcon, null, { default: () => h('BookmarkOutline') })
      },
      expandIcon () {
        return h(NIcon, null, { default: () => h('CaretDownOutline') })
      }
    }
  }
})
</script>
<style scoped>

</style>