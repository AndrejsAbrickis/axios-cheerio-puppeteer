const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://bvopen.abrickis.me/#/standings');
    await page.waitForSelector('.category', { timeout: 1000 });

    const body = await page.evaluate(() => {
      return document.querySelector('body').innerHTML;
    });
    console.log(body);

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
