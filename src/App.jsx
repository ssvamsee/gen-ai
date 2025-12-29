import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopicDetail from './components/TopicDetail';
import Dashboard from './components/Dashboard';
import { topics } from './data/topics';

function App() {
  const [activeCategory, setActiveCategory] = useState('MUST');
  const [activeTopic, setActiveTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden font-sans">
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
        topics={topics}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 transition-all duration-300 relative overflow-hidden flex flex-col">
        {/* Background blobs for aesthetics */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/5 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -ml-32 -mb-32" />

        {activeTopic ? (
          <TopicDetail
            topic={activeTopic}
            setActiveTopic={setActiveTopic}
          />
        ) : (
          <Dashboard
            setActiveCategory={setActiveCategory}
            setActiveTopic={setActiveTopic}
            topics={topics}
          />
        )}
      </main>
    </div>
  );
}

export default App;
