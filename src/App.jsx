import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopicDetail from './components/TopicDetail';
import Dashboard from './components/Dashboard';
import { topics } from './data/topics';
import { Menu } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('MUST');
  const [activeTopic, setActiveTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden font-sans">
      {/* Mobile Menu Button */}
      {isMobile && !isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-3 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 shadow-lg transition-colors lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-slate-300" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
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
        isMobile={isMobile}
      />

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300 relative overflow-hidden flex flex-col">
        {/* Background blobs for aesthetics */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-600/5 blur-[120px] rounded-full -mr-32 md:-mr-64 -mt-32 md:-mt-64 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -ml-16 md:-ml-32 -mb-16 md:-mb-32" />

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
