const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  try {
    const response = await axios.get('https://bvopen.abrickis.me/#/standings');
    const $ = cheerio.load(response.data);

    console.log($('body').html());
  } catch (error) {
    console.log(error);
  }
})();
