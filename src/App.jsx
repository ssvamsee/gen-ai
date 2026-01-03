import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopicDetail from './components/TopicDetail';
import Dashboard from './components/Dashboard';
import { topics } from './data/topics';
import { Menu } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('MUST');
  const [activeTopic, setActiveTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);

  // Handle window resize for sidebar
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {/* Mobile Menu Toggle - Only visible when sidebar is closed on mobile */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-6 right-6 z-40 p-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg lg:hidden"
        >
          <Menu className="w-5 h-5 text-slate-400" />
        </button>
      )}

      <main className={`flex-1 transition-all duration-300 relative lg:overflow-hidden flex flex-col ${isSidebarOpen && window.innerWidth > 1024 ? 'lg:ml-0' : ''}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background blobs for aesthetics */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/5 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -ml-32 -mb-32" />
        </div>

        <div className="flex-1 flex flex-col relative overflow-y-auto lg:overflow-hidden h-full">
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
        </div>
      </main>
    </div>
  );
}

export default App;
