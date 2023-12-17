<template>
    <button 
        ref="_ref"
        class="sun-button"
        :class="{
            [`sun-button--${type}`]: type,
            [`sun-button--${size}`]: size,
            'is-plain' : plain,
            'is-round' : round,
            'is-circle' : circle,
            'is-disabled' :disabled
        }"
        :disabled="disabled"
        :autofocus="autofocus"
        :type="nativeType"
    >
    <sun-icon v-if="icon" :class="{'is-loading' :(icon === 'Loading') ? 'Loading' : ''}">
        <component :is="icon" />
    </sun-icon>
    <span>
        <slot></slot>
    </span>
    </button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {ButtonProps} from './button'
import SunIcon from './../icon/icon.vue'
defineOptions({
  name: 'SunButton',
})
// 处理类型
withDefaults(defineProps<ButtonProps>(),{
    nativeType:'button'
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
    ref: _ref
})
</script>
<style> 
</style>