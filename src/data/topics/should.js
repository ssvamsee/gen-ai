export const shouldTopics = [
    {
        id: 99,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Tokenization',
        short_ref: 'The process of splitting raw text into smaller, manageable units (tokens) for processing.',
        depth_explanation: 'In simple terms, tokenization is the first step in any NLP pipeline. In classical NLP, this often meant splitting by whitespace. In modern LLMs, we use "Subword Tokenization" which can break down rare words into meaningful sub-pieces (e.g., "unhappiness" -> ["un", "happi", "ness"]).',
        python_context: {
            libraries: ['tiktoken', 'nltk'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'tiktoken',
                    definition: 'The "Pizza Slicer" library that cuts a long sentence into small bite-sized pieces for the computer.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'tokenize.py',
                code: `import tiktoken
enc = tiktoken.get_encoding("cl100k_base")
tokens = enc.encode("Hello world!")
print(f"Tokens: {tokens} (Length: {len(tokens)})")`
            }
        ],
        shortcut: 'Text to Chunks',
        examples: ['Applying Tokenization to improve application reliability.', 'Using Tokenization during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 100,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Text normalization',
        short_ref: 'Standardizing text to reduce noise and ensure consistency (e.g., lowercasing, removing punctuation).',
        depth_explanation: 'In simple terms, normalization ensures that "Apple" and "apple" are treated as the same word. In GenAI, heavy normalization is less common than in classical NLP because LLMs can understand case and punctuation nuances.',
        python_context: {
            libraries: ['nltk', 're'],
            how_to_use: 'Generally, you would use official API clients or over-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'lower()',
                    definition: 'The "Deep Clean" for text that makes everything lowercase and removes messy symbols.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'normalize.py',
                code: `text = "Hello WORLD!!!"
clean_text = text.lower().strip("!")
print(f"Normalized: {clean_text}") # "hello world"`
            }
        ],
        shortcut: 'Clean & Standardize',
        examples: ['Applying Text normalization to improve application reliability.', 'Using Text normalization during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 101,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Stopword removal',
        short_ref: 'Filtering out common words (the, is, at) that carry little semantic specialized meaning.',
        depth_explanation: 'In simple terms, old-school NLP used stopword removal to focus on key terms. Caution: In LLMs, removing stopwords usually breaks the grammatical "flow" of the context, so it is rarely used in generative prompts.',
        python_context: {
            libraries: ['nltk', 'spacy'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Stopwords',
                    definition: 'The "Filler Words" (like a, an, the) that don\'t add much meaning to a search.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'stop.py',
                code: `from nltk.corpus import stopwords
stop_words = set(stopwords.words('english'))
words = ["the", "quick", "brown", "fox"]
filtered = [w for w in words if w not in stop_words]
print(f"Keywords: {filtered}") # ["quick", "brown", "fox"]`
            }
        ],
        shortcut: 'Drop Common Words',
        examples: ['Applying Stopword removal to improve application reliability.', 'Using Stopword removal during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 102,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Stemming',
        short_ref: 'Crude heuristic process that chops off the ends of words to find the root.',
        depth_explanation: 'In simple terms, stemming (e.g., Porter Stemmer) is fast but often results in non-words. "Better" and "best" would likely not be stemmed to the same root, unlike in Lemmatization.',
        python_context: {
            libraries: ['nltk'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'ps.stem',
                    definition: 'The "Hatchet" function that chops the end off a word (e.g., "running" -> "run").'
                }
            ]
        },
        code_samples: [
            {
                filename: 'stem.py',
                code: `from nltk.stem import PorterStemmer
ps = PorterStemmer()
print(ps.stem("running")) # "run"
print(ps.stem("easily"))  # "easili" (crude chop!)`
            }
        ],
        shortcut: 'Chop to Root',
        examples: ['Applying Stemming to improve application reliability.', 'Using Stemming during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 103,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Lemmatization',
        short_ref: 'A sophisticated morphological analysis that reduces words to their dictionary form (lemma).',
        depth_explanation: 'In simple terms, unlike stemming, lemmatization understands the context. It can convert "went" to "go". It is more accurate but requires a dictionary and part-of-speech context.',
        python_context: {
            libraries: ['spacy', 'nltk'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Lemma',
                    definition: 'The "Dictionary Form" of a word (e.g., "was" -> "be").'
                }
            ]
        },
        code_samples: [
            {
                filename: 'lemma.py',
                code: `import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("the cacti are better")
print([token.lemma_ for token in doc]) 
# ["the", "cactus", "be", "good"]`
            }
        ],
        shortcut: 'Dictionary Root',
        examples: ['Applying Lemmatization to improve application reliability.', 'Using Lemmatization during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 104,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'POS tagging',
        short_ref: 'Assigning grammatical categories (Noun, Verb, Adjective) to each word in a sentence.',
        depth_explanation: 'In simple terms, part-of-Speech tagging helps disambiguate words like "book" (noun vs verb). Modern LLMs do this implicitly through their hidden state representations.',
        python_context: {
            libraries: ['spacy', 'nltk'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'POS',
                    definition: 'Part of Speech - The "Role" a word plays, like a Noun (thing) or Verb (action).'
                }
            ]
        },
        code_samples: [
            {
                filename: 'pos.py',
                code: `import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("I book the flight.")
for token in doc:
    print(f"{token.text}: {token.pos_}") # book: VERB`
            }
        ],
        shortcut: 'Labeling Grammar',
        examples: ['Applying POS tagging to improve application reliability.', 'Using POS tagging during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 105,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Dependency parsing',
        short_ref: 'Analyzing the grammatical structure of a sentence to find relationships between words.',
        depth_explanation: 'In simple terms, it creates a tree structure showing which words depend on each other (e.g., which adjective modifies which noun). Critical for extracting structured facts from text.',
        python_context: {
            libraries: ['spacy'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'token.dep_',
                    definition: 'The "Connection Type" that shows exactly which word is describing another word.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'parse.py',
                code: `import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("The red car is fast.")
for token in doc:
    print(f"{token.text} -> {token.head.text} ({token.dep_})")`
            }
        ],
        shortcut: 'Sentence Tree',
        examples: ['Applying Dependency parsing to improve application reliability.', 'Using Dependency parsing during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 106,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Intent classification',
        short_ref: 'Determining the underlying goal or "intent" of a user query.',
        depth_explanation: 'In simple terms, a fundamental task for chatbots. Intent: "BookFlight" or "CancelOrder". In GenAI, we often use few-shot prompting to categorize intents dynamically.',
        python_context: {
            libraries: ['scikit-learn', 'openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Intent',
                    definition: 'The "What" – What does the user want the AI to do right now?'
                }
            ]
        },
        code_samples: [
            {
                filename: 'intent.py',
                code: `prompt = "Classify intent: 'Reset my password' [Support, Billing, Tech]"
# The AI maps natural language to a fixed category
print(f"Detected Intent: {llm.ask(prompt)}")`
            }
        ],
        shortcut: 'What does the user want?',
        examples: ['Applying Intent classification to improve application reliability.', 'Using Intent classification during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 107,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'NER (Named Entity Recognition)',
        short_ref: 'Extracting specific entities like Names, Dates, Organizations, and Locations from text.',
        depth_explanation: 'In simple terms, nER is often used to feed metadata into RAG or to redact PII. LLMs are extremely good at NER compared to previous BERT-based models.',
        python_context: {
            libraries: ['spacy', 'openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'doc.ents',
                    definition: 'The "Proper Noun" list representing names of people, places, or companies found in the text.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'ner.py',
                code: `import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is hiring John in London.")
for ent in doc.ents:
    print(f"{ent.text}: {ent.label_}") # Apple: ORG, London: GPE`
            }
        ],
        shortcut: 'Identify Proper Nouns+',
        examples: ['Applying NER (Named Entity Recognition) to improve application reliability.', 'Using NER (Named Entity Recognition) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 108,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Rule-based NLP',
        short_ref: 'Using hand-crafted RegEx and if-then logic to process text.',
        depth_explanation: 'In simple terms, reliable and fast but brittle. Best used for high-precision tasks like validating phone numbers or extracting specific ID patterns.',
        python_context: {
            libraries: ['re'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 're.match',
                    definition: 'The "If-This-Then-That" check that validates text against a strict pattern without using any AI.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'rules.py',
                code: `import re
def is_phone(text):
    return bool(re.match(r'\\d{3}-\\d{3}-\\d{4}', text))
print(f"Is Valid Phone: {is_phone('123-456-7890')}")`
            }
        ],
        shortcut: 'Hardcoded Logic',
        examples: ['Applying Rule-based NLP to improve application reliability.', 'Using Rule-based NLP during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 109,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Statistical NLP',
        short_ref: 'Using probability and frequency (like N-grams or Naive Bayes) to model language.',
        depth_explanation: 'In simple terms, the bridge between rules and deep learning. These models (like TF-IDF) dominate keyword search algorithms used in Hybrid RAG today.',
        python_context: {
            libraries: ['scikit-learn'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'TfidfVectorizer',
                    definition: 'Term Frequency - The "Math Logic" used to see which words are unique and important in a document based on how often they appear.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'tfidf.py',
                code: `from sklearn.feature_extraction.text import TfidfVectorizer
vec = TfidfVectorizer()
matrix = vec.fit_transform(["cat hat", "cat bat"])
print(f"Frequency Score: {matrix.toarray()}")`
            }
        ],
        shortcut: 'Probabilistic Text',
        examples: ['Applying Statistical NLP to improve application reliability.', 'Using Statistical NLP during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 110,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Feature engineering',
        short_ref: 'Manually creating numeric inputs (like word count or sentiment score) to train ML models.',
        depth_explanation: 'In simple terms, in the pre-LLM era, scientists spent 80% of their time engineering "features". With Transformers, the model learns its own features directly from raw text.',
        python_context: {
            libraries: ['pandas'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Features',
                    definition: 'The "Characteristics" (like length or exclamation mark count) used to train a model.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'features.py',
                code: `def get_features(text):
    return {
        "length": len(text),
        "is_upper": text.isupper(),
        "word_count": len(text.split())
    }`
            }
        ],
        shortcut: 'Manual Attribute Creation',
        examples: ['Applying Feature engineering to improve application reliability.', 'Using Feature engineering during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 111,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Classical NLP limits',
        short_ref: 'Understanding why older models fail at context, sarcasm, and complex instructions.',
        depth_explanation: 'Older models like RNNs and LSTMs suffer from "vanishing gradients" and can\'t hold long-range context. Rules-based systems fail as soon as people use slang or typos.',
        python_context: {
            libraries: ['numpy'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Classical Error',
                    definition: 'The "Memory Loss" point where an old AI completely forgets the beginning of a long sentence.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'fail.py',
                code: `def rnn_process(text):
    # Old models process one word at a time
    # and "forget" earlier words by the end.
    if len(text) > 50:
        print("Classical Error: Context lost at word 51.")
    return "???"`
            }
        ],
        shortcut: 'Brittle & Context-Blind',
        examples: ['Applying Classical NLP limits to improve application reliability.', 'Using Classical NLP limits during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 112,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Supervised learning',
        short_ref: 'Training a model on a dataset where the "answers" (labels) are already provided.',
        depth_explanation: 'In simple terms, learning from X -> Y. This is how we fine-tune LLMs for specific tasks like classification or sentiment analysis.',
        python_context: {
            libraries: ['scikit-learn'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Label',
                    definition: 'The "Answer Key" that tells the model exactly what the correct output should be.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'supervised.py',
                code: `from sklearn.linear_model import LogisticRegression
X = [[0], [1], [2]] # Features
y = [0, 0, 1]        # Labels (Answers)
model = LogisticRegression().fit(X, y)
print(f"Prediction: {model.predict([[3]])}")`
            }
        ],
        shortcut: 'Labeled Learning',
        examples: ['Applying Supervised learning to improve application reliability.', 'Using Supervised learning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 113,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Unsupervised learning',
        short_ref: 'Finding hidden patterns or clusters in data without being given any labels.',
        depth_explanation: 'In simple terms, used for grouping similar customers or documents. In GenAI, the pretraining phase is essentially "self-supervised" which is a type of unsupervised learning.',
        python_context: {
            libraries: ['scikit-learn'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'KMeans',
                    definition: 'A popular "Sorting Algorithm" that automatically puts data points into groups based on their shared features.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'unsup.py',
                code: `from sklearn.cluster import KMeans
X = [[1], [1.5], [10], [11]] # Data (No Labels!)
kmeans = KMeans(n_clusters=2).fit(X)
print(f"Cluster IDs: {kmeans.labels_}") # [0, 0, 1, 1]`
            }
        ],
        shortcut: 'Pattern Discovery',
        examples: ['Applying Unsupervised learning to improve application reliability.', 'Using Unsupervised learning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 114,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Self-supervised learning',
        short_ref: 'Creating your own labels from raw data (e.g., masking a word and having the model guess it).',
        depth_explanation: 'In simple terms, the breakthrough that enabled LLMs. It allows training on the entire internet because the labels are "free" within the text itself.',
        python_context: {
            libraries: ['transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: '[MASK]',
                    definition: 'The "Hidden Word" in a game of Hide and Seek that the AI tries to guess during training.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'mask.py',
                code: `from transformers import pipeline
unmasker = pipeline('fill-mask', model='bert-base-uncased')
print(unmasker("I love [MASK] learning."))
# Guesses: deep, machine, active`
            }
        ],
        shortcut: 'Automatic Labeling',
        examples: ['Applying Self-supervised learning to improve application reliability.', 'Using Self-supervised learning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 115,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Bias–variance tradeoff',
        short_ref: 'The balance between an oversimplified model (Bias) and an overly complex one (Variance).',
        depth_explanation: 'In simple terms, high bias = Underfitting (Misses the point). High variance = Overfitting (Memorizes noise). We need a model that generalizes well to new, unseen prompts.',
        python_context: {
            libraries: ['scikit-learn'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'total_error',
                    definition: 'The "Combined Score" of how much an AI misses the mark, calculated by adding its bias (oversimplification) and variance (memorizing noise).'
                }
            ]
        },
        code_samples: [
            {
                filename: 'tradeoff.py',
                code: `def get_error(complexity):
    # Bias decreases as complexity increases
    # Variance increases as complexity increases
    total_error = bias(c) + variance(c)
    return total_error
print("Finding the 'Sweet Spot' of model complexity.")`
            }
        ],
        shortcut: 'Underfit vs Overfit',
        examples: ['Applying Bias–variance tradeoff to improve application reliability.', 'Using Bias–variance tradeoff during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 116,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Overfitting & regularization',
        short_ref: 'Preventing the model from "cheating" by memorizing the training data.',
        depth_explanation: 'In simple terms, regularization techniques (like Dropout or Weight Decay) force the model to learn broader, more robust patterns instead of exact sequences.',
        python_context: {
            libraries: ['torch'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Dropout',
                    definition: 'The "Interruption" that forces the model to work harder to remember themes instead of exact words.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'reg.py',
                code: `import torch.nn as nn
# Dropout helps prevent overfitting
model = nn.Sequential(
    nn.Linear(10, 100),
    nn.Dropout(0.2), # Randomly turn off 20% of neurons
    nn.ReLU()
)`
            }
        ],
        shortcut: 'Stop Memorization',
        examples: ['Applying Overfitting & regularization to improve application reliability.', 'Using Overfitting & regularization during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 117,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'Embedding similarity',
        short_ref: 'Using distance math (Cosine) to measure how similar two pieces of text are.',
        depth_explanation: 'In simple terms, semantic similarity is not about keyword matches. "Laptop" and "Notebook" have high similarity because they appear in similar contexts in the training data.',
        python_context: {
            libraries: ['scipy', 'openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'cosine',
                    definition: 'The "Mathematical Ruler" that measures the angle between two ideas to see how closely they relate.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'sim.py',
                code: `from scipy.spatial.distance import cosine
# 0 distance = Perfect match
score = 1 - cosine([1, 0], [0.9, 0.1])
print(f"Similarity Score: {score:.2f}")`
            }
        ],
        shortcut: 'Distance as Meaning',
        examples: ['Applying Embedding similarity to improve application reliability.', 'Using Embedding similarity during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 118,
        category: 'SHOULD',
        sub_category: 'CLASSICAL NLP & ML FOUNDATIONS',
        title: 'ML evaluation modes',
        short_ref: 'Difference between static Benchmarks (Offline) and User Testing (Online).',
        depth_explanation: 'Evaluation must look at both "Metric accuracy" and "Business value". A model can have 90% F1 score but 0% user adoption if it\'s too slow.',
        python_context: {
            libraries: ['scikit-learn'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'f1_score',
                    definition: 'The "Lab Grade" that measures how accurate the AI is on a specific test dataset.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'eval.py',
                code: `from sklearn.metrics import f1_score
preds = [1, 0, 1]
truth = [1, 0, 0]
print(f"Accuracy Score: {f1_score(truth, preds)}")`
            }
        ],
        shortcut: 'Lab vs Wild',
        examples: ['Applying ML evaluation modes to improve application reliability.', 'Using ML evaluation modes during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 119,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'BPE (Byte Pair Encoding)',
        short_ref: 'A popular subword tokenization algorithm used by GPT models.',
        depth_explanation: 'In simple terms, bPE iteratively merges the most frequent pairs of characters into a single token. This allows the model to handle an infinite vocabulary with a small fixed token list.',
        python_context: {
            libraries: ['tiktoken'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'tiktoken',
                    definition: 'The "Lego" library used to break words into smaller predictable pieces (subwords) that the AI can understand.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'bpe.py',
                code: `import tiktoken
enc = tiktoken.get_encoding("cl100k_base")
# "h" + "e" -> "he" (if frequent)
print(enc.encode("hello")) # [15339]`
            }
        ],
        shortcut: 'Frequent Merge Chunks',
        examples: ['Applying BPE (Byte Pair Encoding) to improve application reliability.', 'Using BPE (Byte Pair Encoding) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 120,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'WordPiece / SentencePiece',
        short_ref: 'Alternative subword tokenizers used in BERT and Llama.',
        depth_explanation: 'In simple terms, wordPiece uses a likelihood-based merge; SentencePiece is language-agnostic and treats spaces as part of the tokenization process.',
        python_context: {
            libraries: ['sentencepiece', 'transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'SentencePieceProcessor',
                    definition: 'A "Universal Slicer" that works for ANY language (even those without spaces like Chinese) by treating spaces as just another character.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'sp.py',
                code: `import sentencepiece as spm
# Treats ' ' as a character
s = spm.SentencePieceProcessor(model_file='test.model')
print(s.encode_as_pieces('This is a test'))`
            }
        ],
        shortcut: 'Smarter Subword Splits',
        examples: ['Applying WordPiece / SentencePiece to improve application reliability.', 'Using WordPiece / SentencePiece during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 121,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Embedding geometry',
        short_ref: 'Mathematical properties of vectors where directions represent features.',
        depth_explanation: 'In simple terms, in high-dimensional space, the relative direction of vectors often represents semantic features (e.g., gender or verb tense). "Man" to "Woman" is the same vector as "King" to "Queen".',
        python_context: {
            libraries: ['numpy', 'scipy'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'king - man + woman',
                    definition: 'The "Idea Math" where you can add or subtract meanings to find new related words semantically.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'geometry.py',
                code: `import numpy as np
# Simplified idea math:
king = np.array([1, 0.5])
man = np.array([1, 0])
woman = np.array([0, 0.5])
# Result should be close to 'queen'
result = king - man + woman
print(f"Vector Result: {result}")`
            }
        ],
        shortcut: 'Direction is Feature',
        examples: ['Applying Embedding geometry to improve application reliability.', 'Using Embedding geometry during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 122,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Pretraining vs fine-tuning',
        short_ref: 'General knowledge acquisition vs. specialized task performance.',
        depth_explanation: 'In simple terms, pretraining is expensive and general. Fine-tuning is cheaper and adapts the model to specific outputs, seperti medical advice or legal drafting.',
        python_context: {
            libraries: ['transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'from_pretrained',
                    definition: 'Loading a "Base Model" – a model that has read the entire internet but isn\'t a specialist yet.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'train.py',
                code: `from transformers import AutoModelForCausalLM
# 1. Loading a PRETRAINED base model
model = AutoModelForCausalLM.from_pretrained("gpt2")
# 2. FINE-TUNING (simplified loop concept)
# for batch in my_custom_legal_data:
#     loss = model(batch).loss
#     loss.backward()`
            }
        ],
        shortcut: 'College vs Work Training',
        examples: ['Applying Pretraining vs fine-tuning to improve application reliability.', 'Using Pretraining vs fine-tuning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 123,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Instruction tuning',
        short_ref: 'Fine-tuning a model to specifically follow human commands (e.g., "summarize").',
        depth_explanation: 'In simple terms, early LLMs (like GPT-3) were good at continuation but bad at instructions. Instruction tuning (e.g., InstructGPT) teaches them the distinction between data and command.',
        python_context: {
            libraries: ['datasets', 'transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'instruction',
                    definition: 'The "Direct Command" – the part of the data that tells the AI exactly what task to perform.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'instruct.json',
                code: `{
  "instruction": "Summarize this article.",
  "input": "The stock market rose today due to...",
  "output": "Markets are up."
}`
            }
        ],
        shortcut: 'Learn to Obbey',
        examples: ['Applying Instruction tuning to improve application reliability.', 'Using Instruction tuning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 124,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Domain tuning',
        short_ref: 'Further training on data from a specific industry (Finance, Healthcare, Law).',
        depth_explanation: 'Models pretrained on the internet may not know the specifics of a private company\'s documentation. Domain tuning helps the model learn specialized jargon.',
        python_context: {
            libraries: ['transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'medical_papers',
                    definition: 'The "Specialized Library" – a specific set of text used to teach the AI industry-specific jargon.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'domain.py',
                code: `medical_papers = ["Patient presents with...", "Diagnosis of..."]
# Fine-tuning a model on these specific papers
# results in a "Medical-GPT" that knows the jargon.
print("Training on 50,000 medical PDFs...")`
            }
        ],
        shortcut: 'Industry Specialist',
        examples: ['Applying Domain tuning to improve application reliability.', 'Using Domain tuning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 125,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'PEFT (Parameter-Efficient Fine-Tuning)',
        short_ref: 'Techniques to fine-tune large models by updating only a tiny fraction of parameters.',
        depth_explanation: 'In simple terms, instead of updating all billions of weights, PEFT adds small "adapter" layers. This saves massive amounts of memory and storage.',
        python_context: {
            libraries: ['peft', 'transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'get_peft_model',
                    definition: 'The "Upgrade" – taking a big model and adding tiny "brain patches" to learn new things without rebuilding the whole brain.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'peft_setup.py',
                code: `from peft import LoraConfig, get_peft_model
config = LoraConfig(r=8, lora_alpha=32)
peft_model = get_peft_model(base_model, config)
# Only 1% of weights are now trainable!
peft_model.print_trainable_parameters()`
            }
        ],
        shortcut: 'Fine-tune on a Budget',
        examples: ['Applying PEFT (Parameter-Efficient Fine-Tuning) to improve application reliability.', 'Using PEFT (Parameter-Efficient Fine-Tuning) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 126,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'LoRA (Low-Rank Adaptation)',
        short_ref: 'The most popular PEFT method that injects trainable rank-decomposition matrices into Transformer layers.',
        depth_explanation: 'In simple terms, loRA freezes the original model weights and only trains two much smaller matrices (A and B). This reduces the number of trainable setting or dials by 10,000x and GPU memory requirements by 3x.',
        python_context: {
            libraries: ['peft'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'r=8',
                    definition: 'The "Cheat Sheet Size" – how many small connections we are training (smaller = faster and uses less memory).'
                }
            ]
        },
        code_samples: [
            {
                filename: 'lora.py',
                code: `from peft import LoraConfig
# r=8 means very small, lightweight training
lora_config = LoraConfig(
    r=8, 
    target_modules=["q_proj", "v_proj"],
    task_type="CAUSAL_LM"
)
print("LoRA Config Initialized.")`
            }
        ],
        shortcut: 'Small Matrices, Big Impact',
        examples: ['Applying LoRA (Low-Rank Adaptation) to improve application reliability.', 'Using LoRA (Low-Rank Adaptation) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 127,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'QLoRA',
        short_ref: 'A more advanced version of LoRA that quantizes the base model to 4-bits.',
        depth_explanation: 'In simple terms, qLoRA (Quantized LoRA) allows for fine-tuning massive models on even smaller hardware by using a 4-bit NormalFloat data type and double quantization.',
        python_context: {
            libraries: ['bitsandbytes', 'peft'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'load_in_4bit',
                    definition: 'The "Extreme Compression" setting that squashes the model brain into a tiny space to fit on cheaper GPUs.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'qlora.py',
                code: `from transformers import BitsAndBytesConfig
# Squashing the model to 4-bit
nf4_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)
print("QLoRA quantization ready.")`
            }
        ],
        shortcut: 'Compressed Fine-Tuning',
        examples: ['Applying QLoRA to improve application reliability.', 'Using QLoRA during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 128,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Catastrophic forgetting',
        short_ref: 'The risk of a model losing its general knowledge after being fine-tuned on a narrow task.',
        depth_explanation: 'In simple terms, if you fine-tune a model too heavily on legal documents, it might forget how to write casual emails or solve basic math. We prevent this by using a low learning rate or "replay" of general data.',
        python_context: {
            libraries: ['transformers'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Post-Train Skill',
                    definition: 'The "Testing Phase" where you check if the AI still knows basic stuff after you finished its specialized training.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'forget.py',
                code: `model = load_legal_expert()
# Testing if it still knows basic math:
reply = model.ask("What is 2+2?")
print(f"Post-Train Skill: {reply}") # If it says 'Legal', it forgot math!`
            }
        ],
        shortcut: 'Knowledge Loss',
        examples: ['Applying Catastrophic forgetting to improve application reliability.', 'Using Catastrophic forgetting during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 129,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Fine-tuning overfit',
        short_ref: 'When a model memorizes the specific training examples instead of learning the underlying concepts.',
        depth_explanation: 'In simple terms, common in small datasets. The model becomes an "echo" of the training data and fails when users ask questions slightly differently than what was in the training set.',
        python_context: {
            libraries: ['scikit-learn'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'check_overfit',
                    definition: 'The "Memory Check" – a function to see if the AI is just repeating memorized answers like a parrot.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'echo.py',
                code: `examples = ["The color is red", "The car is blue"]
# A model that only echoes these exact words is overfit.
def check_overfit(user_input):
    if user_input in examples: return "Correct"
    return "Error" # Fails on 'The color is blue'`
            }
        ],
        shortcut: 'Echo Effect',
        examples: ['Applying Fine-tuning overfit to improve application reliability.', 'Using Fine-tuning overfit during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 130,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'RAG vs fine-tuning',
        short_ref: 'The decision framework for choosing between fetching data or retraining the model.',
        depth_explanation: 'RAG is better for dynamic data (news, private docs). Fine-tuning is better for changing the model\'s behavior, style, or specialized vocabulary.',
        python_context: {
            libraries: ['langchain', 'openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'dataset_type',
                    definition: 'The "Decision Switch" – looking at what kind of data you have to decide if you should fetch it (RAG) or learn it (Fine-tune).'
                }
            ]
        },
        code_samples: [
            {
                filename: 'decision.py',
                code: `def choose_strategy(dataset_type):
    if dataset_type == "static_behavior":
        return "Fine-tune (e.g. style tuning)"
    else:
        return "RAG (e.g. searching private docs)"
print(f"Goal: {choose_strategy('dynamic')}")`
            }
        ],
        shortcut: 'Fetch vs Learn',
        examples: ['Applying RAG vs fine-tuning to improve application reliability.', 'Using RAG vs fine-tuning during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 131,
        category: 'SHOULD',
        sub_category: 'TOKENIZATION, FINE-TUNING & PLATFORM',
        title: 'Model orchestration',
        short_ref: 'The high-level logic that decides which model to use and how to combine their outputs.',
        depth_explanation: 'In simple terms, involves managing a "zoo" of models and routing traffic based on task, cost, and availability. Often uses tools like LangChain or Semantic Kernel.',
        python_context: {
            libraries: ['langchain', 'openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Router',
                    definition: 'The "Conductor" class that decides which specific AI model should handle a user\'s request.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'orchestra.py',
                code: `class Router:
    def get_model(self, task):
        if "code" in task: return "gpt-4-coder"
        return "gpt-3.5-turbo" # Cheaper default
    
orchestrator = Router()
print(f"Using: {orchestrator.get_model('Write Python')}")`
            }
        ],
        shortcut: 'Model Manager',
        examples: ['Applying Model orchestration to improve application reliability.', 'Using Model orchestration during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 132,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Routing & ensembling',
        short_ref: 'Selecting the best model or combining multiple models to get a more accurate result.',
        depth_explanation: 'In simple terms, ensembling involves asking 3 different models and picking the majority answer (Voting). Routing involves picking the single best expert for a specific domain.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'ensemble_vote',
                    definition: 'The "Committee" function where multiple AIs vote on the best answer.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'ensemble.py',
                code: `def ensemble_vote(q):
    answers = [model_a.ask(q), model_b.ask(q), model_c.ask(q)]
    # Return the most common answer
    return max(set(answers), key=answers.count)
print(f"Final Consensus: {ensemble_vote('Is 2+2=4?')}")`
            }
        ],
        shortcut: 'Expert Selection',
        examples: ['Applying Routing & ensembling to improve application reliability.', 'Using Routing & ensembling during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 133,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Token governance',
        short_ref: 'Policies and code to control and limit the number of tokens consumed by users.',
        depth_explanation: 'In simple terms, preventing a single user from running up a \$1000 bill. Involves rate limiting, hard caps, and monitoring tokens per request.',
        python_context: {
            libraries: ['flask_limiter', 'redis'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'check_token_limit',
                    definition: 'The "Allowance Control" – a function that checks how many tokens a user has spent today.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'quota.py',
                code: `def check_token_limit(user_id, tokens):
    current = db.get_user_tokens(user_id)
    if current + tokens > 100000:
        raise Exception("Daily usage quota exceeded!")
    db.update_tokens(user_id, current + tokens)`
            }
        ],
        shortcut: 'Usage Budgeting',
        examples: ['Applying Token governance to improve application reliability.', 'Using Token governance during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 134,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Cost governance',
        short_ref: 'The business processes for monitoring and reducing the total spend on AI APIs.',
        depth_explanation: 'In simple terms, includes identifying "runaway" prompts, optimizing chunk sizes, and switching to cheaper models as they become available.',
        python_context: {
            libraries: ['pandas', 'matplotlib'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'costs',
                    definition: 'A "Rate Sheet" table used to calculate exactly how much each AI model is costing the project.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'costs.py',
                code: `costs = {"gpt-4": 0.03, "gpt-3.5": 0.001}
# Tracking spend per project
total_spend = df['tokens'].sum() * costs['gpt-4']
print(f"Project Cost: \${total_spend:.2f}")`
            }
        ],
        shortcut: 'Bill Management',
        examples: ['Applying Cost governance to improve application reliability.', 'Using Cost governance during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 135,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Caching',
        short_ref: 'Storing previous AI responses or embeddings to avoid redundant expensive calls.',
        depth_explanation: 'In simple terms, if two users ask the exact same question, the cache returns the previous answer instantly and for free. Semantic caching can even return similar answers.',
        python_context: {
            libraries: ['redis', 'gptcache'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'cache.exists',
                    definition: 'The "Shortcut" – a check to see if we already have the answer in memory so we don\'t have to pay for it again.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'cache.py',
                code: `def get_answer(question):
    if cache.exists(question):
        return cache.get(question) # Free and Fast
    answer = llm.ask(question)
    cache.set(question, answer)
    return answer`
            }
        ],
        shortcut: 'Reuse Results',
        examples: ['Applying Caching to improve application reliability.', 'Using Caching during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 136,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Autoscaling',
        short_ref: 'Automatically adding or removing GPU servers based on real-time traffic demand.',
        depth_explanation: 'Crucial for self-hosted models. Ensures that the system doesn\'t crash during peak hours and doesn\'t waste money during the night.',
        python_context: {
            libraries: ['kubernetes', 'prometheus'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'HorizontalPodAutoscaler',
                    definition: 'The "Automatic Expansion" system that creates more AI servers when users flood in.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'scale.yaml',
                code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: llm-worker
spec:
  minReplicas: 1
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: gpu`
            }
        ],
        shortcut: 'Dynamic Scale',
        examples: ['Applying Autoscaling to improve application reliability.', 'Using Autoscaling during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 137,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Multi-tenant isolation',
        short_ref: 'Ensuring that one customer\'s data or prompts never leak to another customer.',
        depth_explanation: 'In simple terms, requires strict separation at the database (Vector DB) and orchestration layers. Each customer should have their own namespace or index.',
        python_context: {
            libraries: ['pinecone', 'postgresql'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'namespace',
                    definition: 'The "Digital Wall" – a specific folder index that keeps Customer A\'s data away from Customer B.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'isolate.py',
                code: `def query_docs(user_id, prompt):
    # Always filter by namespace/tenant_id
    res = vector_db.query(
        prompt, 
        namespace=f"tenant_{user_id}"
    )
    return res`
            }
        ],
        shortcut: 'Private Compartments',
        examples: ['Applying Multi-tenant isolation to improve application reliability.', 'Using Multi-tenant isolation during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 138,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'ERP integration',
        short_ref: 'Connecting GenAI to Enterprise Resource Planning systems (like SAP or Oracle).',
        depth_explanation: 'In simple terms, allows AI to answer questions about inventory, supply chain, or finances by fetching data from the core business database.',
        python_context: {
            libraries: ['sqlalchemy', 'requests'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'db.query',
                    definition: 'The "Search Request" sent to the company\'s database to find product and inventory info.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'erp.py',
                code: `def get_stock(item_id):
    # AI fetches real data from the company DB
    stock = db.query(f"SELECT qty FROM erp_table WHERE id={item_id}")
    return f"We have {stock} units in the warehouse."`
            }
        ],
        shortcut: 'Company Data Access',
        examples: ['Applying ERP integration to improve application reliability.', 'Using ERP integration during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 139,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'CRM integration',
        short_ref: 'Linking AI to Customer Relationship Management tools (like Salesforce).',
        depth_explanation: 'In simple terms, enables personalized AI interactions. The bot "remembers" that you had a call last week and what your previous purchases were.',
        python_context: {
            libraries: ['simple-salesforce'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'crm.get_history',
                    definition: 'The "Customer Log" lookup that finds previous interactions with a buyer.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'crm.py',
                code: `# AI checks the CRM before replying
last_call = crm.get_history(user_email)
prompt = f"The user last called about {last_call}. Helping them now..."
print("Analyzing customer history...")`
            }
        ],
        shortcut: 'Personalized Support',
        examples: ['Applying CRM integration to improve application reliability.', 'Using CRM integration during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 140,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Event-driven workflows',
        short_ref: 'Triggering AI actions automatically based on specific system events.',
        depth_explanation: 'In simple terms, instead of waiting for a user, the AI acts when a new file is uploaded, a ticket is created, or a database value changes.',
        python_context: {
            libraries: ['boto3', 'celery'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'on_file_upload',
                    definition: 'The "Listen" function that fires automatically when someone adds a new file to the system.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'trigger.py',
                code: `def on_file_upload(file):
    # Automatically summarize the new file
    summary = llm.summarize(file)
    db.save(summary)
    
print("Waiting for file uploads...")`
            }
        ],
        shortcut: 'Auto-Trigger AI',
        examples: ['Applying Event-driven workflows to improve application reliability.', 'Using Event-driven workflows during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 141,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Identity-aware RAG',
        short_ref: 'Integrating user identity (SSO) directly into the retrieval logic.',
        depth_explanation: 'The system knows the user\'s role and department. Search results are automatically filtered to only show documents the user is allowed to see.',
        python_context: {
            libraries: ['pinecone', 'langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'authorized_roles',
                    definition: 'The "ID Check" that ensures you only see documents your department owns.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'id_rag.py',
                code: `user = {"id": 123, "role": "HR"}
# Filter results by the user's role
results = vector_db.query(
    "How to hire?", 
    filter={"authorized_roles": {"\$in": [user["role"]]}}
)
print(f"Found {len(results)} docs for {user['role']}.")`
            }
        ],
        shortcut: 'Role-Based Fetch',
        examples: ['Applying Identity-aware RAG to improve application reliability.', 'Using Identity-aware RAG during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 142,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'RBAC (Role-Based Access Control)',
        short_ref: 'Managing permissions based on user roles (Admin, Editor, Viewer).',
        depth_explanation: 'In simple terms, a classic security model applied to GenAI features. Admins can change system prompts; viewers can only use the chat.',
        python_context: {
            libraries: ['fastapi', 'casbin'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'can_update_prompt',
                    definition: 'The "Key" – a function that checks if a user has the power to change AI settings.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'rbac.py',
                code: `def can_update_prompt(user_role):
    # Only Admins get the 'Power Key'
    if user_role == "Admin": return True
    return False
    
print(f"Can Viewer edit AI? {can_update_prompt('Viewer')}")`
            }
        ],
        shortcut: 'Permission by Role',
        examples: ['Applying RBAC (Role-Based Access Control) to improve application reliability.', 'Using RBAC (Role-Based Access Control) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 143,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'ABAC (Attribute-Based Access Control)',
        short_ref: 'Dynamic permissions based on user attributes (e.g., location, time of day).',
        depth_explanation: 'In simple terms, more granular than RBAC. Allows rules like "Users in Germany can only see GDPR-compliant data during working hours."',
        python_context: {
            libraries: ['py-abac'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'allow_access',
                    definition: 'Information about the user (Location) or the resource (Security Level) used for smart rules.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'abac.py',
                code: `def allow_access(user, doc):
    # Rule: Must be during office hours AND in the same country
    if user['country'] == doc['country'] and is_working_hours():
        return "Access Granted"
    return "Access Denied"`
            }
        ],
        shortcut: 'Smart Permissions',
        examples: ['Applying ABAC (Attribute-Based Access Control) to improve application reliability.', 'Using ABAC (Attribute-Based Access Control) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 144,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Adoption metrics',
        short_ref: 'KPIs that measure how many people are actually using the AI tool and how often.',
        depth_explanation: 'In simple terms, includes MAU (Monthly Active Users), Retention, and "Time Saved per User". It proves whether the AI investment is paying off.',
        python_context: {
            libraries: ['pandas'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'adoption_rate',
                    definition: 'The percentage of users who come back to use the AI again after their first try.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'adoption.py',
                code: `mau = 500
total_employees = 1000
adoption_rate = (mau / total_employees) * 100
print(f"Adoption: {adoption_rate}%")`
            }
        ],
        shortcut: 'Success Tracking',
        examples: ['Applying Adoption metrics to improve application reliability.', 'Using Adoption metrics during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 145,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Business KPIs',
        short_ref: 'High-level business goals influenced by AI (e.g., Revenue, Cost Reduction).',
        depth_explanation: 'In simple terms, the ultimate justification for GenAI. Did it reduce support ticket volume? Did it speed up legal review? AI must move the needle on real business numbers.',
        python_context: {
            libraries: ['pandas'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'reduction',
                    definition: 'A "Scoreboard" showing how much faster tasks are being completed with AI.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'kpi.py',
                code: `old_wait_time = 24 # hours
new_wait_time = 0.1 # AI replies instantly
reduction = ((old_wait_time - new_wait_time) / old_wait_time) * 100
print(f"Customer wait time reduced by {reduction:.1f}%")`
            }
        ],
        shortcut: 'ROI Measurement',
        examples: ['Applying Business KPIs to improve application reliability.', 'Using Business KPIs during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 146,
        category: 'SHOULD',
        sub_category: 'PLATFORM, INTEGRATION & BUSINESS',
        title: 'Model governance',
        short_ref: 'The legal and compliance framework for using AI within an organization.',
        depth_explanation: 'In simple terms, includes documenting which models are used for what, who is responsible for failures, and ensuring compliance with laws like the EU AI Act.',
        python_context: {
            libraries: ['pydantic'],
            how_to_use: 'Use when: Generating creative content. Setup: Use high temperature, diverse prompts. Best practice: Generate multiple options, let humans select. Common pitfall: Generated content may lack originality.',
            code_breakdown: [
                {
                    term: 'inventory',
                    definition: 'The "Rulebook" list where all active AI models are tracked for safety.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'inventory.py',
                code: `inventory = [
    {"name": "Support Bot", "model": "gpt-4", "risk": "High"},
    {"name": "Meeting Summarizer", "model": "gpt-3.5", "risk": "Low"}
]
print("All deployed AI models registered for audit.")`
            }
        ],
        shortcut: 'Compliance Framework',
        examples: ['Applying Model governance to improve application reliability.', 'Using Model governance during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    }
];
