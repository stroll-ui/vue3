export const windowHeight = async () => {
  return window.innerHeight
}

export const SEl = async (el: string) => {
  return document.querySelector(el) as HTMLElement
}

export const SElAttr = async (el: string) => {
  const elAttr = await SEl(el)
  return { ...elAttr.attributes }
}

export const SLayoutContentEl = async () => {
  return await SEl('.stroll-layout-content')
}

export const SLayoutContentHeight = async (offset?: Boolean) => {
  const { clientHeight = 0, offsetHeight = 0 } = await SLayoutContentEl()
  if (offset) {
    return offsetHeight
  }
  return clientHeight
}

export const SLayoutContentElAttr = async () => {
  const {
    clientHeight: contentClientHeight = 0,
    offsetHeight: contentOffsetHeight = 0
  } = await SLayoutContentEl()

  return {
    contentClientHeight,
    contentOffsetHeight
  }
}
