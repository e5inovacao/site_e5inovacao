import { ArrowRight, CheckCircle, Users, TrendingUp, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '552731991336';
    const message = 'Olá! Gostaria de conhecer as soluções da E5 Inovação em 1 minuto.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsAppDemo = () => {
    const phoneNumber = '552731991336';
    const message = 'Olá! Gostaria de agendar uma demonstração gratuita das soluções da E5 Inovação.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-white flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center section-padding pt-32">
        <div className="container-custom text-center">
          <div className="space-y-12">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
              <span className="font-medium">Desenvolva os processos</span>
              <br />
              <span className="font-medium">da sua empresa e </span>
              <span className="font-semibold text-gray-800">tenha mais</span>
              <br />
              <span className="font-semibold text-gray-800">resultados</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              94% dos gestores acreditam que a empresa poderia crescer mais se tivesse
              <br />
              uma equipe mais qualificada. Evolua seus profissionais com a E5 INOVAÇÃO.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <button
                onClick={openWhatsAppDemo}
                className="btn-primary px-8 py-4 text-base"
              >
                Demonstração Grátis
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-secondary px-8 py-4 text-base"
              >
                Conheça em 1min
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Benefits Section */}
      <div className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Com a E5 INOVAÇÃO, sua empresa será capaz de:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Capacitar Equipes
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Desenvolva as habilidades dos seus colaboradores com treinamentos personalizados e eficazes.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Automatizar Processos
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Implemente soluções de IA que otimizam operações e reduzem custos operacionais.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Maximizar Resultados
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Alcance metas mais ambiciosas com estratégias baseadas em dados e inteligência artificial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}