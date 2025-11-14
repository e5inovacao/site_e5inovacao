import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={handleGoBack}
              className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar
            </button>
            <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
            <p className="text-gray-300 text-lg">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Informações que Coletamos</h2>
              <p className="text-gray-300 leading-relaxed">
                A E5 Inovação coleta informações que você nos fornece diretamente, como nome, e-mail, 
                telefone e outras informações de contato quando você utiliza nossos serviços ou entra 
                em contato conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Como Utilizamos suas Informações</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos suas informações para fornecer nossos serviços, responder às suas solicitações, 
                melhorar nossa plataforma e comunicar sobre nossos produtos e serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Compartilhamento de Informações</h2>
              <p className="text-gray-300 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Segurança</h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco 
                através do telefone (27) 99834-4720 ou pelo nosso formulário de contato.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;