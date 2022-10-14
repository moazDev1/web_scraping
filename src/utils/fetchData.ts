import puppeteer from "puppeteer";
import Player from "../player";

export default async function fetchData() {
    try {
        //const browser = await puppeteer.launch();
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
            headless: false,
        });
        const page = await browser.newPage();
        await page.goto("https://www.sportstats.ca/display-results.xhtml?raceid=114430");

        const data = await page.evaluate(async () => {
            const nextButton = document.getElementById("mainForm:j_idt335");
            const pageLength = document.querySelector("ul.pagination")?.nextElementSibling;
            let allData = [];

            const text = pageLength?.textContent;
            const length = text?.substring(text.indexOf('/')+1, text.length).trim();
            
            // for(let i=0; i<Number(length); i++) {
                try {
                    const pageData: Player[] = await new Promise(function(resolve, reject) {
                        setTimeout(() => {
                            const tbody = document.querySelector("table tbody");
                            const rows = tbody?.children;
                
                            const pageData: Player[] = [];
                            if(rows) { 
                                for(let row of rows) {
                                    const col = row.children;

                                    const player: Player = {
                                        bib: Number(col[2].textContent),
                                        firstName: col[3].textContent?.substring(0, col[3].textContent.indexOf(' ')),
                                        lastName: col[3].textContent?.substring(col[3].textContent.indexOf(' ') +1, col[3].textContent.length),
                                        officialTime: col[8].textContent,
                                        chipTime: col[9].textContent
                                    };
                
                                    pageData.push(player);
                                }
                            }
                            resolve(pageData);
                            reject(new Error());
                        }, 1000);
                    });
                    allData.push(...pageData);
                    nextButton?.click();
                } catch (error) {
                    throw error;
                }
            //}
           return allData;
        });

        return {
            data: data,
            length: data.length,
        }
    } catch (error) {
        throw error;
    }
}