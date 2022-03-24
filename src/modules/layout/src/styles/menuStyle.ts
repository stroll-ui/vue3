import styled from 'vue3-styled-components'

export const StrollLayoutLeftMenu: any = styled.div`
.stroll-layout-left-logo, .stroll-layout-left-logo-min {
  position: fixed;
  top: 0;
  left: 0;
}
.stroll-layout-left-logo-min {
  width: ${({ MenuMinSize }: any): string => `${MenuMinSize - 36}px`};
  padding: ${(): string => '12px 18px'};
}
.stroll-layout-left-logo{
  width: ${({ MenuMaxSize }: any): string => `${MenuMaxSize - 36}px`};
  padding: ${(): string => '9px 18px'};
}
.n-menu{
  margin-top: ${({ Switch }: any): string => {
    if (Switch) {
      return `52px`
    }
    return `58px`
  }};
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