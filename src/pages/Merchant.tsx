import { ArrowLeft, Store, TrendingUp, Wallet, Shield, Globe, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { ConstellationCanvas } from '@/components/ConstellationCanvas';

export default function Merchant() {
  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      {/* Dark overlay to blur/darken background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-0" />
      <div className="relative z-10">
        <Header />
        
        {/* Back button */}
        <div className="container mx-auto px-4 pt-8">
          <Link to="/">
            <Button variant="ghost" className="text-lime-400 hover:text-lime-300 hover:bg-lime-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-lime-500/10 rounded-full mb-6">
              <Store className="h-8 w-8 text-lime-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">
              Условия для Мерчантов
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Индивидуальные условия сотрудничества для вашего бизнеса
            </p>
            <p className="text-lg text-gray-400">
              Мы предлагаем гибкие решения для любых ниш и масштабов бизнеса - от стартапов до крупных корпораций
            </p>
          </div>

          {/* Main Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-lime-900/20 to-emerald-900/20 border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-lime-400" />
                </div>
                <CardTitle className="text-lime-400">Высокий процент обработки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg font-semibold mb-2">98% успешных транзакций</p>
                <p className="text-gray-400">Максимальная конверсия для вашего бизнеса. Мы обеспечиваем стабильную обработку платежей с минимальным количеством отказов.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-emerald-400">Быстрый вывод средств</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg font-semibold mb-2">На карту или криптокошелек</p>
                <p className="text-gray-400">Получайте свои деньги удобным способом. Поддержка банковских карт и популярных криптовалют для максимального удобства.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-900/20 to-emerald-900/20 border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-lime-400" />
                </div>
                <CardTitle className="text-lime-400">Надежная защита</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg font-semibold mb-2">Безопасность транзакций</p>
                <p className="text-gray-400">Современные технологии шифрования и многоуровневая система безопасности защищают ваши средства и данные клиентов.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-emerald-400">Любые ниши бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg font-semibold mb-2">Работаем со всеми</p>
                <p className="text-gray-400">Гемблинг, маркетплейсы, e-commerce, подписки, цифровые товары - мы готовы обрабатывать платежи для любой сферы деятельности.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-900/20 to-emerald-900/20 border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-lime-400" />
                </div>
                <CardTitle className="text-lime-400">Масштабируемость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg font-semibold mb-2">От малого к большому</p>
                <p className="text-gray-400">Наша инфраструктура подходит как для стартапов, так и для крупного бизнеса. Растите вместе с нами без ограничений.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-emerald-400">Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg font-semibold mb-2">Персональные условия</p>
                <p className="text-gray-400">Каждый бизнес уникален. Мы разработаем индивидуальные условия сотрудничества с учетом специфики вашей деятельности.</p>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-lime-400">
              Тарифы и условия
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Прозрачные и выгодные условия для роста вашего бизнеса
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-lime-900/30 to-emerald-900/30 border-lime-500/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-lime-400">Подключение</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">Единоразовый платеж</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-5xl font-bold text-lime-400 mb-4">
                    15<span className="text-2xl">%</span>
                  </div>
                  <p className="text-gray-300">
                    Комиссия за подключение к нашей платежной системе. Индивидуальные условия для крупных проектов.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border-emerald-500/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-emerald-400">Обработка платежей</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">Надежность и скорость</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-5xl font-bold text-emerald-400 mb-4">
                    98<span className="text-2xl">%</span>
                  </div>
                  <p className="text-gray-300">
                    Успешно обрабатываем 98% всех транзакций. Минимальные отказы, максимальная конверсия для вашей прибыли.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Types */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-lime-400">
              Работаем с различными нишами
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Наш опыт и технологии позволяют обслуживать самые разные типы бизнеса
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Гемблинг', icon: '🎰' },
                { name: 'Маркетплейсы', icon: '🛍️' },
                { name: 'E-commerce', icon: '💼' },
                { name: 'Подписки', icon: '📱' },
                { name: 'Цифровые товары', icon: '💾' },
                { name: 'Стартапы', icon: '🚀' },
                { name: 'Крупный бизнес', icon: '🏢' },
                { name: 'Сервисы', icon: '⚙️' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-lime-900/20 to-emerald-900/20 border border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="text-sm text-gray-300 font-medium">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-lime-900/30 to-emerald-900/30 border-lime-500/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 via-emerald-500/5 to-lime-500/5" />
              <CardHeader className="relative pb-4">
                <CardTitle className="text-3xl md:text-4xl text-lime-400 mb-4">
                  Готовы начать сотрудничество?
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Свяжитесь с нами для получения индивидуального предложения
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-6">
                <p className="text-gray-400">
                  Наша команда проанализирует ваш бизнес и предложит оптимальные условия для максимальной эффективности и прибыльности. Независимо от масштаба и ниши вашего бизнеса, мы найдем лучшее решение.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-black font-semibold">
                    Связаться с нами
                  </Button>
                  <Link to="/">
                    <Button size="lg" variant="outline" className="border-lime-500/50 text-lime-400 hover:bg-lime-500/10">
                      На главную
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
