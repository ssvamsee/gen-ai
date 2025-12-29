const fs = require('fs');
const filePath = '/home/vamsee/Development/Gen AI Document/src/data/topics.js';
const content = fs.readFileSync(filePath, 'utf8');

// Split by topic start
const blocks = content.split(/\n\s*\{\s*id:/);

const cleanTopics = blocks.map(block => {
    if (block.includes('export const topics =')) return null;

    const getField = (key) => {
        // String regex that handles escaped single quotes: '([^'\\]*(?:\\.[^'\\]*)*)'
        const regex = new RegExp(`${key}:\\s*'([^'\\\\\\\\]*(?:\\\\.[^'\\\\\\\\]*)*)'`, 's');
        const match = block.match(regex);
        return match ? match[1] : null;
    };

    const idMatch = block.match(/^ (\d+),/);
    const id = idMatch ? idMatch[1] : null;

    if (!id) return null;

    return {
        id: parseInt(id),
        category: getField('category'),
        sub_category: getField('sub_category'),
        title: getField('title'),
        short_ref: getField('short_ref'),
        depth_explanation: getField('depth_explanation'),
        shortcut: getField('shortcut')
    };
}).filter(t => t !== null);

fs.writeFileSync('extracted_topics.json', JSON.stringify(cleanTopics, null, 2));
console.log(`Extracted ${cleanTopics.length} potential topics.`);
