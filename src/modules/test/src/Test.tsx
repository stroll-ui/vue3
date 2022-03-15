import { defineComponent, PropType, ExtractPropTypes, h } from 'vue'
import type { Type, Size } from './lib/interface'
const useTheme = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
} as const
type themePropKeys = keyof typeof useTheme
export type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>,
  | Exclude<themePropKeys, 'themeOverrides'>
  | Extract<keyof T, `internal${string}`>>
const testProps = {
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
export type TestProps = ExtractPublicPropTypes<typeof testProps>
const Test = defineComponent({
  name: 'Test',
  props: testProps,
  render () {
    const { $slots, tag: Component } = this
    console.log(this)
    const form: any = {
      b: {},
      a: {},
      c: {},
      e: {}
    }
    const arr: string[] = ['a', 'b', 'c', 'e']
    const Temporary: any = {}
    arr.forEach(key => {
      Temporary[key] = form[key]
    })
    console.log(Temporary)
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

export default Test