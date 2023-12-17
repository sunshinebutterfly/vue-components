import{test, describe,expect} from 'vitest'
import {mount} from '@vue/test-utils'
import Collapse from './collapse.vue'
import CollapseItem from './collapseItem.vue'

/**
 * mount : 挂在组件，接受参数：1：对应的组件，2：具体内容
 * 
 */
//测试button组件
describe('collapse', () => {
  test('base',async () => {
    const wapper = mount( () => 
        <Collapse modelValue={['a']}>
            <CollapseItem name="a" title="this bbbbbbb">
              <div>aaaaaa</div>
            </CollapseItem>
            <CollapseItem name="b" title="this bbbbbbb">
              <div>nnnnnnbbbbbbbbbbbbb</div>
            </CollapseItem>
            <CollapseItem name="c" disabled title="this cccccccccccc">
              <div>cccccccccccccccc</div>
            </CollapseItem>
        </Collapse>
      ,{
        global:{
            stubs:['SIcon']
        },
        attachTo:document.body
      })
      const headers = wapper.findAll('.sun-collapse-item__header')
      const contents = wapper.findAll('.sun-collapse-item__warp')

      // 长度
      expect(headers.length).toBe(3)
      expect(contents.length).toBe(3)

      // 文本
      const firstheader = headers[0]
      const secondheader = headers[1]
      expect(firstheader.text()).toBe('this bbbbbbb')

      //内容
      const firstContent = contents[0]
      const secondContent = contents[1]
      expect(firstContent.isVisible()).toBeTruthy()
      expect(secondContent.isVisible()).toBeFalsy()
      expect(firstContent.text()).toBe('aaaaaa')

      // 点击
      await firstheader.trigger('click')
      console.log(firstContent.html())
      expect(firstContent.isVisible()).toBeFalsy()

      await secondheader.trigger('click')
      expect(secondContent.isVisible()).toBeTruthy()

      // disabled
      const disabledheader = headers[2]
      const disabledContent = contents[2]
      expect(disabledheader.classes()).toContain('is-disabled')
      await disabledheader.trigger('click')
      expect(disabledContent.isVisible()).toBeFalsy()


  })
})
