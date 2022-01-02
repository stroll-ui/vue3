import { defineComponent, PropType, ExtractPropTypes } from 'vue'
import type { Type, Size } from './interface'
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
const buttonProps = {
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
export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>
const Button = defineComponent({
  name: 'Button',
  props: buttonProps,
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

export default Button