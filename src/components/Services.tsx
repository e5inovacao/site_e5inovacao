import { Phone, Calendar, HeadphonesIcon, Stethoscope, Smile, MessageCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Phone,
      title: 'SDR Pré-Vendas',
      description: 'Automatize a prospecção e qualificação de leads com IA avançada',
      features: ['Qualificação automática', 'Follow-up inteligente', 'Relatórios detalhados'],
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: Calendar,
      title: 'SDR Agendamento',
      description: 'Otimize o agendamento de reuniões e compromissos automaticamente',
      features: ['Agenda inteligente', 'Confirmações automáticas', 'Integração com CRM'],
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: HeadphonesIcon,
      title: 'SDR Suporte',
      description: 'Forneça suporte ao cliente 24/7 com assistentes de IA especializados',
      features: ['Atendimento 24/7', 'Respostas personalizadas', 'Escalação inteligente'],
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: Stethoscope,
      title: 'Consultório Médico',
      description: 'Automatize processos administrativos e melhore o atendimento médico',
      features: ['Agendamento automático', 'Lembretes de consulta', 'Gestão de prontuários'],
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: Smile,
      title: 'Consultório Odontológico',
      description: 'Soluções específicas para clínicas odontológicas e gestão de pacientes',
      features: ['Controle de tratamentos', 'Agendamento especializado', 'Comunicação com pacientes'],
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: MessageCircle,
      title: 'Fale com um Especialista',
      description: 'Consultoria personalizada para suas necessidades específicas',
      features: ['Análise personalizada', 'Solução sob medida', 'Suporte especializado'],
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    }
  ];

  const openWhatsApp = (serviceTitle: string) => {
    const phoneNumber = '552731991336';
    const message = `Olá! Gostaria de saber mais sobre o serviço: ${serviceTitle}. Podem me ajudar?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsAppCustom = () => {
    const phoneNumber = '552731991336';
    const message = 'Olá! Gostaria de solicitar uma solução personalizada para minha empresa. Podem me ajudar?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicos" className="section-padding bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Soluções de automação e IA personalizadas para diferentes segmentos e necessidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isSpecialist = service.title === 'Fale com um Especialista';
            
            return (
              <div
                key={index}
                className={`card-minimal p-8 ${
                  isSpecialist ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-xl mb-6`}>
                  <IconComponent className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => openWhatsApp(service.title)}
                  className="w-full btn-secondary py-3 text-sm font-medium"
                >
                  {isSpecialist ? 'Falar com Especialista' : 'Saiba Mais'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="card-minimal p-10">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Não encontrou o que procura?
            </h3>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed">
              Desenvolvemos soluções personalizadas para atender às necessidades específicas do seu negócio.
            </p>
            <button
              onClick={openWhatsAppCustom}
              className="btn-primary px-8 py-4 text-base"
            >
              Solicitar Solução Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}