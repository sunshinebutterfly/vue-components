import type {Ref, InjectionKey} from 'vue'
export type nameTypes = string | number

// 设置子组件类型
export interface CollapseItemProps{
    name: nameTypes,
    title?: string,
    disabled: boolean
}

export interface CollapseContent{
    activeNames: Ref<nameTypes[]>,
    handleItemClick: (name: nameTypes) => void
}

// 设置父组件类型
export interface CollapseProps{
    modelValue: nameTypes[],
    accordion?: boolean,
}

// 设置父组件类型
export interface CollapseEmits{
    (e: 'update:modelValue', values: nameTypes[]) : void,
    (e: 'change' , values: nameTypes[]): void
}

// 透传设置一个key值
export const collapseContentKey: InjectionKey<CollapseContent> = Symbol('collapseContentKey')
