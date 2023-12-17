<template>
    <div class="sun-collapse">
        <slot/>
    </div>
</template>
  
<script setup lang="ts">
import {ref,provide,watch} from 'vue'
import type {nameTypes,CollapseProps,CollapseEmits} from './collapse'
import {collapseContentKey} from './collapse'
defineOptions({
  name: 'SunCollapse',
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<nameTypes[]>(props.modelValue)

// 响应式刷新
watch(()=> props.modelValue, () =>{
    activeNames.value = props.modelValue
})

if(props.accordion && activeNames.value.length > 1){
    console.warn('手风琴特效默认只有一个name')
}

const handleItemClick = (item: nameTypes) => {
    if(props.accordion){
        //手风琴特效 
        activeNames.value = [activeNames.value[0] === item ? '' : item]

    }else{
        const index = activeNames.value.indexOf(item)
        if(index > -1){
            //存在删除数据
            activeNames.value.splice(index, 1)
        }else{
            //不存在加入数据
            activeNames.value.push(item)
        }
    }
    emits('update:modelValue',activeNames.value)
    emits('change',activeNames.value)
}
provide(collapseContentKey,{
    activeNames,
    handleItemClick
})
</script>