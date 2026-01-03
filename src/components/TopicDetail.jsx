import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    BookOpen,
    Play,
    Sparkles,
    Terminal,
    Layers,
    ShieldCheck,
    Code,
    Bookmark,
    AlertTriangle,
    Target,
    Zap,
    Activity,
    ChevronDown,
    ChevronUp,
    MessageCircle,
    Shield,
    FileText,
    Box
} from 'lucide-react';

export default function TopicDetail({ topic, setActiveTopic }) {
    const [activeFileIdx, setActiveFileIdx] = useState(0);
    const [showRealityLayer, setShowRealityLayer] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

    const codeSamples = topic.code_samples || [];
    const activeSample = codeSamples[activeFileIdx] || { code: '# No code sample available', filename: 'main.py' };

    const formatText = (text) => {
        if (!text) return '';
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const content = part.slice(2, -2);
                return <span key={i} className="thinking-text">{content}</span>;
            }
            return part;
        });
    };

    return (
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row h-full">
            {/* Left Column: Documentation / Prose */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-3xl mx-auto space-y-12 pb-20"
                >
                    {/* Back Button */}
                    <button
                        onClick={() => setActiveTopic(null)}
                        className="flex items-center gap-2 text-slate-500 hover:text-white transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Dashboard</span>
                    </button>

                    {/* Header */}
                    <header className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                {topic.category} KNOW
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                {topic.sub_category}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight">
                                {topic.title}
                            </h1>
                        </div>
                    </header>

                    {/* In-Depth Concept */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                In-Depth Concept
                            </h2>
                            <div className="flex-1 h-px bg-slate-900" />
                        </div>
                        <p className="text-slate-300 text-lg font-light leading-relaxed">
                            {formatText(topic.depth_explanation)}
                        </p>
                    </section>

                    {/* Interview Answer */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[10px] font-black text-primary-400 uppercase tracking-widest flex items-center gap-2">
                                <Sparkles className="w-4 h-4 shadow-glow" />
                                The Interview Answer
                            </h2>
                            <div className="flex-1 h-px bg-primary-900/30" />
                        </div>
                        <div className="p-6 rounded-2xl bg-primary-500/5 border border-primary-500/10 relative">
                            <p className="text-xl text-white font-medium leading-relaxed">
                                {formatText(topic.short_ref)}
                            </p>
                        </div>
                    </section>

                    {/* Keywords/Shortcuts */}
                    {topic.shortcut && (
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                                    <Bookmark className="w-4 h-4" />
                                    The Key Insight
                                </h2>
                                <div className="flex-1 h-px bg-amber-900/20" />
                            </div>

                            <div className="space-y-6">
                                {/* Shortcut Card */}
                                <div className="p-1 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/20">
                                    <div className="p-6 rounded-xl bg-slate-950/80 backdrop-blur-sm flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                                            <Bookmark className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <p className="text-lg font-bold text-amber-200 tracking-tight leading-snug">
                                            {topic.shortcut}
                                        </p>
                                    </div>
                                </div>

                                {/* Tags Row */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mr-2">Core Tags</span>
                                    {(topic.tags || []).map(tag => (
                                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 text-[11px] font-bold uppercase tracking-wider hover:border-slate-700 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Examples Section */}
                    {topic.examples && (
                        <section className="space-y-6">
                            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Practical Application</h3>
                            <div className="space-y-4">
                                {topic.examples.map((example, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform" />
                                        <span className="text-sm text-slate-200 leading-relaxed font-light">{example}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Operational Reality & Interview Tips layer */}
                    {(topic.failure_modes || topic.interview_traps || topic.production_gotchas || topic.metrics_to_watch || (topic.interview_questions && topic.interview_questions.length > 0)) && (
                        <section className="space-y-6 pt-6 border-t border-slate-900">
                            <div className="flex flex-wrap gap-4">
                                {(topic.failure_modes || topic.interview_traps || topic.production_gotchas || topic.metrics_to_watch) && (
                                    <button
                                        onClick={() => setShowRealityLayer(!showRealityLayer)}
                                        className={`flex-1 min-w-[240px] p-4 rounded-2xl border transition-all flex items-center justify-between group ${showRealityLayer
                                            ? 'bg-rose-500/10 border-rose-500/40 text-rose-400'
                                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-rose-500/30 hover:bg-rose-500/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${showRealityLayer ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-slate-500 group-hover:text-rose-400'}`}>
                                                <Shield className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Production Truth</div>
                                                <div className="text-sm font-bold">Operational Reality Layer</div>
                                            </div>
                                        </div>
                                        {showRealityLayer ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </button>
                                )}

                                {topic.interview_questions && topic.interview_questions.length > 0 && (
                                    <button
                                        onClick={() => setShowQuestions(!showQuestions)}
                                        className={`flex-1 min-w-[240px] p-4 rounded-2xl border transition-all flex items-center justify-between group ${showQuestions
                                            ? 'bg-sky-500/10 border-sky-500/40 text-sky-400'
                                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-sky-500/30 hover:bg-sky-500/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${showQuestions ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-500 group-hover:text-sky-400'}`}>
                                                <MessageCircle className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Prep for depth</div>
                                                <div className="text-sm font-bold">Interview Q&A Insights</div>
                                            </div>
                                        </div>
                                        {showQuestions ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </button>
                                )}
                            </div>

                            <AnimatePresence>
                                {showRealityLayer && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                            {topic.failure_modes && (
                                                <div className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800/80 space-y-4">
                                                    <div className="flex items-center gap-3 text-rose-400">
                                                        <AlertTriangle className="w-5 h-5" />
                                                        <span className="text-xs font-black uppercase tracking-widest">Failure Modes</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 font-medium">Where the system breaks</p>
                                                    <ul className="space-y-2">
                                                        {topic.failure_modes.map((item, i) => (
                                                            <li key={i} className="text-sm text-slate-300 flex gap-2">
                                                                <span className="text-rose-500/50">•</span> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {topic.interview_traps && (
                                                <div className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800/80 space-y-4">
                                                    <div className="flex items-center gap-3 text-amber-400">
                                                        <Target className="w-5 h-5" />
                                                        <span className="text-xs font-black uppercase tracking-widest">Interview Traps</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 font-medium">Where humans misunderstand</p>
                                                    <ul className="space-y-2">
                                                        {topic.interview_traps.map((item, i) => (
                                                            <li key={i} className="text-sm text-slate-300 flex gap-2">
                                                                <span className="text-amber-500/50">•</span> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {topic.production_gotchas && (
                                                <div className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800/80 space-y-4">
                                                    <div className="flex items-center gap-3 text-sky-400">
                                                        <Zap className="w-5 h-5" />
                                                        <span className="text-xs font-black uppercase tracking-widest">Production Gotchas</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 font-medium">Where theory dies in real environments</p>
                                                    <ul className="space-y-2">
                                                        {topic.production_gotchas.map((item, i) => (
                                                            <li key={i} className="text-sm text-slate-300 flex gap-2">
                                                                <span className="text-sky-500/50">•</span> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {topic.metrics_to_watch && (
                                                <div className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800/80 space-y-4">
                                                    <div className="flex items-center gap-3 text-emerald-400">
                                                        <Activity className="w-5 h-5" />
                                                        <span className="text-xs font-black uppercase tracking-widest">Metrics to Watch</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 font-medium">How you detect problems early</p>
                                                    <ul className="space-y-2">
                                                        {topic.metrics_to_watch.map((item, i) => (
                                                            <li key={i} className="text-sm text-slate-300 flex gap-2">
                                                                <span className="text-emerald-500/50">•</span> {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {showQuestions && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 space-y-4">
                                            {topic.interview_questions.map((q, i) => (
                                                <div key={i} className="p-6 rounded-3xl bg-sky-500/5 border border-sky-500/10 space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px] font-black shrink-0 relative top-0.5">Q</div>
                                                        <h4 className="text-base font-bold text-white leading-tight">{q.question}</h4>
                                                    </div>
                                                    <div className="flex items-start gap-3 pl-1">
                                                        <div className="w-1 h-full bg-sky-500/20 rounded-full" />
                                                        <p className="text-sm text-slate-200 leading-relaxed pl-6">{q.answer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    )}
                </motion.div>
            </div>

            {/* Right Column: Technical Implementation */}
            <div className="w-full lg:w-[45%] border-t lg:border-t-0 lg:border-l border-slate-900 bg-slate-950/30 flex flex-col relative overflow-y-auto custom-scrollbar pb-32">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 lg:p-10 space-y-10"
                >
                    {/* Header Label */}
                    <div className="flex items-center gap-3 text-primary-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4">
                        <Terminal className="w-4 h-4 shadow-glow" />
                        <span>Technical Implementation</span>
                    </div>

                    {/* Frameworks & Usage */}
                    <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2">
                                <Layers className="w-3 h-3" />
                                Frameworks
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {(topic.python_context?.libraries || []).map(lib => (
                                    <div key={lib} className="px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider">
                                        {lib}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {topic.python_context?.alternative_libraries && (
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Code className="w-3 h-3" />
                                    Alternative Libraries
                                </h4>
                                <div className="space-y-3">
                                    {Object.entries(topic.python_context.alternative_libraries).map(([category, libs]) => (
                                        <div key={category} className="flex flex-wrap items-center gap-2">
                                            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tight min-w-[70px]">{category}:</span>
                                            <div className="flex flex-wrap gap-1.5">
                                                {libs.map(lib => (
                                                    <span key={lib} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-white text-[11px] font-medium hover:border-sky-500/30 transition-colors">
                                                        {lib}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {topic.python_context?.supported_formats && (
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <FileText className="w-3 h-3" />
                                    Supported Formats
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {topic.python_context.supported_formats.map(format => (
                                        <span key={format} className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-white text-[11px] font-black uppercase tracking-tight">
                                            {format}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {topic.python_context?.loader_interface && (
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <Box className="w-3 h-3" />
                                    Loader Interface
                                </h4>
                                <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-5">
                                    <p className="text-sm text-slate-200 leading-relaxed italic font-light">
                                        "{topic.python_context.loader_interface.description}"
                                    </p>

                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Required Methods</p>
                                        <div className="flex flex-wrap gap-2">
                                            {topic.python_context.loader_interface.required_methods.map(method => (
                                                <code key={method} className="px-2 py-0.5 rounded bg-slate-950 text-sky-400 text-[11px] border border-sky-400/20 font-bold">
                                                    {method}
                                                </code>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800/50">
                                        <div className="flex items-start gap-3">
                                            <div className="text-sm text-emerald-400 mt-0.5">➔</div>
                                            <p className="text-sm text-white font-medium leading-relaxed">
                                                <span className="text-emerald-400 font-black uppercase text-[10px] tracking-widest mr-2">Contract:</span>
                                                {topic.python_context.loader_interface.contract}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3" />
                                Implementation Guide
                            </h4>
                            {(() => {
                                const guide = topic.python_context?.how_to_use || '';
                                const sections = [
                                    { label: 'Use when', regex: /Use when:\s*([^.]*\.)/i, icon: '🎯' },
                                    { label: 'Setup', regex: /Setup:\s*([^.]*\.)/i, icon: '⚙️' },
                                    { label: 'Best practice', regex: /Best practice:\s*([^.]*\.)/i, icon: '✅' },
                                    { label: 'Common pitfall', regex: /Common pitfall:\s*([^.]*\.)/i, icon: '⚠️' }
                                ];

                                return (
                                    <div className="space-y-3">
                                        {sections.map(({ label, regex, icon }) => {
                                            const match = guide.match(regex);
                                            if (!match) return null;
                                            return (
                                                <div key={label} className="flex gap-3">
                                                    <span className="text-base shrink-0">{icon}</span>
                                                    <div>
                                                        <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">{label}: </span>
                                                        <span className="text-sm text-white leading-relaxed">{match[1].trim()}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>

                    {/* Code Explorer */}
                    <div className="space-y-4 pt-4">
                        <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800/80">
                            {/* Tabs */}
                            <div className="flex overflow-x-auto no-scrollbar border-b border-slate-800/80 bg-slate-950/50">
                                {codeSamples.map((sample, idx) => (
                                    <button
                                        key={sample.filename}
                                        onClick={() => setActiveFileIdx(idx)}
                                        className={`px-5 py-3.5 flex items-center gap-2 border-r border-slate-900 transition-all min-w-fit ${activeFileIdx === idx
                                            ? 'bg-slate-950 text-sky-400'
                                            : 'text-slate-500 hover:bg-slate-900/50 hover:text-slate-300'
                                            }`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full ${activeFileIdx === idx ? 'bg-sky-500' : 'bg-transparent'}`} />
                                        <span className="text-[11px] font-bold font-mono tracking-tight uppercase">{sample.filename}</span>
                                    </button>
                                ))}
                            </div>
                            {/* Code Content */}
                            <div className="bg-slate-950 p-6 font-mono text-[13px] overflow-x-auto custom-scrollbar text-slate-300 leading-relaxed min-h-[300px]">
                                <AnimatePresence mode="wait">
                                    <motion.pre
                                        key={activeFileIdx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <code className="block whitespace-pre">
                                            {activeSample.code}
                                        </code>
                                    </motion.pre>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Technical Breakdown / Glossary */}
                    {topic.python_context?.code_breakdown && (
                        <div className="pt-4">
                            <h4 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <Terminal className="w-3 h-3 shadow-glow" />
                                Technical Glossary
                            </h4>
                            <div className="space-y-6">
                                {topic.python_context.code_breakdown.map((item, i) => (
                                    <div key={i} className="group border-l border-slate-800 pl-4 py-1 hover:border-sky-500/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <span className="font-mono text-sm font-bold text-sky-400 bg-sky-400/5 px-2 py-0.5 rounded leading-none border border-sky-400/10">
                                                {item.term}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-300 leading-relaxed font-light pl-0.5 group-hover:text-white transition-colors">
                                            {item.definition}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
