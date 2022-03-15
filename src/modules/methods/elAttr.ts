export type StrollLayout = typeof StrollLayoutContentEl

export const StrollLayoutContentEl = async () => {
  return document.querySelector('.stroll-layout-content') as HTMLElement
}

export const StrollLayoutContentHeight = async (offset?: Boolean) => {
  const { clientHeight = 0, offsetHeight = 0 } = await StrollLayoutContentEl()
  if (offset) {
    return offsetHeight
  }
  return clientHeight
}

export const StrollLayoutAttr = async () => {
  const {
    clientHeight: contentClientHeight = 0,
    offsetHeight: contentOffsetHeight = 0
  } = await StrollLayoutContentEl()

  return {
    contentClientHeight,
    contentOffsetHeight
  }
}

export default {
  StrollLayoutAttr,
  StrollLayoutContentEl,
  StrollLayoutContentHeight
}
