import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
    // apiKey: process.env.OPENAI_API_KEY
});

async function explainTopic(topic, audience, length) {
    const prompt = `
        Explain "${topic}" to a ${audience}.
        The explanation should be ${length}.
        Keep it clear, accurate, and easy to follow.
    `;

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { role: "system", content: "You are a helpful and clear explainer of difficult topics." },
            { role: "user", content: prompt }
        ]
    });

    console.log(response.choices[0].message.content);
}

// 🌟 Example call:
explainTopic(
    "Quantum Computing",
    "10-year-old child",
    "short (3–5 sentences)"
);
