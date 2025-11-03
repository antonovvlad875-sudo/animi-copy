import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { ArrowLeft, UserCog, TrendingUp, Clock, Award, Shield, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Operator = () => {
  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-0">
        <Header />
        
        {/* Back button */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <Link to="/">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад на главную
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-400/40 mb-4">
                <UserCog className="w-10 h-10 text-cyan-400" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-cyan-400">Условия для операторов</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Присоединяйтесь к команде FinX и получайте стабильный доход с выгодными условиями сотрудничества
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Benefit 1 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Высокие комиссии</h3>
                  <p className="text-gray-400">
                    Получайте до 0.8% с каждой транзакции. Чем больше объем, тем выше процент
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Быстрые выплаты</h3>
                  <p className="text-gray-400">
                    Ежедневные автоматические выплаты на ваш счет без задержек
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Бонусы за объемы</h3>
                  <p className="text-gray-400">
                    Специальные премии при достижении плановых показателей
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Полная поддержка</h3>
                  <p className="text-gray-400">
                    24/7 техническая поддержка и менеджер для решения любых вопросов
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Wallet className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Без холдов</h3>
                  <p className="text-gray-400">
                    Работа без замораживания средств. Все транзакции обрабатываются моментально
                  </p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Рост доходов</h3>
                  <p className="text-gray-400">
                    Масштабируйте свой бизнес и увеличивайте заработок вместе с FinX
                  </p>
                </div>
              </div>
            </div>

            {/* Commission Table */}
            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border border-cyan-500/30 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6 text-center">
                Тарифная сетка
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-cyan-500/30">
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Месячный оборот</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Комиссия</th>
                      <th className="text-left py-4 px-4 text-cyan-400 font-semibold">Бонус</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-cyan-500/20 hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300">до 5 млн ₽</td>
                      <td className="py-4 px-4 text-gray-300">0.5%</td>
                      <td className="py-4 px-4 text-gray-300">—</td>
                    </tr>
                    <tr className="border-b border-cyan-500/20 hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300">5-10 млн ₽</td>
                      <td className="py-4 px-4 text-gray-300">0.6%</td>
                      <td className="py-4 px-4 text-emerald-400">+10,000 ₽</td>
                    </tr>
                    <tr className="border-b border-cyan-500/20 hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300">10-20 млн ₽</td>
                      <td className="py-4 px-4 text-gray-300">0.7%</td>
                      <td className="py-4 px-4 text-emerald-400">+25,000 ₽</td>
                    </tr>
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300">от 20 млн ₽</td>
                      <td className="py-4 px-4 text-gray-300">0.8%</td>
                      <td className="py-4 px-4 text-emerald-400">+50,000 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/40 rounded-2xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
                  Готовы начать работу?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Свяжитесь с нами для получения подробной информации и начала сотрудничества
                </p>
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Operator;
