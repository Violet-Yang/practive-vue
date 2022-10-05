<template>
  <div class="h-full">
    <component :is="layout"> <slot></slot> </component>
  </div>
</template>

<script>
import Default from '@/views/DefaultLayout'
import Clear from '@/views/ClearLayout'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  components: {
    Clear,
    Default,
  },

  setup() {
    const route = useRoute()
    const layout = computed(() => {
      const layoutList = {
        Default: 'Default',
        Clear: 'Clear',
      }
      return layoutList[route.meta.layout] ?? 'Default'
    })

    return {
      layout,
    }
  },
}
</script>

<style lang="scss" scoped></style>
