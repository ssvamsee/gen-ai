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
    Bookmark
} from 'lucide-react';

export default function TopicDetail({ topic, setActiveTopic }) {
    const [activeFileIdx, setActiveFileIdx] = useState(0);
    const codeSamples = topic.code_samples || [];
    const activeSample = codeSamples[activeFileIdx] || { code: '# No code sample available', filename: 'main.py' };

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
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
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
                            {topic.depth_explanation}
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
                                {topic.short_ref}
                            </p>
                        </div>
                    </section>

                    {/* Keywords/Shortcuts */}
                    {topic.shortcut && (
                        <section className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                                    <Bookmark className="w-4 h-4" />
                                    Keywords to Remember
                                </h2>
                                <div className="flex-1 h-px bg-amber-900/30" />
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold font-mono">
                                    {topic.shortcut}
                                </span>
                                {(topic.tags || []).map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Examples Section */}
                    {topic.examples && (
                        <section className="space-y-6">
                            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Practical Application</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {topic.examples.map((example, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-slate-900/30 border border-slate-800/50 flex items-center gap-4 hover:border-slate-700 transition-colors group">
                                        <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 group-hover:scale-110 transition-transform">
                                            <Play className="w-3 h-3 fill-current" />
                                        </div>
                                        <span className="text-sm text-slate-400 leading-snug">{example}</span>
                                    </div>
                                ))}
                            </div>
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
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <Layers className="w-3 h-3" />
                                Frameworks
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {(topic.python_context?.libraries || []).map(lib => (
                                    <div key={lib} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                                        {lib}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
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
                                        <p className="text-sm text-slate-400 leading-relaxed font-light pl-0.5 group-hover:text-slate-300 transition-colors">
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
