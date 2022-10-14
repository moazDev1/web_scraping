import express from "express";
import fetchData from "./utils/fetchData";
import { parse } from "json2csv";

const app = express();

app.get("/", async function (req, res) {
    res.send("Hello");
});

// ENDPONIT for retreiving json data
app.get("/jsonData", async function(req, res) {
    try {
        const data = await fetchData();
        res.send(data);
    } catch (error) {
        throw error;
    }
});

// ENDPONIT for retreiving CSV data
app.get("/csvData", async function(req, res) {
    const fields = ["bib", "firstName", "lastName", "officialTime", "chipTime"] ;
    const opts = { fields };

    try {
        const data = await fetchData();
        const csv = parse(data.data, opts);
        console.log(csv);
        res.send(csv);
    } catch (error) {
        throw error;
    }
});

app.listen(5000, () => {console.log("Listening...")});
