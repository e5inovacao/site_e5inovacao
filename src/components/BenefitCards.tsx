import { DollarSign, Clock, TrendingUp } from 'lucide-react';

export default function BenefitCards() {
  const benefits = [
    {
      icon: DollarSign,
      percentage: '30%',
      text: 'há menos CUSTO',
      description: 'Reduza significativamente os custos operacionais com automação inteligente',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: Clock,
      percentage: '40%',
      text: 'há menos TEMPO',
      description: 'Acelere seus processos e ganhe mais tempo para focar no que importa',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    },
    {
      icon: TrendingUp,
      percentage: '30%',
      text: 'de ganho',
      description: 'Aumente sua produtividade e resultados com soluções personalizadas',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-700'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
            Resultados que <span className="font-medium text-gray-800">Transformam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Veja como nossas soluções de IA podem revolucionar sua empresa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="card-minimal p-10 text-center"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 ${benefit.bgColor} rounded-2xl mb-8`}>
                  <IconComponent className={`w-10 h-10 ${benefit.iconColor}`} />
                </div>

                {/* Percentage */}
                <div className="mb-6">
                  <span className="text-5xl font-light text-gray-900">
                    {benefit.percentage}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {benefit.text}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() => {
              const phoneNumber = '552731991336';
              const message = 'Olá! Quero esses resultados na minha empresa. Gostaria de saber mais sobre os serviços da E5 Inovação.';
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="btn-primary px-10 py-4 text-base"
          >
            Quero esses resultados na minha empresa
          </button>
        </div>
      </div>
    </section>
  );
}