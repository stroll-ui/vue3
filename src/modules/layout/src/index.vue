<template>
dddd
  <NLayout has-sider>
    <NLayoutSider content-style="padding: 24px;">
      海淀桥
    </NLayoutSider>
    <NLayout>
      <NLayoutHeader>颐和园路</NLayoutHeader>
      <NLayoutContent content-style="padding: 24px;">
        平山道
      </NLayoutContent>
      <NLayoutFooter>成府路</NLayoutFooter>
    </NLayout>
  </NLayout>
  <!-- <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      海淀桥
    </n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-layout> -->
</template>

<script  lang='ts'>
import { defineComponent} from 'vue'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
export default defineComponent({
  name: 'SLayout',
  components: {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter
  },
  setup() {
    return {};
  },
});
</script>
<style lang='stylus' scoped>

</style>