# Automated Race Results Data Fetching and Processing

This project involves developing an automated script using Puppeteer to fetch and process race results data from a sports website. The script extracts race data, processes it, and represents it in both JSON and CSV formats for further analysis and use.

## Technologies Used
- JavaScript
- Node.js
- Puppeteer
- Express.js
- json2csv

## Features
- **Automated Data Extraction:** Utilizes Puppeteer to launch a headless browser, navigate to the target website, and extract race results data.
- **Pagination Handling:** Manages pagination to ensure comprehensive data extraction across multiple pages.
- **Data Processing:** Formats the extracted data into structured JSON and converts it to CSV using the json2csv library.
- **API Endpoints:** Provides endpoints using Express.js to retrieve the data in JSON and CSV formats.
- **Robust Error Handling:** Implements error handling to manage issues during data extraction and processing, ensuring script reliability.

## How to Use
1. Clone the repository:
    ```bash
    git clone https://github.com/moazDev1/web_scraping.git
    ```
2. Install the dependencies:
    ```bash
    cd web_scraping
    npm install
    ```
3. Run the script:
    ```bash
    node fetchData.js
    ```
4. Start the Express server:
    ```bash
    node server.js
    ```
5. Access the data:
    - JSON: `http://localhost:5000/jsonData`
    - CSV: `http://localhost:5000/csvData`

## Project Structure
- `fetchData.js`: Contains the Puppeteer script for data extraction.
- `server.js`: Sets up the Express server and API endpoints.
- `utils/`: Includes utility functions for data processing.

## Example Output
The script fetches race results data and provides it in JSON and CSV formats:

- **JSON Format:**
    ```json
    [
        {
            "bib": 123,
            "firstName": "John",
            "lastName": "Doe",
            "officialTime": "02:15:30",
            "chipTime": "02:14:45"
        },
        ...
    ]
    ```

- **CSV Format:**
    ```csv
    bib,firstName,lastName,officialTime,chipTime
    123,John,Doe,02:15:30,02:14:45
    ...
    ```

## Contributing
Feel free to submit issues or pull requests. We welcome contributions to improve this project.
