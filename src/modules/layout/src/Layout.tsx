import {
  defineComponent,
  nextTick,
  onMounted,
  watch,
  onBeforeUnmount,
  h
} from 'vue'
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter
} from 'naive-ui'
import variable from './lib/variable'
import { SEl, windowHeight } from '../../methods'
import Menu from './compontents/menu'
import { layoutProps } from './lib/interface'

export default defineComponent({
  name: 'Layout',
  props: layoutProps,
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
    const setCollapsed = async () => {
      collapsed.value = !collapsed.value
    }

    const SiderTrigger = async () => {
      const layoutLeftToggleBar = await SEl('.stroll-layout-left .n-layout-toggle-bar')
      const layoutLeftToggleBarChilds = layoutLeftToggleBar.childNodes

      layoutLeftToggleBarChilds.forEach((el: any) => {
        el.style.left = '9px'
      })
    }

    onMounted(() => {
      window.addEventListener('resize', onResize)
      SiderTrigger()
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
      setCollapsed,
      onResize,
      variable,
      slotList,
      collapsed,
      menuMinSize,
      menuMaxSize
    }
  },
  render () {
    const SiderStyle = `height: calc(100vh)`
    const HeaderStyle = `cursor: pointer; display:inline-block; font-size: 16px; padding: 12px 10px;`
    const contentStyle = `padding: 20px`

    return (
      <NLayout has-sider >
        <NLayoutSider
          bordered
          showTrigger="bar"
          collapseMode="width"
          triggerStyle="width: 20px; right: -20px;"
          collapsedTriggerStyle="width: 20px; right: -20px;"
          class="stroll-layout-left"
          style={SiderStyle}
          collapsed={this.collapsed}
          collapsedWidth={this.menuMinSize}
          width={this.menuMaxSize}
          nativeScrollbar={false}
          onUpdate:collapsed={this.onCollapsed}>
            {this.$slots.menu ? (
              <dev>{this.$slots.menu()}</dev>
            ) : (
              <Menu />
            )}
        </NLayoutSider>
        <NLayout class="stroll-layout-right">
          <NLayoutHeader bordered class="stroll-layout-header">
            {this.$slots.header ? (
              <dev>{this.$slots.header()}</dev>
            ) : (
              <div>
                <i
                  onClick={this.setCollapsed}
                   style={HeaderStyle}
                  class={this.collapsed ? 'stroll_menu_open': 'stroll_menu_stow'}
                ></i>
              </div>
            )}
          </NLayoutHeader>
          <NLayoutContent style={contentStyle} class="stroll-layout-content">
            {this.$slots.content ? (
              <dev>{this.$slots.content()}</dev>
            ) : (<dev>content</dev>)}
          </NLayoutContent>
          <NLayoutFooter class="stroll-layout-footer">
            {this.$slots.footer ? (
              <dev>{this.$slots.footer}</dev>
            ) : null}
          </NLayoutFooter>
        </NLayout>
      </NLayout>
    )
  }
})
