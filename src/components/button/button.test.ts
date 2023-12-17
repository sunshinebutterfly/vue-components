import{test, describe,expect} from 'vitest'
import {mount} from '@vue/test-utils'
import Button from './button.vue'

/**
 * mount : 挂在组件，接受参数：1：对应的组件，2：具体内容
 * 
 */

//测试button组件
describe('button', ()=>{
  test('fn', () => {
    const wapper = mount(Button,{
        props:{
            type:'primary'
        },
        slots:{
            default:'button'
        }
    })
   console.log(wapper.html())

   // button组件测试用例
   // 测试是否包含class
    expect(wapper.classes()).toContain('sun-button--primary')

    // 测试slot:  使用get  find方法
    expect(wapper.get('button').text()).toBe('button') 

    // 测试事件
    wapper.get('button').trigger('click')
    console.log(wapper.emitted())
    //测试有对应的属性
    expect(wapper.emitted()).toHaveProperty('click')
  })


  test('判断禁用disabled', () => {
    const wapper = mount(Button,{
        props:{
            disabled:true
        },
        slots:{
            default:'disabled'
        }
    })
   
    //测试有对应的属性,toBeDefined 测试是否存在
    expect(wapper.attributes('disabled')).toBeDefined()
    //直接拿取节点的disabled
    expect(wapper.find('button').element.disabled).toBeDefined()
    
    wapper.get('button').trigger('click')
    //测试有对应的属性
    expect(wapper.emitted()).not.toHaveProperty('click')
  })

  test('测试图标',() =>{
    const wapper = mount(Button,{
        props:{
            icon:'edit'
        },
        slots:{
            default:'icon '
        }
    })
    
    const iconElement = wapper.findComponent(Button)
    expect(iconElement.exists()).toBeTruthy()
    //expect(iconElement.element).toBe('edit')
  })
})
