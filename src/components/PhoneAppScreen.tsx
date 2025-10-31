import { CreditCard, Bitcoin, TrendingUp } from 'lucide-react';

export const PhoneAppScreen = () => {
  return (
    <div className="w-full h-full bg-white p-6 pt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-900 font-bold text-xl">FinX</h3>
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
          <CreditCard className="w-4 h-4 text-emerald-600" />
        </div>
      </div>

      {/* Balance */}
      <div className="mb-6">
        <div className="text-gray-600 text-sm mb-1">Баланс</div>
        <div className="text-gray-900 font-bold text-4xl mb-2">₽2,847,500</div>
        <div className="flex gap-2 text-xs text-gray-500">
          <span>Счёт: 0000</span>
          <span>БИК: 0000</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-emerald-50 text-emerald-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-emerald-100 transition-colors">
          Пополнить
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
          Вывести
        </button>
      </div>

      {/* Paychecks indicator */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-sm text-gray-600">Зарплата</span>
      </div>

      {/* Save & Invest */}
      <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl p-4 mb-4 border border-emerald-100">
        <div className="text-sm text-gray-600 mb-1">Накопления</div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-900 font-bold text-2xl">₽850,000</div>
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="text-xs text-emerald-600 font-medium">₽150,000 до цели</div>
      </div>

      {/* Bitcoin */}
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <Bitcoin className="w-4 h-4 text-orange-500" />
          <span className="text-sm text-gray-600">Биткоин</span>
        </div>
        <div className="text-gray-900 font-bold text-xl">₽605</div>
        <div className="text-xs text-green-600">+0.188 сегодня</div>
      </div>
    </div>
  );
};
