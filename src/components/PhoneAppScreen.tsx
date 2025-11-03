import { CreditCard, Bitcoin, TrendingUp } from 'lucide-react';

export const PhoneAppScreen = () => {
  return (
    <div className="w-full h-full bg-white p-3 sm:p-4 md:p-6 pt-5 sm:pt-6 md:pt-8">
      <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-6">
        <h3 className="text-gray-900 font-bold text-base sm:text-lg md:text-xl">FinX</h3>
        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-emerald-100 flex items-center justify-center">
          <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-emerald-600" />
        </div>
      </div>

      {/* Balance */}
      <div className="mb-3 sm:mb-4 md:mb-6">
        <div className="text-gray-600 text-xs sm:text-sm mb-0.5 sm:mb-1">Баланс</div>
        <div className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-1.5 md:mb-2">₽2,847,500</div>
        <div className="flex gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
          <span>Счёт: 0000</span>
          <span>БИК: 0000</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4 md:mb-6">
        <button className="flex-1 bg-emerald-50 text-emerald-700 py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-emerald-100 transition-colors">
          Пополнить
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
          Вывести
        </button>
      </div>

      {/* Paychecks indicator */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-xs sm:text-sm text-gray-600">Зарплата</span>
      </div>

      {/* Save & Invest */}
      <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 border border-emerald-100">
        <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Накопления</div>
        <div className="flex justify-between items-center mb-1 sm:mb-1.5 md:mb-2">
          <div className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">₽850,000</div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>
        <div className="text-[10px] sm:text-xs text-emerald-600 font-medium">₽150,000 до цели</div>
      </div>

      {/* Bitcoin */}
      <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 border border-gray-200">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <Bitcoin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-orange-500" />
          <span className="text-xs sm:text-sm text-gray-600">Биткоин</span>
        </div>
        <div className="text-gray-900 font-bold text-base sm:text-lg md:text-xl">₽605</div>
        <div className="text-[10px] sm:text-xs text-green-600">+0.188 сегодня</div>
      </div>
    </div>
  );
};
