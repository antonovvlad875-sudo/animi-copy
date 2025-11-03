import { Shield, Lock, Server, UserCog } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const securityFeatures = [
    {
      icon: Lock,
      title: "Шифрование данных",
      description: "Мы придерживаемся стандартов PCI DSS для провайдеров услуг.",
    },
    {
      icon: Shield,
      title: "Безопасность веб-приложений",
      description: "Мы придерживаемся отраслевых стандартов защищенного кодирования.",
    },
    {
      icon: Server,
      title: "Физическая и сетевая безопасность",
      description: "Данные хранятся в специализированной системе под круглосуточной защитой.",
    },
    {
      icon: UserCog,
      title: "Управление доступом по ролям",
      description: "Предоставляйте пользователям только те права доступа, которые необходимы для выполнения их профессиональных задач, чтобы снизить риски и убедиться в соблюдении политик компании.",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background" />
      
      {/* Animated glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 sm:mb-6">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="text-xs sm:text-sm font-medium text-emerald-300">Безопасность превыше всего</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Высокие стандарты безопасности
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Мы серьезно относимся к безопасности. Строгие проверки, защищенное хранение данных, контроль сотрудников и соблюдение всех нормативов гарантирует безопасность, стабильность и надежность нашей платформы. Мы всегда стремимся к внедрению новых систем оценки технологий, процессов и рисков и независимому тестированию, чтобы постоянно совершенствоваться.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-lime-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 inline-flex p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
