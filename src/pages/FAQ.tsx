import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Что такое процессинг и почему он важен",
      answer: "Процессинг — это система, которая обеспечивает передачу, проверку и подтверждение платежей между покупателем и продавцом. Благодаря этому механизму миллионы интернет-платежей ежедневно проходят быстро, безопасно и практически незаметно для пользователя. Для бизнеса, особенно в сфере e-commerce и услуг онлайн, наличие работающего процессинга — это не просто удобство, а необходимость. Если вы управляете сайтом, где требуется приём пожертвований, оформление подписок или онлайн-оплата товаров, то стабильный сервис приёма платежей станет ключевым инструментом. Особенно, если планируется подключение рекуррентных списаний или автоматических платежей."
    },
    {
      question: "Как работает карточный процессинг: этапы от клиента до продавца",
      answer: "Здесь будет описание этапов карточного процессинга."
    },
    {
      question: "Кто участвует в обработке онлайн-платежей",
      answer: "Здесь будет информация об участниках обработки платежей."
    },
    {
      question: "Процессинговая платформа: зачем она нужна бизнесу",
      answer: "Здесь будет объяснение необходимости процессинговой платформы."
    },
    {
      question: "Виды процессинговых решений",
      answer: "Здесь будет описание различных видов процессинговых решений."
    },
    {
      question: "Преимущества подключения платёжного процессинга",
      answer: "Здесь будут перечислены преимущества подключения процессинга."
    },
    {
      question: "Отличие приёма платежей от процессинга",
      answer: "Здесь будет объяснение различий между приёмом платежей и процессингом."
    },
    {
      question: "Как обеспечивается безопасность операций",
      answer: "Здесь будет информация о мерах безопасности при обработке операций."
    }
  ];

  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-0">
        <Header />
        
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7FFF00] to-[#32CD32]">
                Вопрос-Ответ
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Ответы на часто задаваемые вопросы о процессинге платежей
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-700/50 rounded-xl bg-gray-900/40 backdrop-blur-sm px-6 data-[state=open]:bg-gray-900/60 transition-all"
                >
                  <AccordionTrigger className="text-left text-gray-100 hover:text-emerald-400 py-6 text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 pt-2 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;