
const fs = require('fs');
const content = fs.readFileSync('./src/data/topics.js', 'utf8');

// Simple extract and eval
const evalContent = content.replace('export const topics =', 'return');
const topics = new Function(evalContent)();

const mismatches = [];

topics.forEach(topic => {
    const code = (topic.code_samples || []).map(s => s.code).join('\n');
    const breakdown = topic.python_context.code_breakdown || [];

    breakdown.forEach(item => {
        const term = item.term;
        // Check if the term is present in the code (case-insensitive)
        // We escape special characters in term for regex
        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedTerm, 'i');

        if (!regex.test(code)) {
            mismatches.push({
                id: topic.id,
                title: topic.title,
                mismatch_term: item.term,
                // code_excerpt: code.length > 100 ? code.substring(0, 100) + '...' : code
            });
        }
    });
});

if (mismatches.length > 0) {
    console.log(JSON.stringify(mismatches, null, 2));
} else {
    console.log("No mismatches found.");
}
