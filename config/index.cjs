/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx296af24f0f8f6016',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '69f19f17a7ff012ffe131d6afcab60f6',

  PROVINCE: '河南',
  CITY: '驻马店',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: ["opBnL6flCiFemvC1X_L6Xo6uTDt8","opBnL6TgtV0ZqpBUnogs2hS5Pon4"]
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'W_tO1-PKIKUJHzfdhE5wShWczjD5CoMS7z38ZT4gW4Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '你', year: '2001', date: '08-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        //{
        //  type: '生日', name: '禹萌', year: '2001', date: '08-16',
        //},
        //{
        //  type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        //},
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [ 
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-10-19' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

