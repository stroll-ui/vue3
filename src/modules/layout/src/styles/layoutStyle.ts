import styled from 'vue3-styled-components'

export const StrollLayoutLeftMenu: any = styled.div`
  .n-menu{
    .n-menu-item::before {
      left: 0px;
      right: 0px;
    }
    &>.n-menu-item, &>.n-submenu {
      background-color: rgba(43, 125, 233, .5);
      border-radius: 4px;
      width: ${({ Switch }: any): string => {
        if (Switch) {
          return `40px`
        }
        return `90%`
      }};
      margin-left: ${({ Switch }: any): string => {
        if (Switch) {
          return `12px`
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
  display: inline-block;
  fontSize: 16px;
  padding: 12px 10px;
`
export const StrollLayoutRightContent = styled.div`
  padding: 20px;
  overflow-y: auto;
`
