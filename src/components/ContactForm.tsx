import { MessageCircle, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const whatsappNumber = '552731991336'; // Número do WhatsApp (código do país + DDD + número)
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da E5 Inovação.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="section-padding bg-background-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Entre em <span style={{color: 'var(--color-primary)'}}>Contato</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Pronto para transformar sua empresa? Vamos conversar sobre suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Fale Conosco
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Nossa equipe de especialistas está pronta para analisar suas necessidades e desenvolver a solução perfeita para sua empresa.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="card-minimal">
                <div className="bg-gray-100 p-3 rounded-lg w-fit">
                  <MessageCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                  <p className="text-text-secondary">contato@e5inovacao.com</p>
                </div>
              </div>
              
              <div className="card-minimal">
                <div className="p-3 rounded-lg w-fit" style={{backgroundColor: 'rgba(255, 107, 71, 0.1)'}}>
                  <MessageCircle className="w-6 h-6" style={{color: 'var(--color-primary)'}} />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-text-primary mb-1">WhatsApp</h4>
                  <p className="text-text-secondary">(27) 3199-1336</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="card-minimal" style={{background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))'}}>
              <h4 className="text-xl font-bold mb-4 text-white">Por que escolher a E5?</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white opacity-80" />
                  <span className="text-white">Consultoria gratuita</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white opacity-80" />
                  <span className="text-white">Soluções personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white opacity-80" />
                  <span className="text-white">Suporte contínuo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white opacity-80" />
                  <span className="text-white">Resultados mensuráveis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="card-minimal flex flex-col justify-center items-center text-center">
            <div className="mb-8">
              <div className="p-6 rounded-full mb-6 mx-auto w-fit" style={{backgroundColor: 'rgba(255, 107, 71, 0.1)'}}>
                <MessageCircle className="w-12 h-12" style={{color: 'var(--color-primary)'}} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Fale Conosco no WhatsApp
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Converse diretamente com nossa equipe de especialistas. Resposta rápida e atendimento personalizado.
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3 max-w-sm"
            >
              <MessageCircle className="w-6 h-6" />
              Conversar no WhatsApp
            </button>

            <div className="mt-6 text-sm text-text-secondary">
              <p>Clique no botão acima para iniciar uma conversa</p>
            </div>

            {/* Quick Benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-background-alt p-4 rounded-xl">
                <div className="font-semibold text-sm mb-1" style={{color: 'var(--color-primary)'}}>✓ Resposta Rápida</div>
                <div className="text-text-secondary text-sm">Atendimento em minutos</div>
              </div>
              <div className="bg-background-alt p-4 rounded-xl">
                <div className="font-semibold text-sm mb-1" style={{color: 'var(--color-primary)'}}>✓ Consultoria Gratuita</div>
                <div className="text-text-secondary text-sm">Análise sem compromisso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}