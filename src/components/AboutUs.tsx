import { CheckCircle, Users, Lightbulb, Award } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes em IA e automação'
    },
    {
      icon: Lightbulb,
      title: 'Soluções Inovadoras',
      description: 'Tecnologia de ponta adaptada às suas necessidades'
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Histórico de sucesso em diversos segmentos'
    }
  ];

  const values = [
    'Processos fluidos e simples',
    'Eficiência operacional máxima',
    'Inovação constante',
    'Foco em resultados mensuráveis'
  ];

  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Section Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
                Bem-vindo à <span className="text-primary">E5 Inovação!</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Somos uma empresa que nasce com a paixão por eficiência, acreditamos em processos fluidos e simples que transformam a maneira como as empresas operam.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-surface p-8 rounded-xl border-l-4 border-primary">
              <p className="text-base text-text-secondary leading-relaxed">
                Nossa missão é revolucionar a eficiência empresarial através de soluções de IA e automação personalizadas, proporcionando resultados mensuráveis e sustentáveis.
              </p>
            </div>

            {/* Values List */}
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Nossos Valores</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text-secondary font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="space-y-8">
            {/* Main Visual Card */}
            <div className="bg-primary text-white rounded-xl p-10">
              <h3 className="text-2xl font-semibold mb-6">Eficiência 5.0</h3>
              <p className="text-blue-100 leading-relaxed">
                Combinamos inteligência artificial, automação avançada e expertise humana para criar soluções que redefinem a produtividade empresarial.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-surface p-6 rounded-xl border border-border"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="font-semibold text-text-primary">{feature.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}