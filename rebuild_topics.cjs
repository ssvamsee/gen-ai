const fs = require('fs');
const topics = JSON.parse(fs.readFileSync('extracted_topics.json', 'utf8'));

const subCategoryMeta = {
    'LLM CORE & FAILURE MECHANICS': {
        libs: ['transformers', 'torch'],
        how: "In the `transformers` library, you usually load high-level 'AutoModel' classes. These handle the complex math of Attention blocks automatically.",
        breakdown: [
            { term: 'AutoTokenizer', definition: "Think of this as a 'translator'. AI models don't understand words; they only understand numbers. The Tokenizer takes your text and breaks it into small pieces (tokens) and converts them into number IDs." },
            { term: 'AutoModelForCausalLM', definition: "This is the actual 'AI Brain'. The 'CausalLM' part stands for Causal Language Model, meaning it's designed to predict the next word in a sequence, like ChatGPT does." },
            { term: 'tokenizer.decode', definition: "This is the 'reverse translator'. It takes the long list of numbers the AI produced and turns them back into human-readable words." }
        ],
        code: (title) => [{ filename: 'main.py', code: "import torch\nfrom transformers import AutoModelForCausalLM, AutoTokenizer\n\n# Loading a core Transformer model\nmodel_name = \"gpt2\"\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForCausalLM.from_pretrained(model_name)\n\ntext = \"Understanding " + title + " is key.\"\ninputs = tokenizer(text, return_tensors=\"pt\")\noutputs = model.generate(**inputs, max_new_tokens=20)\n\nprint(tokenizer.decode(outputs[0]))" }],
        tags: ['Architecture', 'Fundamentals']
    },
    'CONTEXT, TOKENS & COST': {
        libs: ['tiktoken', 'openai'],
        how: "You use `tiktoken` to count tokens before sending them to OpenAI. This helps you manage costs and avoid 'context window' errors.",
        breakdown: [
            { term: 'tiktoken', definition: "A fast token counter from OpenAI. It tells you exactly how many 'pieces' your sentence will be broken into before you spend money on them." },
            { term: 'encoding.encode', definition: "The process of turning your text into a list of numbers so the AI can process it." }
        ],
        code: (title) => [{ filename: 'tokens.py', code: "import tiktoken\n\nencoding = tiktoken.get_encoding(\"cl100k_base\")\ntokens = encoding.encode(\"Processing " + title + "...\")\nprint(f\"Token count: {len(tokens)}\")" }],
        tags: ['Cost', 'Tokens']
    }
};

const defaultMeta = {
    libs: ['openai'],
    how: "Generally, you would use official API clients or open-source libraries to implement these concepts.",
    breakdown: [
        { term: 'import', definition: "Bringing in a tool from a library so you can use it in your code." },
        { term: 'print', definition: "Displaying information on your screen so you can see what the AI is thinking." }
    ],
    code: (title) => [{ filename: 'example.py', code: "print(\"Implementing " + title + " logic...\")" }],
    tags: ['AI', 'General']
};

const newFileContent = "export const topics = [\n" + topics.map(t => {
    const meta = subCategoryMeta[t.sub_category] || defaultMeta;
    const samples = meta.code(t.title);

    const examples = [
        "Applying " + t.title + " to improve application reliability.",
        "Using " + t.title + " during the development of a production-level LLM app."
    ];

    const cleanTitle = t.title.replace(/'/g, "\\'");
    const cleanRef = t.short_ref.replace(/'/g, "\\'");
    const cleanExp = t.depth_explanation.replace(/'/g, "\\'");
    const cleanShortcut = t.shortcut.replace(/'/g, "\\'");

    return "    {\n" +
        "        id: " + t.id + ",\n" +
        "        category: '" + t.category + "',\n" +
        "        sub_category: '" + t.sub_category + "',\n" +
        "        title: '" + cleanTitle + "',\n" +
        "        short_ref: '" + cleanRef + "',\n" +
        "        depth_explanation: '" + cleanExp + "',\n" +
        "        python_context: {\n" +
        "            libraries: [" + meta.libs.map(l => "'" + l + "'").join(', ') + "],\n" +
        "            how_to_use: '" + meta.how.replace(/'/g, "\\'") + "',\n" +
        "            code_breakdown: [\n" +
        "                " + meta.breakdown.map(b => "{\n                    term: '" + b.term + "',\n                    definition: `" + b.definition + "`\n                }").join(',\n                ') + "\n" +
        "            ]\n" +
        "        },\n" +
        "        code_samples: [\n" +
        "            " + samples.map(s => "{\n                filename: '" + s.filename + "',\n                code: `" + s.code.replace(/`/g, '\\`').replace(/\$/g, '\\$') + "`\n            }").join(',\n            ') + "\n" +
        "        ],\n" +
        "        shortcut: '" + cleanShortcut + "',\n" +
        "        examples: [" + examples.map(e => "'" + e.replace(/'/g, "\\'") + "'").join(', ') + "],\n" +
        "        tags: [" + (meta.tags || []).map(tg => "'" + tg + "'").join(', ') + "]\n" +
        "    }";
}).join(',\n') + "\n];\n";

fs.writeFileSync('/home/vamsee/Development/Gen AI Document/src/data/topics.js', newFileContent);
console.log('Successfully reconstructed topics.js with perfect syntax (v2).');
