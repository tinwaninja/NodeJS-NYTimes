const { CariBuku }  = require('../models/books');


module.exports = {
    getCari: function(req, res, next) {
        (async function () {
        let bukuList = [];
        const bukuData = await CariBuku(req.params.bukuList);
        let bukuDataDocs = bukuData.results;
        //console.log(bukuDataDocs)
        for (let buku of bukuDataDocs) {
            let detailbukuList = [];
            for (let detbuku of buku.book_details) {
                detailbukuList.push({
                    title: detbuku.title,
                    description: detbuku.description,
                    contributor: detbuku.contributor,
                    author: detbuku.author,
                    price: detbuku.price,
                    publisher: detbuku.publisher,
                })
            }
           bukuList.push({
                list_name: buku.list_name,
                published_date: buku.published_date,
                rank: buku.rank,
                amazon_product_url: buku.amazon_product_url,
                details: detailbukuList,
            })
        }
        res.json({status: "success", message: "buku ditemukan.", data:bukuList});

        })();
    },
}
