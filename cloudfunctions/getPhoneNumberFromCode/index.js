// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => { // event === request.data
  console.log('event=', event)
  try {
    const result = await cloud.openapi.phonenumber.getPhoneNumber({
        "code": event.code, 
      })
    console.log('result=', result)
    return result
  } catch (err) {
    console.log('err=', err)
    return err
  }
  // const wxContext = cloud.getWXContext()   
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}