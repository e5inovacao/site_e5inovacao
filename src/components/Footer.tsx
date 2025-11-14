import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5527998344720';
    const message = 'Olá! Gostaria de saber mais sobre os serviços da E5 Inovação.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="mb-6">
                  <img 
                    src="/logo_botbar.png" 
                    alt="E5 Inovação" 
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md text-base">
                  Transformamos empresas através de soluções de automação e IA, proporcionando eficiência 5.0 com processos fluidos e resultados mensuráveis.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-8 text-white">Links Rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('quem-somos')}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={openWhatsApp}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    WhatsApp
                  </button>
                </li>

              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-8 text-white">Contato</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">contato@e5inovacao.com</p>
                    <p className="text-gray-400 text-sm">Resposta em até 24h</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">(27) 99834-4720</p>
                    <p className="text-gray-400 text-sm">Seg-Sex, 9h às 18h</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Serra, ES</p>
                    <p className="text-gray-400 text-sm">Atendimento nacional</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="border-t border-gray-800 py-16">
          <h3 className="text-xl font-semibold mb-12 text-center text-white">Nossos Serviços</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'SDR Pré-Vendas',
              'SDR Agendamento', 
              'SDR Suporte',
              'Consultório Médico',
              'Consultório Odontológico',
              'Consultoria Especializada'
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 cursor-pointer border border-gray-700"
                onClick={() => scrollToSection('servicos')}
              >
                <p className="text-sm text-gray-300 hover:text-primary transition-colors duration-200">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} E5 Inovação. Todos os direitos reservados.
            </div>
            <div className="flex gap-8 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors duration-200">Política de Privacidade</a>
              <a href="/terms-of-use" className="text-gray-400 hover:text-primary transition-colors duration-200">Termos de Uso</a>

            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-xl shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 z-40"
        aria-label="Voltar ao topo"
      >
        <svg className="w-5 h-5" fill="none" stroke="#ff6b47" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}