const fs = require('fs');
const filePath = '/home/vamsee/Development/Gen AI Document/src/data/topics.js';
let content = fs.readFileSync(filePath, 'utf8');

// The main issue is truncated examples arrays.
// examples: ['Inserting [Source 1],
// should be examples: ['Inserting [Source 1]'],

const lines = content.split('\n');
let fixedLines = [];
let inBrokenTopic = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Check for the specific pattern the user reported
    if (line.includes("examples: ['") && !line.includes("']") && !lines[i + 1]?.includes("]")) {
        console.log(`Fixing broken examples at line ${i + 1}`);
        // If it's missing the closing quote and bracket, add them
        if (line.endsWith(',')) {
            line = line.slice(0, -1) + "'],";
        } else {
            line = line + "'],";
        }
    }

    // Also check for 'tags' line if it's immediately after a broken examples line
    // The previous regex might have missed it if it was multiple lines

    fixedLines.push(line);
}

fs.writeFileSync(filePath, fixedLines.join('\n'));
console.log('Finished basic line-by-line syntax fix.');
