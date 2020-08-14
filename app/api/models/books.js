const axios = require('axios');

let API = '697XCBWcoR9ntBG5c0KRdNC47mYxAfgz';
let url='https://api.nytimes.com/svc/books/v3/lists.json?api-key='+API;

async function CariBuku(list = 'hardcover-fiction'){
    try {
       const res = await axios.get(url+'&list='+list);
       return res.data;
    }
   catch(err) {
        return err;
   }
}

module.exports = {CariBuku}