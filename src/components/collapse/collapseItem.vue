<template>
    <div class="sun-collapse-item" 
        :class="{
            'is-disabled' : disabled,
        }">
        <div class="sun-collapse-item__header"
        :class="{
            'is-disabled' : disabled,
            'is-active' : isActive
        }"
         :id="`item-header-${name}`" 
         @click="handleClick">
            <slot name="title">{{ title }}</slot>
            <sun-icon class="header-ArrowRight">
                <ArrowRight></ArrowRight>
            </sun-icon>
        </div>
        <Transition name="silde" v-on="transitionEvents">
            <div class="sun-collapse-item__warp" v-show="isActive">
                <div class="sun-collapse-item__content" :id="`item-content-${name}`">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import {inject, computed} from 'vue'
import type {CollapseItemProps} from './collapse.ts'
import {collapseContentKey} from './collapse'
import SunIcon from './../icon/icon.vue'
defineOptions({
  name: 'SunCollapseItem',
})
// 处理类型
const props = defineProps<CollapseItemProps>()
const collapseContent = inject(collapseContentKey)
const isActive = computed(() => collapseContent?.activeNames.value.includes(props.name))

// 处理单击事件
const handleClick = () =>{
    if(props.disabled){return}
    collapseContent?.handleItemClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    beforeEnter(el){
        el.style.height = '0px'
        el.style.overflow = 'hidden'
    },
    enter(el){
        el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el){
        el.style.height = ''
        el.style.overflow = ''
    },
    beforeLeave(el){
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
    },
    leave(el){
        el.style.height = '0px'
    },
    afterLeave(el){
        el.style.height = ''
        el.style.overflow = ''
    },
}
</script>
<style> 
</style>