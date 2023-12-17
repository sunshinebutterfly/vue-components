
import{expect,test, describe , vi, Mocked} from 'vitest'
import axios from 'axios'
import {testFn, request} from './test/test.ts'
vi.mock('axios')

// 类型断言
const mockaxios = axios as Mocked<typeof axios>

describe('functions', ()=>{
  test('fn', () => {
    //检查函数
   const callback = vi.fn()
   testFn(12,callback)
   // 测试已经被调用
   expect(callback).toHaveBeenCalled()
   // 测试已经被调用的参数 
   expect(callback).toHaveBeenCalledWith(12)
  })

  test('fn', () => {
   // 监控调用对象的方法
    const obj = {
      getName: () => 1
    }

    const spy = vi.spyOn(obj, 'getName')

    obj.getName()
    expect(spy).toHaveBeenCalled()
    obj.getName()

    //调用了几次，目前是2次
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
// 模拟第三方库
test('test', async() => {
  mockaxios.get.mockImplementation( () => Promise.resolve({data:123}))
  mockaxios.get.mockResolvedValue({data:123})
  const res = await request()
  expect(res).toBe(123)
})

test('test', () => {
  const name = 'sum'
  expect(name).toBe('sum')
  expect(2 + 2).toBe(4)
})

test('测试true  false', () => {
  // 断言，测试true 和false
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('测试number', () => {
  //测试数字比大小
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('测试object', () => {
  // 断言，测试object
  expect({name:'sum'}).toEqual({name:'sum'})
})



// //抢购参数设置
// var Recordnumber=1;
// var nIntervId1;
// function go2buy() {
// console.log("js脚本正在帮你抢购＊＊＊＊＊＊＊＊＊＊＊＊＊ 刷新" + Recordnumber + "次");
//   Recordnumber++;
//   D=document.getElementById("pro-operation");
// A=D.firstChild;
//   if(A.className=="product-button02 disabled")
//   {
//     console.log("还未开始");
//   }
//   else
//   {
//     A.click();
//     clearInterval(nIntervId0);
//     nIntervId1=setInterval("submit()", 0);
//   }
//   D=undefined;
//   A=undefined;

// }

// function SubmitOrder(){
// Sub=document.getElementById("checkoutSubmit");
// if(Sub){
//   document.getElementById("checkoutSubmit").click();
//   clearInterval(nIntervId1);
//   document.getElementById("checkoutSubmit").click();
// }
// Sub=undefined;
// }
// nIntervId0 = setInterval("go2buy()", 1);
// // 测试回调函数

// https://www.vmall.com/product/10086281788718.html#2601010457515