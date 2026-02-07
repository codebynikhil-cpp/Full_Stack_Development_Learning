import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: '12323' // you can paste actual api key here
})

console.log(openai.apiKey)