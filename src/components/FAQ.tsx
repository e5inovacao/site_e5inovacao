import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'O que é a E5 Inovação e como vocês podem ajudar minha empresa?',
      answer: 'A E5 Inovação é uma empresa especializada em soluções de automação e assistentes de IA. Ajudamos empresas a otimizar processos, reduzir custos operacionais e aumentar a eficiência através de tecnologias inteligentes personalizadas para cada negócio.'
    },
    {
      question: 'Quais tipos de empresas podem se beneficiar dos serviços da E5?',
      answer: 'Atendemos empresas de diversos segmentos, desde startups até grandes corporações. Nossos serviços são especialmente eficazes para empresas que buscam automatizar processos de vendas, atendimento ao cliente, agendamentos e gestão administrativa em consultórios médicos e odontológicos.'
    },
    {
      question: 'Como funciona o processo de implementação das soluções?',
      answer: 'Nosso processo é dividido em etapas: 1) Análise detalhada das necessidades da sua empresa, 2) Desenvolvimento da solução personalizada, 3) Testes e ajustes, 4) Implementação gradual, 5) Treinamento da equipe e 6) Suporte contínuo. Todo o processo é acompanhado por nossa equipe especializada.'
    },
    {
      question: 'Quanto tempo leva para ver resultados após a implementação?',
      answer: 'Os primeiros resultados podem ser observados já nas primeiras semanas após a implementação. Resultados mais significativos, como a redução de 30% nos custos e 40% no tempo de processos, são tipicamente alcançados entre 2 a 3 meses, dependendo da complexidade da solução.'
    },
    {
      question: 'Vocês oferecem suporte após a implementação?',
      answer: 'Sim! Oferecemos suporte contínuo para garantir que suas soluções funcionem perfeitamente. Isso inclui monitoramento, atualizações, treinamentos adicionais e ajustes conforme sua empresa evolui. Nosso objetivo é ser seu parceiro de longo prazo em inovação.'
    },
    {
      question: 'Como posso saber qual solução é ideal para minha empresa?',
      answer: 'Oferecemos uma consultoria gratuita onde analisamos seus processos atuais e identificamos oportunidades de melhoria. Nossa equipe de especialistas desenvolve uma proposta personalizada com base nas necessidades específicas do seu negócio. Entre em contato conosco para agendar sua análise.'
    },
    {
      question: 'As soluções são seguras e confiáveis?',
      answer: 'Absolutamente. Utilizamos as melhores práticas de segurança da informação e tecnologias confiáveis. Todas nossas soluções passam por rigorosos testes de segurança e performance. Além disso, seguimos protocolos de proteção de dados e privacidade para garantir a segurança das informações da sua empresa.'
    },
    {
      question: 'Qual é o investimento necessário para implementar as soluções?',
      answer: 'O investimento varia conforme a complexidade e escopo da solução. Oferecemos diferentes modelos de contratação, incluindo opções de pagamento flexíveis. O importante é que nossos clientes tipicamente recuperam o investimento em poucos meses através da redução de custos e aumento de eficiência. Solicite um orçamento personalizado.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Tire suas dúvidas sobre nossas soluções e serviços
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className="card-minimal overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-surface transition-colors duration-200 focus:outline-none focus:bg-surface"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-primary transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-border pt-6">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-minimal p-10">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-text-secondary mb-8">
              Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções da E5 Inovação."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}