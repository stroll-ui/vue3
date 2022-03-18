<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="menuMinSize"
    :collapsed-icon-size="collapsedIconSize"
    :options="menuOptions"
    :key-field="field.key"
    :label-field="field.label"
    :children-field="field.children"
    :render-label="renderMenuLabel"
    :render-icon="renderMenuIcon"
    :expand-icon="expandIcon"
    @update:value="handleUpdateValue"
  />
</template>

<script lang='ts'>
import { defineComponent, h} from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { field, menuOptions, collapsed, menuMinSize, collapsedIconSize } from './../lib/variable'
export default defineComponent({
  name: 'Menu',
  components: { NMenu, NIcon },
  setup () {
    const renderMenuLabel = ( option: MenuOption) => {
      if (option.keyType === 'href') {
        return h(
          'a',
          { href: option.href, target: '_blank' },
          option.label as string
        )
      }
      return h( 'a', {}, option.label as string )
    }
    const renderMenuIcon = (option: MenuOption) => {
      if (option.key === 'sheep-man') return true // 渲染图标占位符以保持缩进
      if (option.key === 'food') return null // 返回 falsy 值，不再渲染图标及占位符
      return h(NIcon, null, { default: () => h('i', { class: 'stroll_bell' }) })
    }
    const expandIcon = () => {
      return h(NIcon, null, { default: () => h('i', { class: 'stroll_down' }) })
    }
    const handleUpdateValue = (key: string, item: MenuOption) => {
      console.log(key, item);
    }
    return {
      field,
      collapsed,
      menuOptions,
      menuMinSize,
      collapsedIconSize,
      handleUpdateValue,
      renderMenuLabel,
      renderMenuIcon,
      expandIcon
    }
  }
})
</script>
<style scoped>

</style>
