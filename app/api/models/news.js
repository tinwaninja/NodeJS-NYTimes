const request = require('request');

let API = 'T7E7Y9osIcoIwtz7k2rYwUy5GSXlPXUA';
let url='https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+API;

function News(){
request({
            url: url,
            method: 'GET'
        }, function (error, response, body) {
            if (error) throw error;
            return JSON.parse(body)
});
}
News()
//module.exports = {News}