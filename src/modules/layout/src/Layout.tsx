import {
  defineComponent,
  nextTick,
  onMounted,
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
import {
  StrollLayoutLeftMenu,
  StrollLayoutRightContent,
  StrollLayoutRightHeader
} from './styles/layoutStyle'

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
      const headerEl = await SEl('.stroll-layout-right-header')
      const contentEl = await SEl('.stroll-layout-right-content')
      const footerEl = await SEl('.stroll-layout-right-footer')
      const clientHeight =  await windowHeight()

      if (clientHeight) {
        contentEl.style.height = `${clientHeight - headerEl.offsetHeight - footerEl.offsetHeight - 42}px`
      }
    }
    const setCollapsed = async () => {
      collapsed.value = !collapsed.value
    }

    const SiderTrigger = async () => {
      // width: 80%
      // margin-left: 10%;
      const layoutLeftToggleBar = await SEl('.n-layout-toggle-bar')
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
    
    return (
      <NLayout has-sider >
        <NLayoutSider
          bordered
          showTrigger="bar"
          collapseMode="width"
          style='height: calc(100vh)'
          triggerStyle="width: 20px; right: -20px;"
          collapsedTriggerStyle="width: 20px; right: -20px;"
          collapsed={this.collapsed}
          collapsedWidth={this.menuMinSize}
          width={this.menuMaxSize}
          nativeScrollbar={false}
          onUpdate:collapsed={this.onCollapsed}>
              {this.$slots.menu ? (
                <div>{this.$slots.menu()}</div>
                ) : (
                <StrollLayoutLeftMenu Switch={this.collapsed}>
                  <Menu class="stroll-layout-left-menu" />
                </StrollLayoutLeftMenu>
              )}
        </NLayoutSider>
        <NLayout class="stroll-layout-right">
          <NLayoutHeader bordered>
            <StrollLayoutRightHeader class="stroll-layout-right-header">
              {this.$slots.header ? (
                <div>{this.$slots.header()}</div>
              ) : (
                <div>
                  <i
                    onClick={this.setCollapsed}
                    class={this.collapsed ? 'stroll-menu_open': 'stroll-menu_stow'}
                  ></i>
                </div>
              )}
            </StrollLayoutRightHeader>
          </NLayoutHeader>
          <NLayoutContent>
            <StrollLayoutRightContent class="stroll-layout-right-content">
              {this.$slots.content ? (
                <div>{this.$slots.content()}</div>
              ) : (<div>content</div>)}
            </StrollLayoutRightContent>
          </NLayoutContent>
          <NLayoutFooter class="stroll-layout-right-footer">
            {this.$slots.footer ? (
              <div>{this.$slots.footer}</div>
            ) : null}
          </NLayoutFooter>
        </NLayout>
      </NLayout>
    )
  }
})
