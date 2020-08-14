const axios = require('axios');

let API = 'T7E7Y9osIcoIwtz7k2rYwUy5GSXlPXUA';
let url='https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+API;
async function News(){
      try {
         const res = await axios.get(url);
         return res.data;
      }
     catch(err) {
          return err;
     }
}

async function CariNews(nama,tipe = 'newest'){
    try {
       const res = await axios.get(url+'&q='+nama+'&sort='+tipe);
       return res.data;
    }
   catch(err) {
        return err;
   }
}

module.exports = {News,CariNews}