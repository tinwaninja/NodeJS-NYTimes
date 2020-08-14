const { News }  = require('../models/news');

module.exports = {
    getAll: function(req, res, next) {
        (async function () {
        let newsList = [];
        const newsData = await News();
        let newsDataDocs = newsData.response.docs;
        for (let news of newsDataDocs) {
            newsList.push({
                title: news.headline.main,
                abstract: news.abstract,
                pub_date: news.pub_date,
            })
        }
        res.json({status: "error", message: "", data:newsList});
            
        })();
    },
}
