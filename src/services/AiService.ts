import { API_KEY, MODEL_NAME } from '../config';

export const AiService = {
    constructPrompt: (text: string, audience: string) => {
        const templates: Record<string, string> = {
            '5yo': `
        ## 🌟 The Big Idea
        [One simple, exciting sentence explaining the concept]
        ## 🎈 Fun Details
        [Bullet points using simple analogies like LEGOs, magic, or animals. Use lots of emojis!]
        ## 🍭 Magic Words
        [2-3 difficult words explained as if they were magic spells]
        ## 🎮 Try This!
        [A tiny "experiment" or "activity" the child can do to understand the concept]
        ## ❓ One Big Question
        [A thought-provoking question for the child to think about]
      `,
            'senior': `
        ## The Daily Insight
        [A clear, journalistic summary of the topic.]
        ## Historical Context
        [Background information or how this concept relates to the past.]
        ## Why It Matters Today
        [Practical application or modern relevance.]
        ## Legacy & Future
        [How this will be remembered and where it is going next.]
        ## Wisdom Corner
        [A reflective thought or "life lesson" derived from this topic.]
        ## Further Reading
        [Suggest 2 themes or topics related to this for deep exploration.]
      `,
            'ceo': `
        ## Executive Summary
        [BLUF: Bottom Line Up Front. One concise paragraph.]
        ## Key Drivers
        - [Risk/Opportunity Point 1]
        - [Risk/Opportunity Point 2]
        - [Risk/Opportunity Point 3]
        ## Strategic Implication
        [The "So What?" - Impact on ROI or strategy.]
        ## Competitive Landscape
        [How this affects market positioning or competitive advantage.]
        ## Risk Mitigation & ROI
        [Concrete steps to mitigate risks and maximize returns.]
        ## Action Plan
        [3-step immediate deployment sequence.]
      `,
            'genz': `
        ## tl;dr 💀
        [One sentence summary, lowercase, very slang heavy.]
        ## the tea 🍵
        [The main explanation. Use terms like: no cap, bet, fr, slay, cooking, vibez.]
        ## the lore 📜
        [The backstory or deeper context, explained like it's internet drama.]
        ## valid or nah? ✅
        [A quick "vibe check" evaluation of the concept.]
        ## main character energy ✨
        [How the reader can use this knowledge to be the 'main character'.]
        ## vibez ⚡
        [The final takeaway or mood.]
      `,
            'academic': `
        ## Abstract
        [Formal synopsis of the phenomenon.]
        ## Conceptual Framework
        [Detailed explanation using rigorous terminology.]
        ## Critical Analysis
        [Assumptions, theoretical implications, and limitations.]
        ## Methodological Considerations
        [How one would study or measure this phenomenon.]
        ## Future Research Directions
        [Unresolved questions and potential areas for scholarly inquiry.]
        ## Comparative Literature
        [Briefly mention how this relates to another major theory.]
        ## References
        [Invent 2-3 plausible citations in APA format.]
      `
        };

        const specificInstructions: Record<string, string> = {
            '5yo': `Tone: Magical, enthusiastic, and extremely simple. Use vivid analogies (like space ships, magic wands, or giant cookies) to make the concept come alive. Use a warm, storytelling approach.`,
            'senior': `Write to help the reader understand the topic calmly and clearly, like a newspaper explainer. Focus on meaning, background, and context. Use sophisticated but accessible vocabulary. Avoid slang.`,
            'ceo': `Write to support decision-making. Be concise and outcome-focused. Emphasize implications, trade-offs, risks, and opportunities. Use business terminology where appropriate. Every sentence should contribute to an actionable insight.`,
            'genz': `Tone: Terminal online, neo-brutalist, chaotic. High slang density. Mostly lowercase. Use emojis liberally but ironically.`,
            'academic': `Write to evaluate the conceptual validity of the topic. Use formal academic tone and precise terminology. Avoid practical advice. The goal is analytical rigor. DO NOT use LaTeX formatting. Use UNICODE symbols for math.`
        };

        return `
      You are an Advanced Knowledge Synthesis Engine (Llama-Powered).
      Your task is to explain the following concept: "${text}"
      
      TARGET AUDIENCE: ${audience}
      
      CORE DIRECTIVES:
      1. EXACT TEMPLATE ADHERENCE: Use the template provided below. Do not add or remove sections.
      2. HEADER PROTOCOL: Use H2 (##) for all main sections. Use H3 (###) for subsections if needed.
      3. CLEAN OUTPUT: Do not generate lines containing only symbols (like "✨", "“", "”"). Every line should contain meaningful text.
      4. TONE CONSISTENCY: Maintain the specific persona tone across the entire output.
      5. FORMATTING: Use **bold** for emphasis and list items where appropriate.
      
      ${specificInstructions[audience]}
      
      TEMPLATE TO FILL:
      ${templates[audience]}
    `;
    },

    generateExplanation: async (text: string, audience: string) => {
        const prompt = AiService.constructPrompt(text, audience);
        console.log(`[AI Request] Generating Groq explanation for audience: "${audience}"`);
        const url = `https://api.groq.com/openai/v1/chat/completions`;

        const delays = [1000, 2000, 4000];
        for (let i = 0; i <= delays.length; i++) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`
                    },
                    body: JSON.stringify({
                        model: MODEL_NAME,
                        messages: [
                            { role: "system", content: "You are a helpful assistant that explains complex topics based on the specific templates." },
                            { role: "user", content: prompt }
                        ],
                        temperature: 0.7,
                        stream: false
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(`Groq API Error: ${response.status} - ${errorData.error?.message || response.statusText}`);
                }

                const data = await response.json();
                if (!data.choices?.length) throw new Error("No explanation generated by Groq.");
                return data.choices[0].message.content;
            } catch (error: any) {
                if (error.message.includes('429')) {
                    console.error(`⚠️ [GROK QUOTA] Rate limit hit for "${audience}".`);
                }

                console.error(`[Groq Error] Attempt ${i + 1} failed for "${audience}":`, error.message);

                if (i === delays.length) {
                    console.error(`❌ AI ATTEMPTS LIMIT HAS PASSED for "${audience}". stopping retries.`);
                    throw new Error(`AI ATTEMPTS LIMIT HAS PASSED: ${error.message}`);
                }

                console.warn(`[Groq Retry] Attempt ${i + 1} failed. Retrying in ${delays[i]}ms...`);
                await new Promise(r => setTimeout(r, delays[i]));
            }
        }
    }
};
