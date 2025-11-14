import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { CheckCircle, Clock, Shield, Monitor, Smartphone, Tablet, Code, Palette, Rocket, Users, Star, ArrowRight, Send } from 'lucide-react';

export default function SalesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    websiteType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Abrir WhatsApp com os dados do formulário
      const phoneNumber = '5527998344720';
      const message = `Olá! Gostaria de um orçamento para criação de site/landing page.\n\n` +
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Empresa: ${formData.company}\n` +
        `Tipo de site: ${formData.websiteType}\n` +
        `Orçamento: ${formData.budget}\n` +
        `Mensagem: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setSubmitMessage('Redirecionando para WhatsApp...');
      setTimeout(() => {
        setSubmitMessage('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          websiteType: '',
          budget: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      setSubmitMessage('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Criação Rápida',
      description: 'Sites profissionais entregues em tempo record com processo otimizado'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Garantia de Qualidade',
      description: '100% profissional com testes rigorosos e padrões internacionais'
    },
    {
      icon: <Monitor className="w-8 h-8 text-orange-500" />,
      title: 'Single Sign-On (SSO)',
      description: 'Integração com sistemas de autenticação para máxima segurança'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Design Responsivo',
      description: 'Perfeito em todos os dispositivos: desktop, tablet e mobile'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Análise e Planejamento',
      description: 'Entendemos suas necessidades e objetivos para criar a estratégia perfeita'
    },
    {
      step: '02',
      title: 'Design e Prototipagem',
      description: 'Desenvolvemos layouts modernos e intuitivos que convertem visitantes'
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Codificação com tecnologias modernas e otimização para performance'
    },
    {
      step: '04',
      title: 'Testes e Lançamento',
      description: 'Testes rigorosos e deploy com monitoramento contínuo'
    }
  ];

  const websiteExamples = [
    {
      title: 'E-commerce Moderno',
      description: 'Loja virtual completa com carrinho e pagamento integrado',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20design%20with%20clean%20layout%20product%20grid%20shopping%20cart%20professional%20look&image_size=landscape_16_9',
      features: ['Checkout otimizado', 'Gestão de estoque', 'Pagamento seguro']
    },
    {
      title: 'Landing Page Corporativa',
      description: 'Página de conversão otimizada para campanhas de marketing',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=corporate%20landing%20page%20design%20with%20hero%20section%20call-to-action%20buttons%20professional%20business%20look%20clean%20modern',
      features: ['Alta conversão', 'Formulários inteligentes', 'Analytics integrado']
    },
    {
      title: 'Portal Institucional',
      description: 'Site institucional completo com área de clientes',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=institutional%20website%20design%20with%20professional%20layout%20client%20area%20login%20section%20modern%20corporate%20style',
      features: ['Área de clientes', 'SSO integrado', 'Gestão de conteúdo']
    }
  ];

  const differentials = [
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as últimas tecnologias do mercado para garantir performance e segurança'
    },
    {
      icon: <Palette className="w-6 h-6 text-orange-500" />,
      title: 'Design Exclusivo',
      description: 'Cada projeto é único e desenvolvido sob medida para sua marca'
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: 'Entrega Rápida',
      description: 'Processo otimizado que garante entrega em tempo record sem perder qualidade'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Suporte Personalizado',
      description: 'Equipe dedicada para suporte técnico e atualizações contínuas'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme sua Presença Digital com
              <span className="text-orange-500"> Sites Profissionais</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Criamos sites e landing pages que convertem visitantes em clientes. 
              Design moderno, performance otimizada e resultados comprovados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4"
              >
                Solicitar Orçamento
              </button>
              <button 
                onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4"
              >
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossos sites?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entregamos soluções completas que impulsionam seu negócio online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-minimal text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodologia comprovada para entregar resultados excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Examples Section */}
      <section id="examples" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exemplos de Sites Criados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos projetos que já transformamos em sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteExamples.map((example, index) => (
              <div key={index} className="card-minimal">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {example.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {example.description}
                </p>
                <div className="space-y-2">
                  {example.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos torna a melhor escolha para seu projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="card-minimal flex items-start">
                <div className="mr-4 mt-1">
                  {differential.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {differential.title}
                  </h3>
                  <p className="text-gray-600">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua presença digital?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato hoje mesmo e receba um orçamento personalizado para seu projeto
            </p>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Solicite seu Orçamento
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário e entraremos em contato em até 24 horas
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="card-minimal">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="websiteType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de site *
                  </label>
                  <select
                    id="websiteType"
                    name="websiteType"
                    required
                    value={formData.websiteType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="site-institucional">Site Institucional</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="blog">Blog</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Orçamento estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="ate-5k">Até R$ 5.000</option>
                    <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                    <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                    <option value="acima-20k">Acima de R$ 20.000</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva seu projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre o que você precisa..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>
              
              {submitMessage && (
                <div className={`mb-4 p-4 rounded-xl ${submitMessage.includes('Erro') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {submitMessage}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Solicitação
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}