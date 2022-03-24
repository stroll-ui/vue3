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
  LayoutBox,
  StrollLayoutLeftMenu,
  StrollLayoutRightContent,
  StrollLayoutRightHeader
} from './styles'

export default defineComponent({
  name: 'Layout',
  props: layoutProps,
  setup (props, content) {
    const { slots: slotList, attrs } = content || {}
    
    if (props.field) {
      Object.keys(props.field).forEach(k => {
        variable.field[k] = props.field[k]
      })
    }
    Object.keys(props).forEach(key => {
      if(variable[key]) {
        if (Array.isArray(props[key]) && variable[key]) {
          props[key].forEach((item: any) => {
            variable[key].push(item)
          })
        } else {
          variable[key].value = props[key]
        }
      }
    })

    const onCollapsed = async (coll: boolean) => {
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
      attrs,
      variable,
      slotList,
      collapsed,
      menuMinSize,
      menuMaxSize
    }
  },
  render () {
    
    return (
      <LayoutBox>
        <NLayout has-sider >
          <NLayoutSider
            bordered
            showTrigger="bar"
            collapseMode="width"
            class="stroll-layout-left"
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
                <StrollLayoutLeftMenu
                  MenuMinSize={this.menuMinSize}
                  MenuMaxSize={this.menuMaxSize}
                  Switch={this.collapsed}
                >
                  {this.collapsed ? (
                    <img
                      src={this.attrs.minLogo as string | undefined}
                      alt="logo" class="stroll-layout-left-logo-min"
                    />
                  ) : (
                    <img
                      src={this.attrs.logo as string | undefined}
                      alt="logo" class="stroll-layout-left-logo"
                    />
                  )}
                  <Menu class="stroll-layout-left-menu" />
                </StrollLayoutLeftMenu>
              )}
          </NLayoutSider>
          <NLayout class="stroll-layout-right">
            <NLayoutHeader bordered>
              <StrollLayoutRightHeader class="stroll-layout-right-header" >
                {this.$slots.header ? (
                  <div>{this.$slots.header()}</div>
                ) : (
                  <div>
                    <i
                      onClick={() => {this.onCollapsed(!this.collapsed)}}
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
      </LayoutBox>
    )
  }
})
