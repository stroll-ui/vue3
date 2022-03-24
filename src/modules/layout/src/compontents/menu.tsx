
import { defineComponent, getCurrentInstance, h} from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useRouter } from 'vue-router'
import { field, menuOptions, collapsed, menuMinSize, collapsedIconSize } from '../lib/variable'

export default defineComponent({
  name: 'Menu',
  setup () {
    const router = useRouter()
    return {
      field,
      router,
      collapsed,
      menuOptions,
      menuMinSize,
      collapsedIconSize
    }
  },
  render () {
    const renderMenuLabel = ( option: MenuOption) => {
      return h( 'a', option[this.field.label] as string )
    }
    const renderMenuIcon = (option: MenuOption) => {
      if (option[this.field.icon])  return h(NIcon, null, () => h('i', { class: option[this.field.icon] }))
      return null
    }
    const expandIcon = () => {
      return h(NIcon, null, { default: () => h('i', { class: 'stroll-down' }) })
    }
    const handleUpdateValue = (key: string, item: MenuOption) => {
      if (['http://', 'https:/'].includes(key.slice(0, 7)) || key.slice(0, 2) === '//') {
        window.open(key, '_blank')
        return
      }
      if (key.slice(0, 1) === '/') {
        this.router.push({ path: key })
      } else {
        this.router.push({ name: key })
      }
    }
    console.log(this.menuOptions);
    return (
      <NMenu
        root-indent={12}
        collapsed={this.collapsed}
        collapsedWidth={this.menuMinSize}
        collapsedIconSize={this.collapsedIconSize}
        options={this.menuOptions}
        keyField={this.field.key}
        labelField={this.field.label}
        childrenField={this.field.children}
        renderLabel={renderMenuLabel}
        renderIcon={renderMenuIcon}
        expandIcon={expandIcon}
        onUpdate:value={handleUpdateValue}
      />
    )
  }
})
