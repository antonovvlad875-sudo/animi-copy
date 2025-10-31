import { Button } from './ui/button';
import { ChevronDown, Globe } from 'lucide-react';
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between rounded-full backdrop-blur-md bg-gray-900/40 border border-gray-700/50 px-6 py-3 shadow-lg">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">FinX</div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1 rounded-lg hover:bg-white/5">
              PRODUCT
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              SOLUTION
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              CASE STUDY
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              SUPPORT
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1 rounded-lg hover:bg-white/5">
              COMPANY
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              <Globe className="w-4 h-4" />
              EN
              <ChevronDown className="w-3 h-3" />
            </button>
            
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-emerald-500/20">
              CONTACT
            </Button>
          </div>
        </nav>
      </div>
    </header>;
};