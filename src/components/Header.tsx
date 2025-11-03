import { Button } from './ui/button';
import { ChevronDown, Globe, Mail, MessageCircle, Menu } from 'lucide-react';
import { useState } from 'react';
import fxLogo from '@/assets/fx-logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between rounded-2xl sm:rounded-full backdrop-blur-md bg-gray-900/40 border border-gray-700/50 px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <img src={fxLogo} alt="FX Logo" className="h-6 sm:h-8 w-auto" />
            <div className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7FFF00] to-[#32CD32]">FinX</div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1 rounded-lg hover:bg-white/5">
              ПРОДУКТ
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              РЕШЕНИЯ
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              КЕЙСЫ
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              ПОДДЕРЖКА
            </button>
            <button className="px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-1 rounded-lg hover:bg-white/5">
              КОМПАНИЯ
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
              <Globe className="w-4 h-4" />
              РУ
              <ChevronDown className="w-3 h-3" />
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-gray-900 font-semibold border-0 shadow-lg shadow-lime-500/20 text-xs sm:text-sm px-3 sm:px-4">
                  КОНТАКТЫ
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-lime-500/30 z-50">
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-400">
                  Для сотрудничества:
                </div>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://t.me/FinX_support_ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    @FinX_support_ru
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://t.me/FINX_SUPER" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    @FINX_SUPER
                  </a>
                </DropdownMenuItem>
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-400 mt-2">
                  Почта для коммерческих предложений:
                </div>
                <DropdownMenuItem asChild>
                  <a 
                    href="mailto:finx.partners@gmail.com"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    finx.partners@gmail.com
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl backdrop-blur-md bg-gray-900/95 border border-gray-700/50 overflow-hidden animate-fade-in">
            <div className="flex flex-col p-2">
              <button className="px-4 py-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors text-left rounded-lg hover:bg-white/5">
                ПРОДУКТ
              </button>
              <button className="px-4 py-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors text-left rounded-lg hover:bg-white/5">
                РЕШЕНИЯ
              </button>
              <button className="px-4 py-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors text-left rounded-lg hover:bg-white/5">
                КЕЙСЫ
              </button>
              <button className="px-4 py-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors text-left rounded-lg hover:bg-white/5">
                ПОДДЕРЖКА
              </button>
              <button className="px-4 py-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors text-left rounded-lg hover:bg-white/5">
                КОМПАНИЯ
              </button>
              <div className="border-t border-gray-700/50 my-2" />
              <button className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5">
                <Globe className="w-4 h-4" />
                РУ
              </button>
            </div>
          </div>
        )}
      </div>
    </header>;
};