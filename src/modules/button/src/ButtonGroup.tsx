import { defineComponent, PropType, ExtractPropTypes, h } from 'vue'
import type { Type, Size } from './lib/interface'
const useTheme = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
} as const
type themePropKeys = keyof typeof useTheme
export type ExtractPublicPropTypes<T> = Omit<
Partial<ExtractPropTypes<T>>,
| Exclude<themePropKeys, 'themeOverrides'>
| Extract<keyof T, `internal${string}`>
>
const buttonGroupProps = {
  size: {
    type: String as PropType<Size>,
    default: 'min'
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button'
  },
  type: {
    type: String as PropType<Type>,
    default: 'default'
  },
} as const
export type ButtonGroupProps = ExtractPublicPropTypes<typeof buttonGroupProps>
const ButtonGroup = defineComponent({
  name: 'Button',
  props: buttonGroupProps,
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

export default ButtonGroup