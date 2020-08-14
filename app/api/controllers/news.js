const newsModel = require('../models/news');

module.exports = {
    getAll: function(req, res, next) {
        let newssList = [];

        newsModel.News({}, function(err, newss) {
            if (err)
                next(err);
            else
                /*for (let news of newss) {
                    newssList.push({
                        headline: news.response.docs.headline.main,
                    });
                }*/
                console.log(newss)
                //res.json({status: "success", message: "newss list found.", data: {newss: newss}});
        });
    },
}