import React, { useState, useMemo, useEffect } from 'react';
import { Zap, Info, Search, Menu, ChevronRight, ChevronDown, BookOpen, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    { id: 'MUST', name: 'MUST KNOW', icon: Zap, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { id: 'SHOULD', name: 'SHOULD KNOW', icon: Award, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { id: 'NICE', name: 'NICE TO KNOW', icon: Info, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
];

export default function Sidebar({ activeCategory, setActiveCategory, activeTopic, setActiveTopic, topics, searchQuery, setSearchQuery, isOpen, setIsOpen }) {
    const [expandedSubCats, setExpandedSubCats] = useState({});

    // Filter and group topics
    const { filteredTopics, groupedTopics } = useMemo(() => {
        const filtered = topics.filter(t =>
            (t.category === activeCategory) &&
            (t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                t.sub_category.toLowerCase().includes(searchQuery.toLowerCase()))
        );

        const grouped = filtered.reduce((acc, topic) => {
            const sub = topic.sub_category;
            if (!acc[sub]) acc[sub] = [];
            acc[sub].push(topic);
            return acc;
        }, {});

        return { filteredTopics: filtered, groupedTopics: grouped };
    }, [topics, activeCategory, searchQuery]);

    // Auto-expand sub-category when topic is active or searching
    useEffect(() => {
        if (activeTopic && activeTopic.category === activeCategory) {
            setExpandedSubCats(prev => ({ ...prev, [activeTopic.sub_category]: true }));
        }
    }, [activeTopic, activeCategory]);

    useEffect(() => {
        if (searchQuery) {
            const newExpanded = {};
            Object.keys(groupedTopics).forEach(subCat => {
                newExpanded[subCat] = true;
            });
            setExpandedSubCats(newExpanded);
        }
    }, [searchQuery, groupedTopics]);

    const toggleSubCat = (subCat) => {
        setExpandedSubCats(prev => ({
            ...prev,
            [subCat]: !prev[subCat]
        }));
    };

    return (
        <div className={`relative h-full transition-all duration-300 ${isOpen ? 'w-80' : 'w-20'} glass-panel border-r border-slate-800 shrink-0`}>
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                    {isOpen && (
                        <button
                            onClick={() => setActiveTopic(null)}
                            className="text-left hover:opacity-80 transition-opacity"
                        >
                            <h1 className="text-xl font-black bg-gradient-to-r from-white via-primary-400 to-sky-300 bg-clip-text text-transparent drop-shadow-sm">
                                GenAI Master
                            </h1>
                        </button>
                    )}
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                        <Menu className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                {/* Category Tabs */}
                <div className="px-4 mb-6">
                    <div className="flex bg-slate-900/50 p-1 rounded-xl border border-slate-800/50">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg transition-all ${activeCategory === cat.id ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                                title={cat.name}
                            >
                                <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? cat.color : ''}`} />
                                {isOpen && <span className="text-[10px] mt-1 font-bold whitespace-nowrap">{cat.id}</span>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search */}
                {isOpen && (
                    <div className="px-6 mb-4 relative">
                        <Search className="absolute left-9 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search concepts or tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all placeholder:text-slate-600"
                        />
                    </div>
                )}

                {/* Grouped Topic List */}
                <div className="flex-1 overflow-y-auto px-4 pb-10 custom-scrollbar">
                    {isOpen ? (
                        Object.keys(groupedTopics).map((subCat) => (
                            <div key={subCat} className="mb-4">
                                <button
                                    onClick={() => toggleSubCat(subCat)}
                                    className="w-full flex items-center justify-between p-2 mb-1 hover:bg-slate-800/30 rounded-lg transition-all group"
                                >
                                    <span className="text-[11px] font-black text-slate-500 tracking-wider uppercase group-hover:text-slate-300 transition-colors">
                                        {subCat}
                                    </span>
                                    {expandedSubCats[subCat] ? (
                                        <ChevronDown className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                                    ) : (
                                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {expandedSubCats[subCat] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-1 mt-1 border-l border-slate-800/50 ml-2 pl-2">
                                                {groupedTopics[subCat].map((topic) => (
                                                    <button
                                                        key={topic.id}
                                                        onClick={() => setActiveTopic(topic)}
                                                        className={`w-full text-left p-2.5 rounded-lg transition-all group flex items-start gap-3 ${activeTopic?.id === topic.id ? 'bg-primary-500/10 border border-primary-500/20' : 'hover:bg-slate-800/50 border border-transparent'}`}
                                                    >
                                                        <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeTopic?.id === topic.id ? 'bg-primary-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]' : 'bg-slate-700 group-hover:bg-slate-500'}`} />
                                                        <div>
                                                            <p className={`text-sm font-medium ${activeTopic?.id === topic.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                                                {topic.title}
                                                            </p>
                                                            {topic.short_ref && (
                                                                <p className="text-[10px] text-slate-600 mt-0.5 line-clamp-1 group-hover:text-slate-500 font-normal">
                                                                    {topic.short_ref}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))
                    ) : (
                        <div className="space-y-6 pt-4 flex flex-col items-center">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`relative p-3 rounded-xl transition-all ${activeCategory === cat.id ? 'bg-slate-800 shadow-lg scale-110' : 'text-slate-600 hover:text-slate-400 hover:bg-slate-900'}`}
                                >
                                    <cat.icon className={`w-6 h-6 ${activeCategory === cat.id ? cat.color : ''}`} />
                                    {activeCategory === cat.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 border border-slate-700 rounded-xl"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}

                    {isOpen && filteredTopics.length === 0 && (
                        <div className="text-center py-20 opacity-30">
                            <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-700" />
                            <p className="text-sm font-medium tracking-tight">No topics matching your search</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
