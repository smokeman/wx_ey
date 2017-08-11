var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = {
  token: 'aoxing',
  appid: 'wx4fe135a46ae46e63',
  encodingAESKey: 'pvZnHaVk95b9c7gWokQKsi82kIjD5Wq6T5rrRiheLCd',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

// app.use(express.query());
// app.use('/wechat', wechat(config, function (req, res, next) {
//   // 微信输入信息都在req.weixin上
//   var message = req.weixin;
//   if (message.FromUserName === 'diaosi') {
//     // 回复屌丝(普通回复)
//     res.reply('hehe');
//   } else if (message.FromUserName === 'text') {
//     //你也可以这样回复text类型的信息
//     res.reply({
//       content: 'text object',
//       type: 'text'
//     });
//   } else if (message.FromUserName === 'hehe') {
//     // 回复一段音乐
//     res.reply({
//       type: "music",
//       content: {
//         title: "来段音乐吧",
//         description: "一无所有",
//         musicUrl: "http://mp3.com/xx.mp3",
//         hqMusicUrl: "http://mp3.com/xx.mp3",
//         thumbMediaId: "thisThumbMediaId"
//       }
//     });
//   } else {
//     // 回复高富帅(图文回复)
//     res.reply([
//       {
//         title: '你来我家接我吧',
//         description: '这是女神与高富帅之间的对话',
//         picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
//         url: 'http://nodeapi.cloudfoundry.com/'
//       }
//     ]);
//   }
// }));


/* GET home page. */
router.get('/', wechat(config, function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  } else if (message.FromUserName === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.FromUserName === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  } else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
}));

module.exports = router;
