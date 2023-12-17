import type {PropType} from 'vue'
export type ButtonTypes = 'primary' | 'success' | 'warning' | 'danger' | 'info' 
export type ButtonSize = 'large' | 'size'
export type NativeType = 'submit' | 'reset' | 'button'

export interface ButtonProps{
    type?: ButtonTypes,
    size?: ButtonSize,
    plain?: boolean,
    round?: boolean,
    circle?: boolean,
    disabled?: boolean,
    nativeType?: NativeType,
    autofocus?: boolean,
    icon?: string
}
export interface ButtonInstance{
    ref: HTMLButtonElement
}
// export const buttonProps = {
//     type:{
//         type: String as PropType<ButtonTypes>
//     },
//     size:{
//         type: String as PropType<ButtonSize>
//     },
//     plain:{
//         type: Boolean
//     },
//     round:{
//         type: Boolean
//     },
//     circle:{
//         type: Boolean
//     },
//     disabled:{
//         type: Boolean
//     }
// }