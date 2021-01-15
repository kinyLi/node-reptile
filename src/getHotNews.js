const cheerio = require('cheerio');
const { get } = require('superagent');

const getHotNews = (res) => {
  let hotNews = [];
  let $ = cheerio.load(res.text);
  $('div#pane-news ul li a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    };
    hotNews.push(news)
  })

  return hotNews;
}

module.exports = getHotNews;