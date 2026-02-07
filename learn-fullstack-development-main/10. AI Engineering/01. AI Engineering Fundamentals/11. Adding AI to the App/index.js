import { dates } from './utils/dates.js';
import OpenAI from "openai";

// ⚠️ Local testing only. Do NOT deploy with real keys.
const tickersArr = [];

const generateReportBtn = document.querySelector('.generate-report-btn');

generateReportBtn.addEventListener('click', fetchStockData);

document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const tickerInput = document.getElementById('ticker-input');

    if (tickerInput.value.length > 2) {
        generateReportBtn.disabled = false;
        const newTickerStr = tickerInput.value;
        tickersArr.push(newTickerStr.toUpperCase());
        tickerInput.value = '';
        renderTickers();
    } else {
        const label = document.getElementsByTagName('label')[0];
        label.style.color = 'red';
        label.textContent = 'Enter a valid ticker. Example: TSLA.';
    }
});

function renderTickers() {
    const tickersDiv = document.querySelector('.ticker-choice-display');
    tickersDiv.innerHTML = '';
    tickersArr.forEach((ticker) => {
        const newTickerSpan = document.createElement('span');
        newTickerSpan.textContent = ticker;
        newTickerSpan.classList.add('ticker');
        tickersDiv.appendChild(newTickerSpan);
    });
}

const loadingArea = document.querySelector('.loading-panel');
const apiMessage = document.getElementById('api-message');

// --------------- FETCH STOCK DATA ----------------
async function fetchStockData() {
    document.querySelector('.action-panel').style.display = 'none';
    loadingArea.style.display = 'flex';

    try {
        const stockData = await Promise.all(
            tickersArr.map(async (ticker) => {
                const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${POLYGON_API_KEY}`;
                
                const response = await fetch(url);
                if (!response.ok) throw new Error("Polygon API error");
                
                const jsonData = await response.json();
                return { ticker, data: jsonData };
            })
        );

        apiMessage.innerText = "Creating report...";
        fetchReport(stockData);

    } catch (err) {
        loadingArea.innerText = 'There was an error fetching stock data.';
        console.error("Polygon Fetch Error:", err);
    }
}

// --------------- GENERATE AI REPORT ----------------
async function fetchReport(stockData) {
    try {
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });

        const prompt = `
You are a financial trading expert. Review the stock performance data below.

Return:
- BUY / SELL / HOLD decision for each ticker
- A short 3–5 sentence explanation
- Mention trend direction clearly

Stock Data:
${JSON.stringify(stockData, null, 2)}
        `;

        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: "You are a trading expert providing clear, accurate financial advice." },
                { role: 'user', content: prompt }
            ]
        });

        const output = response.choices[0].message.content;
        renderReport(output);

    } catch (err) {
        console.log("OpenAI Error:", err);
        loadingArea.innerText = 'Unable to Access AI. Please refresh and try again.';
    }
}

// --------------- RENDER REPORT ----------------
function renderReport(output) {
    loadingArea.style.display = 'none';
    const outputArea = document.querySelector('.output-panel');
    
    const report = document.createElement('p');
    report.textContent = output;

    outputArea.appendChild(report);
    outputArea.style.display = 'flex';
}
