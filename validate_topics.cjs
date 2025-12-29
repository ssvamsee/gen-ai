const fs = require('fs');
const filePath = '/home/vamsee/Development/Gen AI Document/src/data/topics.js';
const content = fs.readFileSync(filePath, 'utf8');

try {
    const evalContent = content.replace('export const topics =', 'return');
    const topics = new Function(evalContent)();
    console.log('File is valid JS! Total topics:', topics.length);
} catch (e) {
    console.log('Error found:', e.message);
    const lines = content.split('\n');
    // Try to find the first line that fails to parse
    for (let i = 1; i <= lines.length; i++) {
        try {
            const partial = lines.slice(0, i).join('\n') + '\n];';
            const evalPartial = partial.replace('export const topics =', 'return');
            new Function(evalPartial)();
        } catch (innerE) {
            console.log('Error starts around line:', i);
            console.log('Context:');
            console.log(lines.slice(Math.max(0, i - 5), i + 5).join('\n'));
            break;
        }
    }
}
