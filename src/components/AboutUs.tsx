import { Users, Lightbulb, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="quem-somos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Quem Somos
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              A E5 Inovação nasceu dentro de uma organização, a partir da necessidade real de criar processos mais eficientes e inteligentes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos especialistas em desenvolvimento de <span className="text-primary font-semibold">Inteligência Artificial</span>, 
              <span className="text-primary font-semibold"> automações</span> e <span className="text-primary font-semibold">sistemas</span> para empresas 
              que buscam transformar sua produtividade e resultados.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Equipe Especializada</h4>
                </div>
              </div>
              <p className="text-muted-foreground">
                Especialistas em IA, machine learning e automação de processos empresariais
              </p>
            </div>

            <div className="bg-surface p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Inovação Constante</h4>
                </div>
              </div>
              <p className="text-muted-foreground">
                Tecnologias de ponta adaptadas às necessidades específicas de cada cliente
              </p>
            </div>

            <div className="bg-surface p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Resultados Comprovados</h4>
                </div>
              </div>
              <p className="text-muted-foreground">
                Transformação digital efetiva com ROI mensurável e impacto real nos negócios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}