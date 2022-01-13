import { defineComponent, PropType, ExtractPropTypes, h } from 'vue'
const useTheme = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
} as const
type themePropKeys = keyof typeof useTheme
export type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>,
  | Exclude<themePropKeys, 'themeOverrides'>
  | Extract<keyof T, `internal${string}`>>
const swiperProps = {
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div'
  }
}
export type SwiperProps = ExtractPublicPropTypes<typeof swiperProps>
const Swiper = defineComponent({
  name: 'Swiper',
  props: swiperProps,
  render () {
    const { $slots, tag: Component } = this
    console.log(this)
    
    return (
      <Component>
        {
          $slots.default ? (
            <span>{$slots.default({row: 'default'})}</span>
          ) : 'default'
        }
      </Component>
    )
  }
})

export default Swiper