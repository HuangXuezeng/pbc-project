import fetch from '@/api/fetch'

// 获取钉钉配置信息
export function getDDConfig() {
  return fetch({
    url: '/pbcTom/visitor/pbc/getDingConfig.htm',
    method: 'get'
  })
}


// 配置钉钉信息
const jsApiList = {
  jsApiList: [
    'runtime.permission.requestAuthCode',
    'runtime.info',
    'device.notification.prompt',
    'biz.chat.pickConversation',
    'device.notification.confirm',
    'device.notification.alert',
    'device.notification.prompt',
    'biz.chat.open',
    'biz.util.open',
    'biz.user.get',
    'biz.contact.choose',
    'biz.telephone.call',
    'biz.ding.post',
    'biz.util.uploadImage',
    'biz.navigation.setMenu',
    'biz.util.share',
    'ui.webViewBounce.disable',
    'biz.contact.complexPicker',
    'biz.contact.departmentsPicker',
    'biz.ding.create',
    'biz.navigation.close'
  ]
}


const jsApiListPC = {
  jsApiList: [
    'runtime.permission.requestAuthCode',
    'runtime.info',
    'device.notification.prompt',
    'biz.chat.pickConversation',
    'device.notification.confirm',
    'device.notification.alert',
    'device.notification.prompt',
    'biz.chat.open',
    'biz.util.open',
    'biz.user.get',
    'biz.contact.choose',
    'biz.telephone.call',
    'biz.ding.post',
    'biz.util.uploadImage',
    'biz.navigation.setMenu',
    'biz.util.share',
    'biz.contact.complexPicker',
    'biz.contact.departmentsPicker',
    'biz.ding.create',
    'biz.navigation.close',
    'biz.navigation.hideBar'
  ]
}

//投诉直通车
export function setDDConfig() {
  // dd.ready(function() {
  //   dd.runtime.permission.requestAuthCode({
  //       corpId: dingbc52122d6249fde335c2f4657eb6378f, // 企业id
  //       onSuccess: function (info) {
  //             code = info.code // 通过该免登授权码可以获取用户身份
  //             // alert('222'+'hahah')
  //             alert(code);
  //       }});
  // });
  var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
  if (!is_mobi) {
    return new Promise((resolve, reject) => {
      getDDConfig().then(res => {
        let config = res.data
        // console.log(config)
        const data = Object.assign(config, jsApiListPC)
        DingTalkPC.config(data)
        if (data) {
          resolve(data)
        } else {
          reject('获取用户信息失败')
        }
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      getDDConfig().then((res) => {
        // console.log('打印测试'+JSON.stringify(res.data))
        let config = res.data
        console.log('config为：' + JSON.stringify(res.data))
        const data = Object.assign(config, jsApiList)
        dd.config(data)
        // dd.error(function (error) {
        //   /**
        //    {
        //       errorMessage:"错误信息",// errorMessage 信息会展示出钉钉服务端生成签名使用的参数，请和您生成签名的参数作对比，找出错误的参数
        //       errorCode: "错误码"
        //    }
        //   **/ 
        //  console.log('dd error: ' + JSON.stringify(error));
        // });
        if (data) {
          // alert('fo: ' + JSON.stringify(data));
          resolve(data)
        } else {
          reject('获取用户信息失败')
        }
      })
    })
  }
}