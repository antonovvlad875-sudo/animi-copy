import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { ConstellationCanvas } from '@/components/ConstellationCanvas';
import { Briefcase, Shield, Settings, Headphones, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-void via-cosmic-deep to-cosmic-void text-white relative overflow-hidden">
      <ConstellationCanvas />
      <Header />
      
      <main className="relative z-10 pt-24 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-cyan via-brand-emerald to-brand-cyan bg-clip-text text-transparent leading-tight">
              Поддержка и интеграция <span className="text-brand-emerald">FinX</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-emerald/30 border border-brand-cyan/40 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-brand-cyan" />
              </div>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl">
                Команда профессионалов, создающая будущее процессинга
              </p>
            </div>
          </div>

          {/* Professional Team Section */}
          <div className="space-y-8 mb-12">
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-cyan/20 to-card/50 border border-brand-cyan/40 rounded-2xl p-8 sm:p-10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Платформа <span className="text-brand-emerald font-semibold">FinX</span> разработана командой ведущих инженеров, архитекторов и финтех-экспертов, стоящих за крупнейшими решениями на рынке онлайн-платежей.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Наша цель — создать систему, которая объединяет высокую скорость, безопасность и гибкость, сохраняя простоту подключения для каждого партнёра.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Каждый элемент инфраструктуры <span className="text-brand-emerald font-semibold">FinX</span> — результат тысяч часов разработки, тестирования и анализа. Мы продумали всё до мелочей, чтобы вы могли сосредоточиться на своём бизнесе, а не на технических сложностях.
              </p>
            </div>

            {/* Security Section */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-emerald/20 to-card/50 border border-brand-emerald/40 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-emerald/30 to-brand-cyan/30 border border-brand-emerald/40 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-emerald" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald">
                  Безопасность данных — приоритет №1
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Мы понимаем, насколько важна защита информации в сфере онлайн-платежей.
                Поэтому все данные клиентов и партнёров в <span className="text-brand-emerald font-semibold">FinX</span> защищены на уровне банковских стандартов.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-emerald/20">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Используем <span className="text-brand-emerald font-semibold">AES-256 шифрование</span> — один из самых надёжных алгоритмов защиты данных в мире.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-emerald/20">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Передача данных осуществляется через защищённые <span className="text-brand-emerald font-semibold">SSL/TLS-каналы</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-emerald/20">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Доступ к информации строго контролируется и разделён по уровням.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-emerald/20">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Все операции проходят многоуровневую систему проверки и мониторинга.
                  </p>
                </div>
              </div>

              <p className="text-lg text-brand-emerald font-semibold mt-6 text-center">
                Ваши данные и средства под защитой — всегда.
              </p>
            </div>

            {/* Integration Section */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-cyan/20 to-card/50 border border-brand-cyan/40 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-emerald/30 border border-brand-cyan/40 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-brand-cyan" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-cyan">
                  Лёгкая интеграция и полная техническая поддержка
                </h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Для подключения вашего проекта или маркетплейса к <span className="text-brand-emerald font-semibold">FinX</span> мы подготовили подробную техническую документацию, API-ключи и примеры интеграции.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Наша команда программистов и инженеров готова:
              </p>

              <div className="grid gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-cyan/20">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Помочь на каждом этапе внедрения
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-cyan/20">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Предоставить весь необходимый код и инструкции
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-cyan/20">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Подключить систему под ваши требования
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-cosmic-void/30 border border-brand-cyan/20">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Обеспечить круглосуточную поддержку <span className="text-brand-cyan font-semibold">24/7</span>
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Мы работаем так, чтобы процесс интеграции прошёл максимально быстро, безопасно и без ошибок.
              </p>
            </div>

            {/* Final Section */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-emerald/20 to-card/50 border border-brand-emerald/40 rounded-2xl p-8 sm:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-emerald/30 to-brand-cyan/30 border border-brand-emerald/40 flex items-center justify-center">
                  <Headphones className="w-7 h-7 text-brand-emerald" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald">
                  FinX — всегда рядом с вашим бизнесом
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Мы ценим каждого партнёра и гарантируем, что с <span className="text-brand-emerald font-semibold">FinX</span> вы получите не просто процессинг, а надёжного технологического союзника.
              </p>
              <p className="text-xl text-brand-cyan font-semibold">
                Вместе мы создаём финансовую экосистему нового поколения — умную, гибкую и защищённую.
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="flex justify-center mt-8">
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-brand-cyan to-brand-emerald hover:from-brand-cyan/80 hover:to-brand-emerald/80 text-white font-semibold shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Назад на главную
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
