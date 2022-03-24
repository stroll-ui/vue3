import styled from 'vue3-styled-components'

export const LayoutBox: any = styled.div`
  .stroll-layout-left{
    background-color: rgba(10, 45, 136, 1);
  }
  .n-layout-toggle-bar{
    .n-layout-toggle-bar__top,
    .n-layout-toggle-bar__bottom {
      left: 9px;
    }
    &:hover{
      .n-layout-toggle-bar__top,
      .n-layout-toggle-bar__bottom {
        background-color: rgba(64, 158, 255, 1)
      }
    }
  }
`
