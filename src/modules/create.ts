import { App } from 'vue'

type ComponentType = any
type MethodType = { [key: string]: Function }

export interface NUiInstance {
  version: string
  componentPrefix: string
  install: (app: App) => void
}

interface NUiCreateOptions {
  methods?: MethodType
  components?: ComponentType[]
  componentPrefix?: string
}

function create ({
  componentPrefix = 'S',
  components = [],
  methods = {}
}: NUiCreateOptions = {}): NUiInstance {
  const installTargets: App[] = []
  function registerComponent (
    app: App,
    name: string,
    component: ComponentType
  ): void {
    const registered = app.component(componentPrefix + name)
    if (!registered) {
      app.component(componentPrefix + name, component)
    }
  }
  function install (app: App): void {
    if (installTargets.includes(app)) return
    installTargets.push(app)
    components.forEach((component) => {
      const { name, alias } = component
      registerComponent(app, name, component)
      if (alias) {
        alias.forEach((aliasName: string) => {
          registerComponent(app, aliasName, component)
        })
      }
    })
    Object.keys(methods).forEach(key => {
      app.config.globalProperties[`$${key}`] = methods[key]
    })
  }
  return {
    version: '0.0.0',
    componentPrefix,
    install
  }
}

export default create
