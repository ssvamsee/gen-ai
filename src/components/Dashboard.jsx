import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, CheckCircle, BookOpen, Star, ArrowRight, Zap, Target, Award, ArrowLeft } from 'lucide-react';

const stats = [
    { label: 'Must Know', count: 98, icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { label: 'Should Know', count: 48, icon: BookOpen, color: 'text-sky-400', bg: 'bg-sky-400/10' },
    { label: 'Nice to Know', count: 27, icon: Star, color: 'text-amber-400', bg: 'bg-amber-400/10' },
];


export default function Dashboard({ setActiveCategory, setActiveTopic, topics }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const categories = [
        {
            id: 'MUST',
            title: 'Must Know',
            desc: 'The essential core of modern LLMs. Foundations you cannot afford to miss.',
            icon: Target,
            color: 'from-emerald-500/20 to-teal-500/20',
            borderColor: 'border-emerald-500/30'
        },
        {
            id: 'SHOULD',
            title: 'Should Know',
            desc: 'Advanced architectures, fine-tuning techniques, and enterprise orchestration.',
            icon: Zap,
            color: 'from-sky-500/20 to-indigo-500/20',
            borderColor: 'border-sky-500/30'
        },
        {
            id: 'NICE',
            title: 'Nice to Know',
            desc: 'Agentic workflows, framework nuances, and the future of multi-agent systems.',
            icon: Award,
            color: 'from-amber-500/20 to-orange-500/20',
            borderColor: 'border-amber-500/30'
        },
    ];

    const currentCatInfo = categories.find(c => c.id === selectedCategory);

    const getGroupedTopics = () => {
        if (!selectedCategory) return [];
        const catTopics = topics.filter(t => t.category === selectedCategory);

        const groups = [];
        const seenSubs = new Set();

        catTopics.forEach(topic => {
            const sub = topic.sub_category || 'OTHERS';

            if (!seenSubs.has(sub)) {
                seenSubs.add(sub);
                groups.push({
                    title: sub,
                    topics: catTopics.filter(t => (t.sub_category || 'OTHERS') === sub)
                });
            }
        });

        return groups;
    };

    const groupedTopics = getGroupedTopics();

    // Topic List View for a specific Sub-Category
    if (selectedCategory && selectedSubCategory) {
        const subGroup = groupedTopics.find(g => g.title === selectedSubCategory);
        return (
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-12 h-full w-full">
                <div className="w-full space-y-6 sm:space-y-10 pb-20 px-2 sm:px-4 md:px-0">
                    <button
                        onClick={() => setSelectedSubCategory(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-4 touch-manipulation min-h-[44px]"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm sm:text-base">Back to {currentCatInfo.title}</span>
                    </button>

                    <header className="pb-6 sm:pb-8 border-b border-slate-900">
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-2 sm:gap-3 text-primary-400 font-black uppercase text-[9px] sm:text-[10px] tracking-[0.2em]">
                                <currentCatInfo.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{currentCatInfo.title}</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">
                                {selectedSubCategory}
                            </h2>
                            <p className="text-slate-400 max-w-xl font-light text-xs sm:text-sm md:text-base">
                                Exploring {subGroup?.topics.length || 0} specialized topics within this area.
                            </p>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                        {subGroup?.topics.map((topic, idx) => (
                            <motion.button
                                key={topic.id}
                                onClick={() => {
                                    setActiveCategory(topic.category);
                                    setActiveTopic(topic);
                                }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.02 }}
                                className="glass-panel p-6 rounded-2xl text-left hover:border-primary-500/40 hover:bg-white/5 transition-all group relative overflow-hidden h-full flex flex-col"
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-primary-400 mt-1">
                                        #{String(topic.id).padStart(3, '0')}
                                    </span>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-2">
                                            {topic.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 line-clamp-2 font-light leading-relaxed">
                                            {topic.short_ref}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-primary-400 transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Sub-Category Grid View
    if (selectedCategory) {
        return (
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-12 h-full w-full">
                <div className="w-full space-y-6 sm:space-y-10 pb-20 px-2 sm:px-4 md:px-0">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-4 touch-manipulation min-h-[44px]"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm sm:text-base">Back to Overview</span>
                    </button>

                    <header className="pb-6 sm:pb-8 border-b border-slate-900">
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white flex items-center gap-3 sm:gap-4">
                                <currentCatInfo.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-primary-400" />
                                {currentCatInfo.title}
                            </h2>
                            <p className="text-slate-400 max-w-xl font-light text-xs sm:text-sm md:text-base">
                                {currentCatInfo.desc}
                            </p>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {groupedTopics.map((group, idx) => (
                            <motion.button
                                key={group.title}
                                onClick={() => setSelectedSubCategory(group.title)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass-panel p-8 rounded-[2rem] text-left hover:border-primary-500/40 hover:bg-white/5 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 transition-transform">
                                    <Layout className="w-24 h-24 text-white" />
                                </div>
                                <div className="flex flex-col h-full">
                                    <span className="text-[10px] font-black text-primary-500/70 uppercase tracking-[0.2em] mb-4">
                                        Module {idx + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {group.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-light mb-6 flex-1">
                                        Contains {group.topics.length} core concepts and techniques.
                                    </p>
                                    <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest pt-4 border-t border-white/5">
                                        <span>Explore Sub-Category</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Default Overview View
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-12 h-full w-full">
            <div className="w-full space-y-8 sm:space-y-12 pb-20 px-2 sm:px-4 md:px-0">
                {/* Hero Section */}
                <header className="space-y-3 sm:space-y-4 text-center md:text-left pt-12 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                    >
                        <Layout className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>Curriculum Dashboard</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]"
                    >
                        Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-400 to-sky-300 drop-shadow-2xl">GenAI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mx-auto md:mx-0"
                    >
                        Your comprehensive guide to 173 Generative AI concepts, meticulously curated for deep understanding and interview preparation.
                    </motion.p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl group hover:border-white/20 transition-all cursor-default"
                        >
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${stat.bg} ${stat.color}`}>
                                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{stat.count}</span>
                            </div>
                            <h3 className="text-slate-400 font-medium text-xs sm:text-sm md:text-base">{stat.label}</h3>
                        </motion.div>
                    ))}
                </div>

                {/* Categories Section */}
                <section className="space-y-6 sm:space-y-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Targeted Curriculum</h2>
                        <div className="flex-1 h-px bg-slate-900/50" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {categories.map((cat, idx) => (
                            <motion.button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + idx * 0.1 }}
                                className={`flex flex-col text-left p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br ${cat.color} ${cat.borderColor} border-2 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group h-full touch-manipulation`}
                            >
                                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 group-hover:scale-110 transition-transform">
                                    <cat.icon className="w-16 h-16 sm:w-24 sm:h-24" />
                                </div>
                                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 w-fit">
                                    <cat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{cat.title}</h3>
                                <p className="text-slate-300 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 flex-1">
                                    {cat.desc}
                                </p>
                                <div className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform text-xs sm:text-sm md:text-base">
                                    <span>Browse Topics</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </section>

                {/* Footer Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-8 sm:pt-12 border-t border-slate-900/50 text-center"
                >
                    <p className="text-slate-500 italic font-light text-[10px] sm:text-xs md:text-sm px-4">
                        "The best way to predict the future is to build it." — Generative AI Era 2024
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
