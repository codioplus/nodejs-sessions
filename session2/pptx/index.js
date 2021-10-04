const axios = require("axios");
const cheerio = require("cheerio");
const pptxgen = require("pptxgenjs");
let pptx = new pptxgen();

const url = "https://www.learnpick.in/prime/documents/ppts/details/5428/ppt-on-python-programming";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const response = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(response.data);
    // Select all the list items in plainlist class
    const listItems = $(".item img");
    listItems.each((idx, el) => {
        let x = el.attribs.src;
        console.log(x);
        let slide = pptx.addSlide();
        slide.addImage({ path: x,w:'100%',h:'100%' });
    });
    pptx.writeFile({ fileName: "presentation.pptx" });
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();
