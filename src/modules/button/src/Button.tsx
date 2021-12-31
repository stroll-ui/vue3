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
  size: String as PropType<Size>,
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
    return (
      <Component>
        <h1>
          {
            $slots.default ? (
              <span>{$slots.default()}</span>
            ) : 'default'
          }
          {/* <slot>sss</slot> */}
        </h1>
      </Component>
      
    )
  }
})

export default Button