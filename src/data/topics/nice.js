export const niceTopics = [
    {
        id: 147,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Multi-turn conversations',
        short_ref: 'Handling context across multiple rounds of dialogue.',
        depth_explanation: 'In simple terms, modern models excel at this but require careful "state management" to pass the entire history back to the model in every turn.',
        python_context: {
            libraries: ['langchain', 'openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'chat_history',
                    definition: 'The "Chat History" – the list of everything said so far so the AI doesn\'t forget.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'multi_turn.py',
                code: `chat_history = [
    {"role": "user", "content": "Hi, I'm Vamsee."},
    {"role": "assistant", "content": "Hello Vamsee! How can I help?"},
    {"role": "user", "content": "What is my name?"}
]
# Assistant must read the history to answer 'Vamsee'
print("Context sent to AI.")`
            }
        ],
        shortcut: 'Conversation Memory',
        examples: ['Applying Multi-turn conversations to improve application reliability.', 'Using Multi-turn conversations during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 148,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Turn-taking',
        short_ref: 'Managing the timing of when the user speaks vs. when the AI speaks.',
        depth_explanation: 'In simple terms, critical for voice-based AI. A good system knows when to interrupt if the user has a new instruction and when to wait for the user to finish.',
        python_context: {
            libraries: ['speech_recognition', 'pyaudio'],
            how_to_use: 'Use when: Classifying text. Setup: Use classification models or few-shot prompting. Best practice: Provide clear class definitions and examples. Common pitfall: Imbalanced classes cause poor performance.',
            code_breakdown: [
                {
                    term: 'is_silence',
                    definition: 'Voice Activity Detection - The AI "Listening" to tell if you are still talking or if you stopped.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'voice.py',
                code: `while True:
    audio = listen()
    if is_silence(audio):
        print("User stopped. AI's turn to speak.")
        break
    else:
        print("User is still talking...")`
            }
        ],
        shortcut: 'Dialogue Flow',
        examples: ['Applying Turn-taking to improve application reliability.', 'Using Turn-taking during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 149,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Intent drift',
        short_ref: 'When the user changes their goal in the middle of a conversation.',
        depth_explanation: 'In simple terms, a user might start by asking for help with an invoice but then switch to complaining about a broken product. The system must adapt its internal state.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'detect_topic',
                    definition: 'The "Mental Pivot" – a function that realizes you are talking about something new now.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'drift.py',
                code: `current_topic = "Billing"
user_message = "Also, my remote control is broken."
# AI must detect the topic changed to 'Hardware'
new_topic = detect_topic(user_message)
print(f"Switching from {current_topic} to {new_topic}.")`
            }
        ],
        shortcut: 'Changing Goals',
        examples: ['Applying Intent drift to improve application reliability.', 'Using Intent drift during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 150,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Clarification strategies',
        short_ref: 'Proactive follow-up questions used by the AI when the user request is ambiguous.',
        depth_explanation: 'In simple terms, instead of guessing, the AI says "Do you mean the 2023 or 2024 policy?". This saves time and prevents wrong answers.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Use when: Finding similar documents. Setup: Use vector search with cosine similarity. Best practice: Use domain-specific embeddings. Common pitfall: Generic embeddings miss domain nuances.',
            code_breakdown: [
                {
                    term: 'has_multiple_orders',
                    definition: 'The "Clarification" check – a function that sees if the user has too many items to know which one they mean.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'clarify.py',
                code: `user_q = "Check my order"
if has_multiple_orders(user_id):
    print("Which order? I see 3 orders in the last week.")
else:
    process_order(user_id)`
            }
        ],
        shortcut: 'Ask before Answering',
        examples: ['Applying Clarification strategies to improve application reliability.', 'Using Clarification strategies during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 151,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Conversation state machines',
        short_ref: 'Using rigid logic trees to guide a conversation when high control is needed.',
        depth_explanation: 'In simple terms, sometimes "free chat" is too risky. A state machine forces the user through specific steps (e.g., verifying an account before allowing a transfer).',
        python_context: {
            libraries: ['transitions', 'langgraph'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'State',
                    definition: 'The "Current Step" (e.g., Collecting Email) where the AI knows what it is waiting for.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'state_machine.py',
                code: `states = ["START", "GET_EMAIL", "GET_PROMPT", "DONE"]
current = "GET_EMAIL"
print(f"Status: {current}. Expecting user to provide email.")`
            }
        ],
        shortcut: 'Guided Flow',
        examples: ['Applying Conversation state machines to improve application reliability.', 'Using Conversation state machines during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 152,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Stateless bots',
        short_ref: 'Bots that "forget" everything as soon as the current request is finished.',
        depth_explanation: 'In simple terms, simpler and cheaper to build but frustrating for users as they have to repeat their context in every message.',
        python_context: {
            libraries: ['fastapi'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'isolated',
                    definition: 'The "Fresh Start" – every request is treated as if it is the first time the AI has ever met you.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'stateless.py',
                code: `# Every request is isolated
def reply(msg):
    return llm.ask(msg) # No history passed
print(f"Reply: {reply('My name is Vamsee')}")`
            }
        ],
        shortcut: 'Total Amnesia',
        examples: ['Applying Stateless bots to improve application reliability.', 'Using Stateless bots during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 153,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Stateful bots',
        short_ref: 'Bots that maintain a continuous memory of the user and the conversation.',
        depth_explanation: 'In simple terms, more complex but provides a premium experience. Requires a database to store and retrieve "session state" for every user.',
        python_context: {
            libraries: ['redis', 'postgresql'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'db_memory',
                    definition: 'The "Memory Database" where the bot saves facts about your conversation so it remembers you later.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'stateful.py',
                code: `db_memory = {"user_1": ["System: Hi", "User: I'm Vamsee"]}
def get_reply(user_id, msg):
    history = db_memory.get(user_id, [])
    reply = llm.ask(history + [msg])
    db_memory[user_id].append(msg)
    return reply`
            }
        ],
        shortcut: 'Remembers You',
        examples: ['Applying Stateful bots to improve application reliability.', 'Using Stateful bots during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 154,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Conversation memory design',
        short_ref: 'The strategy for what to keep and what to delete from a long chat history.',
        depth_explanation: 'You can\'t send a 1,000-message history to an LLM. Strategies include keeping the last 10 messages, summarizing old messages, or only keeping key facts.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Sliding Window',
                    definition: 'The "Recent List" – only keeping the last few messages and letting the old ones drop out.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'pruning.py',
                code: `history = ["msg1", "msg2", "msg3", "msg4", "msg5"]
# Sliding window: only keep last 3
window = history[-3:]
print(f"Memory: {window}")`
            }
        ],
        shortcut: 'Smart Pruning',
        examples: ['Applying Conversation memory design to improve application reliability.', 'Using Conversation memory design during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 155,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Human-in-the-loop (HITL)',
        short_ref: 'System design where a human reviews or approves AI actions before they go live.',
        depth_explanation: 'In simple terms, essential for high-risk actions like sending a contract or prescribing a drug. The AI drafts, the human signs off.',
        python_context: {
            libraries: ['react', 'flask'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'wait_for_review',
                    definition: 'The "Approval Loop" – the AI generates a draft but forces a human to click "Approved" before sending it.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'hitl.py',
                code: `draft = llm.create_contract("Building house")
# Waiting for human approval
status = web_ui.wait_for_review(draft)
if status == "Approved":
    send_to_client(draft)
else:
    print("Draft rejected by human.")`
            }
        ],
        shortcut: 'Human Validator',
        examples: ['Applying Human-in-the-loop (HITL) to improve application reliability.', 'Using Human-in-the-loop (HITL) during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 156,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Abuse prevention',
        short_ref: 'Techniques to stop users from using the AI for harassment, spam, or illegal activities.',
        depth_explanation: 'In simple terms, involves keyword filtering, semantic analysis of prompts to detect harmful intent, and rate-limiting users who show suspicious behavior patterns.',
        python_context: {
            libraries: ['openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Moderation',
                    definition: 'The "bouncer" at the AI door who stops bad people from asking toxic questions.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'bouncer.py',
                code: `response = client.moderations.create(input="How to build a...")
if response.results[0].flagged:
    print("Access Denied: Toxic Prompt")
else:
    print("Prompt clean. Proceeding...")`
            }
        ],
        shortcut: 'Policy Enforcement',
        examples: ['Applying Abuse prevention to improve application reliability.', 'Using Abuse prevention during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 157,
        category: 'NICE',
        sub_category: 'CONVERSATIONAL AI',
        title: 'Conversation testing',
        short_ref: 'Evaluating the flow, tone, and logic of a dialogue across multiple turns.',
        depth_explanation: 'Testing conversational AI is harder than single-prompt AI. It requires "Multi-turn Benchmarks" to ensure the AI doesn\'t get confused or lose the thread after 5+ messages.',
        python_context: {
            libraries: ['deepeval', 'ragas'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'Thread Continuity',
                    definition: 'The AI\'s ability to "Keep the Thread" – not forgetting what was said 2 minutes ago.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'thread_test.py',
                code: `msgs = [
    "I'm Vamsee", 
    "What's my name?", 
    "Change it to Bob", 
    "What's my name now?"
]
def test_history(msgs):
    # Expect AI to reply 'Bob' at the end
    last_reply = llm.ask(msgs)
    assert "Bob" in last_reply
print("Thread continuity test passed.")`
            }
        ],
        shortcut: 'Dialogue QA',
        examples: ['Applying Conversation testing to improve application reliability.', 'Using Conversation testing during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 158,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Agent definition',
        short_ref: 'An LLM equipped with tools, memory, and a planning loop to achieve complex goals.',
        depth_explanation: 'In simple terms, an agent is "more than a chatbot". It can browse the web, write code, and use apps to solve a problem without being told exactly which steps to take.',
        python_context: {
            libraries: ['langchain', 'autogen'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'while not done',
                    definition: 'The "Execution Loop" – the AI keeps running and thinking until it finishes the goal.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'agent.py',
                code: `class SimpleAgent:
    def solve(self, goal):
        while not done:
            plan = llm.plan(goal)
            result = tools.execute(plan)
            print(f"I did {plan} and got {result}")`
            }
        ],
        shortcut: 'LLM + Tools + Loop',
        examples: ['Applying Agent definition to improve application reliability.', 'Using Agent definition during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 159,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Planning agents',
        short_ref: 'Agents that create a multi-step roadmap before taking any action.',
        depth_explanation: 'In simple terms, models like o1 or agents using "Chain of Action" planning. The AI writes down a list of steps (1. Search, 2. Analyze, 3. Buy) and then executes them one by one.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'plan',
                    definition: 'The "Roadmap" – the list of steps the AI creates before it starts doing any work.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'plan.py',
                code: `goal = "Book a trip to Paris"
plan = [
    "1. Find cheapest flights",
    "2. Find central 4-star hotel",
    "3. Check weather for packing"
]
print("Plan created. Executing step 1...")`
            }
        ],
        shortcut: 'Think then Act',
        examples: ['Applying Planning agents to improve application reliability.', 'Using Planning agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 160,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Reactive agents',
        short_ref: 'Agents that act immediately on the current state without a long-term plan.',
        depth_explanation: 'In simple terms, fast and responsive. They see a stimulus (User: "I need help") and take an action (AI: "Searching docs") immediately. Good for simple, fast-paced tasks.',
        python_context: {
            libraries: ['pydantic-ai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'on_user_angry',
                    definition: 'The "Instant Reflex" – a function that fires the moment a specific trigger (like anger) is detected.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'reactive.py',
                code: `def on_user_angry(msg):
    # Reactive: Don't plan, just apologize instantly
    if detect_anger(msg):
        print("I'm so sorry! Let me fix that immediately.")`
            }
        ],
        shortcut: 'See & Do',
        examples: ['Applying Reactive agents to improve application reliability.', 'Using Reactive agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 161,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Tool calling reliability',
        short_ref: 'The challenge of ensuring the AI provides the correct arguments for tools every time.',
        depth_explanation: 'In simple terms, if the AI forgets a required setting or dial (like "currency"), the tool call fails. Reliability is improved through "Few-shot tool examples" and strict schema validation.',
        python_context: {
            libraries: ['instructor', 'pydantic'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'BaseModel',
                    definition: 'The "Strict Form" that forces the AI to fill in all the correct details before it can call a tool.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'tool_fix.py',
                code: `class SearchTool(BaseModel):
    query: str
    limit: int = 5 # Default prevents 'forgotten' params

def call_tool(tool: SearchTool):
    print(f"Tool called safely with query: {tool.query}")`
            }
        ],
        shortcut: 'Parameter Precision',
        examples: ['Applying Tool calling reliability to improve application reliability.', 'Using Tool calling reliability during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 162,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Agent failure modes',
        short_ref: 'Understanding common ways agents break (loops, hallucinations, cost blowups).',
        depth_explanation: 'In simple terms, agents can get stuck in "infinite loops" (repeatedly searching the same thing) or "cost blowups" where they keep trying to solve a hard problem until the budget runs out.',
        python_context: {
            libraries: ['langsmith', 'wandb'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'is_looping',
                    definition: 'The "Safety Sensor" that detects if the AI is stuck doing the same thing forever.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'failure.py',
                code: `def trace_agent(run_id):
    # Detect the "Infinite Loop" pattern
    if is_looping(run_id):
        raise Exception("Agent stuck in loop! Killing process.")
    print("Agent path looks healthy.")`
            }
        ],
        shortcut: 'Loop & Bleed Risks',
        examples: ['Applying Agent failure modes to improve application reliability.', 'Using Agent failure modes during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 163,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Task decomposition',
        short_ref: 'Breaking down one massive goal into 10 smaller, manageable sub-tasks.',
        depth_explanation: 'In simple terms, the superpower of advanced agents. Instead of trying to "Write a whole app", the agent breaks it into "Setup", "UI", "Auth", and "Database".',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'tasks',
                    definition: 'The "Pizza Slices" – the list of small jobs the big goal was broken into.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'slicer.py',
                code: `goal = "Build a website"
# AI breaks it down:
tasks = ["1. Domain", "2. Hosting", "3. Design", "4. Code"]
for task in tasks:
    print(f"Working on sub-task: {task}")`
            }
        ],
        shortcut: 'Divide and Conquer',
        examples: ['Applying Task decomposition to improve application reliability.', 'Using Task decomposition during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 164,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Supervisor agents',
        short_ref: 'High-level agents that coordinate and manage a "team" of other specialized agents.',
        depth_explanation: 'In simple terms, a "Manager" agent that receives the goal, assigns sub-tasks to "Worker" agents, reviews their work, and returns the final result to the user.',
        python_context: {
            libraries: ['langgraph', 'autogen'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'delegate',
                    definition: 'The "Assigning" act where the Manager AI tells the workers exactly what to do.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'manager.py',
                code: `class ManagerAI:
    def delegate(self, goal):
        print("Manager: Researcher, find data.")
        print("Manager: Coder, write the script.")
        print("Manager: Auditor, check for bugs.")`
            }
        ],
        shortcut: 'The AI Manager',
        examples: ['Applying Supervisor agents to improve application reliability.', 'Using Supervisor agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 165,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Planner agents',
        short_ref: 'Specialized agents whose only job is to create and refine the execution plan.',
        depth_explanation: 'They don\'t use the tools themselves. They just write the "recipe" which is then executed by a different "Executor" agent.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'create_steps',
                    definition: 'The "Blueprint Maker" – the part of the AI that writes out the steps for the task.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'architect.py',
                code: `goal = "Write a book"
recipe = planner.create_steps(goal)
# Recipe: [1. Outline, 2. Draft, 3. Edit]
executor.run(recipe)
print("Plan created and handed over to executor.")`
            }
        ],
        shortcut: 'The Architect',
        examples: ['Applying Planner agents to improve application reliability.', 'Using Planner agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 166,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Debate agents',
        short_ref: 'Using two different AI agents with opposing viewpoints to find the "middle truth".',
        depth_explanation: 'In simple terms, technique used to reduce bias or improve reasoning. Agent A argues FOR; Agent B argues AGAINST; a third agent judges the best points.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'agent_a',
                    definition: 'The first AI in the "Legal Battle" who takes one side of the argument.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'debate.py',
                code: `agent_a = "Pro-Nuclear"
agent_b = "Anti-Nuclear"
print("A: It's clean and efficient!")
print("B: But what about the waste?")
judge = "Judge AI: Both make good points, but safety is key."`
            }
        ],
        shortcut: 'AI Argumentation',
        examples: ['Applying Debate agents to improve application reliability.', 'Using Debate agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 167,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Termination conditions',
        short_ref: 'Hard rules for when an agent should stop working and return to the user.',
        depth_explanation: 'In simple terms, crucial for preventing infinite loops. "Stop if you have tried 5 times" or "Stop if you have found the answer".',
        python_context: {
            libraries: ['langgraph'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'tries',
                    definition: 'The "Attempt Counter" that tracks how many times the AI has tried to solve the problem.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'stop.py',
                code: `tries = 0
while tries < 5:
    result = agent.attempt()
    if "Success" in result: 
        print("Done!")
        break
    tries += 1
if tries == 5: print("Failed after 5 tries.")`
            }
        ],
        shortcut: 'The Quit Logic',
        examples: ['Applying Termination conditions to improve application reliability.', 'Using Termination conditions during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 168,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Loop prevention',
        short_ref: 'Coding logic to detect and break repetitive, non-productive AI behavior.',
        depth_explanation: 'In simple terms, checking the last 3 actions. If the AI is calling the same tool with the same arguments 3 times, the system forces it to ask the user for help.',
        python_context: {
            libraries: ['pydantic-ai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'last_actions',
                    definition: 'A "Memory Log" of what the AI just did, used to check if it is repeating itself.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'no_loops.py',
                code: `last_actions = ["SEARCH", "SEARCH", "SEARCH"]
if len(set(last_actions)) == 1:
    print("Detected loop! Breaking cycle.")
    ask_human_for_help()`
            }
        ],
        shortcut: 'Break the Loop',
        examples: ['Applying Loop prevention to improve application reliability.', 'Using Loop prevention during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 169,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'Cost ceilings',
        short_ref: 'Hard dollar limits per agent run to prevent financial disasters.',
        depth_explanation: 'If an agent run hits $5.00, it is automatically terminated. This prevents a "buggy" agent from draining the company\'s entire monthly budget in minutes.',
        python_context: {
            libraries: ['litellm', 'redis'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'LIMIT',
                    definition: 'The "Emergency Stop" price tag. If the AI spends more than this, it is turned off.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'budget.py',
                code: `current_spend = 4.50
LIMIT = 5.00
if current_spend > LIMIT:
    print("CRITICAL: Spend limit reached. Killing agent.")
    terminate_all()`
            }
        ],
        shortcut: 'Financial Kill-Switch',
        examples: ['Applying Cost ceilings to improve application reliability.', 'Using Cost ceilings during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 170,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'LangChain agents',
        short_ref: 'A popular implementation of agents using the LangChain framework.',
        depth_explanation: 'In simple terms, provides pre-built classes (like ReAct agents) and easy connectors for hundreds of tools, making it the industry standard for rapid prototyping.',
        python_context: {
            libraries: ['langchain'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'load_tools',
                    definition: 'Grabbing a "Bag of Tools" (like Search or Calculator) and giving them to the AI.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'lc_agent.py',
                code: `from langchain.agents import load_tools, initialize_agent
tools = load_tools(["serpapi", "llm-math"])
agent = initialize_agent(tools, llm, agent="zero-shot-react-description")
print("LangChain agent ready to search and calculate.")`
            }
        ],
        shortcut: 'The Agent Framework',
        examples: ['Applying LangChain agents to improve application reliability.', 'Using LangChain agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 171,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'LangGraph',
        short_ref: 'A framework for building cyclical, state-machine based agent flows.',
        depth_explanation: 'In simple terms, unlike simple linear chains, LangGraph allows for complex loops and conditional paths, making it ideal for building robust, reliable agents.',
        python_context: {
            libraries: ['langgraph'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'add_node',
                    definition: 'Creating a "Stop" or "City" in your AI logic where a specific action happens.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'graph.py',
                code: `workflow = Graph()
workflow.add_node("agent", call_model)
workflow.add_node("tools", call_tool)
workflow.add_edge("agent", "tools") # Go to tools after agent
print("Graph workflow defined with loops.")`
            }
        ],
        shortcut: 'State-Machine Agents',
        examples: ['Applying LangGraph to improve application reliability.', 'Using LangGraph during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 172,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'LlamaIndex agents',
        short_ref: 'Data-centric agents focused on retrieving and acting on complex information sources.',
        depth_explanation: 'In simple terms, optimized for RAG. These agents are extremely good at figuring out WHERE in a massive library the answer is before acting.',
        python_context: {
            libraries: ['llama-index'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'ReActAgent',
                    definition: 'A specific type of "Reasoning" agent that acts like a Librarian to find and use your data.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'llama_agent.py',
                code: `from llama_index.core.agent import ReActAgent
agent = ReActAgent.from_tools(tools=[query_engine_tool])
print("LlamaIndex agent ready to hunt for data.")`
            }
        ],
        shortcut: 'Search Experts',
        examples: ['Applying LlamaIndex agents to improve application reliability.', 'Using LlamaIndex agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    },
    {
        id: 173,
        category: 'NICE',
        sub_category: 'AGENTIC SYSTEMS',
        title: 'When NOT to use agents',
        short_ref: 'Understanding the limits of agentic complexity and when simple code is better.',
        depth_explanation: 'Agents are slow, expensive, and unpredictable. If a problem can be solved with a simple prompt or a piece of Python logic, DON\'T use an agent.',
        python_context: {
            libraries: ['openai'],
            how_to_use: 'Generally, you would use official API clients or open-source libraries to implement these concepts.',
            code_breakdown: [
                {
                    term: 'requests.get',
                    definition: 'Calling a standard web API directly without needing a complex AI brain to think about it.'
                }
            ]
        },
        code_samples: [
            {
                filename: 'simplicity.py',
                code: `def get_weather(city):
    # DONT use an agent to call an API.
    # Just use a simple function!
    return requests.get(f"https://api.weather.com/{city}")`
            }
        ],
        shortcut: 'Simplicity Wins',
        examples: ['Applying When NOT to use agents to improve application reliability.', 'Using When NOT to use agents during the development of a production-level LLM app.'],
        tags: ['AI', 'General']
    }
];
