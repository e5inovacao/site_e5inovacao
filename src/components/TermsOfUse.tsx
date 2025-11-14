import React from 'react';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">Termos de Uso</h1>
            <p className="text-gray-300 text-lg">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Ao utilizar os serviços da E5 Inovação, você concorda em cumprir e estar vinculado 
                a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Descrição dos Serviços</h2>
              <p className="text-gray-300 leading-relaxed">
                A E5 Inovação oferece soluções tecnológicas inovadoras, incluindo desenvolvimento 
                de software, consultoria em tecnologia e serviços de transformação digital para empresas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Responsabilidades do Usuário</h2>
              <p className="text-gray-300 leading-relaxed">
                Você é responsável por fornecer informações precisas e atualizadas, manter a 
                confidencialidade de suas credenciais de acesso e utilizar nossos serviços de 
                forma legal e ética.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Propriedade Intelectual</h2>
              <p className="text-gray-300 leading-relaxed">
                Todos os direitos de propriedade intelectual relacionados aos nossos serviços 
                pertencem à E5 Inovação ou aos seus licenciadores. Você não pode copiar, modificar 
                ou distribuir nosso conteúdo sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed">
                A E5 Inovação não será responsável por danos indiretos, incidentais ou consequenciais 
                decorrentes do uso de nossos serviços, exceto quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato conosco através do 
                telefone (27) 99834-4720 ou pelo nosso formulário de contato.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;