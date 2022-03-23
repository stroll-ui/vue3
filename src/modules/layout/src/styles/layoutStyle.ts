import styled from 'vue3-styled-components'

export const LayoutBox: any = styled.div`
  .stroll-layout-left{
    background-color: rgba(10, 45, 136, 1);
  }
  .n-layout-toggle-bar{
    .n-layout-toggle-bar__top,
    .n-layout-toggle-bar__bottom {
      // background-color: #ECF5FF;
    }
    &:hover{
      .n-layout-toggle-bar__top,
      .n-layout-toggle-bar__bottom {
        background-color: rgba(64, 158, 255, 1)
      }
    }
  }
  .stroll-layout-left-logo {
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const StrollLayoutLeftMenu: any = styled.div`
  .n-menu{
    .n-menu-item::before {
      left: 0px;
      right: 0px;
    }
    .n-menu-item-content {
      .n-menu-item-content-header,
      .n-menu-item-content__arrow,
      .n-menu-item-content__icon {
        color: rgba(255, 255, 255, .7);
      }
    }
    &>.n-menu-item, &>.n-submenu {
      background-color: rgba(255, 255, 255, .08);
      border-radius: 4px;
      width: ${({ Switch }: any): string => {
        if (Switch) {
          return `40px`
        }
        return `90%`
      }};
      margin-left: ${({ Switch }: any): string => {
        if (Switch) {
          return `11px`
        }
        return `5%`
      }};
      &>.n-menu-item-content {
        padding-left: ${({ Switch }: any): string => {
          if (Switch) {
            return `9px !important`
          }
          return `16px !important`
        }};
      }
    }
  }
`
export const StrollLayoutRightHeader = styled.div`
  cursor: pointer;
  .stroll-menu_open,
  .stroll-menu_stow {
    display: inline-block;
    fontSize: 16px;
    padding: 12px 10px;
  }
`
export const StrollLayoutRightContent = styled.div`
  padding: 20px;
  overflow-y: auto;
`
