import { mustTopics } from './topics/must.js';
import { shouldTopics } from './topics/should.js';
import { niceTopics } from './topics/nice.js';

export const topics = [
    ...mustTopics,
    ...shouldTopics,
    ...niceTopics
];
