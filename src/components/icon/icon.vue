<template>
    <i class="sun-icon" :class="{'is-loading' :loading}" :style="IconStyle" v-bind="$attrs">
      <slot></slot>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type {iconProps} from './icon.ts'
//inheritAttrs 防止透传
defineOptions({
  name: 'SunIcon',
  inheritAttrs: false,
})
const props = defineProps<iconProps>()

const IconStyle = computed( () => {
    const {size, color} = props
    if(!size && !color){
        return {}
    }else{
        return {
            fontSize: size ?  `${size}px` : undefined,
            '--color': color? color : ''
        }
    }
})

</script>
<style> 

</style>