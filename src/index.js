const express = require('express');
const app = express();

const superagent = require('superagent');

const getHotNews = require('./getHotNews');

app.get('/', (req, res) => {
  res.send('hello word');
})

superagent.get('http://news.baidu.com/').end((err, res) => {
  if(err) {
    console.log(`fail - ${err}`)
  } else {
    const hotNews = getHotNews(res)
    console.log(hotNews)
  }
})

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('启动服务')
})
