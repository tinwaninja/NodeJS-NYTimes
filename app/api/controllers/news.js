const { News, CariNews}  = require('../models/news');

module.exports = {
    getAll: function(req, res, next) {
        (async function () {
        let newsList = [];
        const newsData = await News();
        let newsDataDocs = newsData.response.docs;
        for (let news of newsDataDocs) {
            let newsListMedia = [];
            for (let newsmedia of news.multimedia) {
                console.log(newsmedia);
                newsListMedia.push({
                    subtype: newsmedia.subtype,
                    url: newsmedia.url,
                })
            }
            newsList.push({
                title: news.headline.main,
                abstract: news.abstract,
                pub_date: news.pub_date,
                image: newsListMedia,
            })
        }
        res.json({status: "success", message: "news ditemukan.", data:newsList});
            
        })();
    },
    getCari: function(req, res, next) {
        (async function () {
        let newsList = [];
        const newsData = await CariNews(req.params.newsNama,req.params.newsTipe);
        let newsDataDocs = newsData.response.docs;
        for (let news of newsDataDocs) {
            let newsListMedia = [];
            for (let newsmedia of news.multimedia) {
                newsListMedia.push({
                    subtype: newsmedia.subtype,
                    url: newsmedia.url,
                })
            }
            newsList.push({
                title: news.headline.main,
                abstract: news.abstract,
                pub_date: news.pub_date,
                image: newsListMedia,
            })
        }
        res.json({status: "success", message: "news ditemukan.", data:newsList});

        })();
    },
}
