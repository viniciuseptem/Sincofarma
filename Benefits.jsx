import { 
  Scale, 
  FileText, 
  Stethoscope, 
  Award, 
  GraduationCap, 
  Info,
  Heart,
  Calculator,
  Hotel,
  UserCheck
} from 'lucide-react'

export default function Benefits() {
  const services = [
    {
      icon: Scale,
      title: "Consultoria Jurídica",
      description: "Orientações, consultorias e defesas nas áreas trabalhista, sanitária e administrativa. Ações judiciais individuais e coletivas para toda a categoria econômica."
    },
    {
      icon: FileText,
      title: "Assuntos Regulatórios",
      description: "Regularização, orientações e execução de serviços burocráticos com ANVISA, SNGPC, Protocolos da Covisa, Polícia Civil e Federal, Alvará de Polícia, Licenças e AVCB."
    },
    {
      icon: Stethoscope,
      title: "Medicina do Trabalho",
      description: "PCMSO e PPRA com eSocial. Laudos PCMSO, PGR, LTCAT, PCMAT, CIPA e perícias médicas, além de todos os exames clínicos e complementares."
    },
    {
      icon: Award,
      title: "Certificação Digital",
      description: "Em parceria com a FENACONCD, oferecemos certificação digital para facilitar seus processos burocráticos e digitais."
    },
    {
      icon: GraduationCap,
      title: "Cursos de Capacitação",
      description: "Cursos com chancela universitária, referência no setor e reconhecidos pelo MEC. Desenvolvimento profissional contínuo para sua equipe."
    },
    {
      icon: Info,
      title: "Placas Informativas",
      description: "Disponibilizamos gratuitamente as placas exigidas por lei para exposição em seu estabelecimento, garantindo conformidade regulatória."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Convênios Médico e Odontológico",
      description: "Acesso a planos de saúde com condições especiais para associados."
    },
    {
      icon: Calculator,
      title: "Análise Fiscal e Tributária",
      description: "Revisão, planejamento tributário e estratégias de redução fiscal para sua empresa."
    },
    {
      icon: GraduationCap,
      title: "Descontos em Educação",
      description: "Vantagens especiais em escolas, técnicas e universidades para você e sua família."
    },
    {
      icon: Hotel,
      title: "Hotelaria e Viagens",
      description: "Descontos exclusivos em hotéis, pousadas, colônias de férias e agências de viagem."
    },
    {
      icon: UserCheck,
      title: "Associação Pessoa Física",
      description: "Direito ao desconto de associado nos cursos, clube de benefícios, assistência médica e outros serviços."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que se associar ao 
            <span className="text-blue-600"> Sincofarma/SP?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um mundo de benefícios e serviços essenciais para o crescimento 
            e proteção do seu negócio no setor farmacêutico.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Serviços Essenciais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefícios Exclusivos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para fazer parte da nossa comunidade?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Calcule suas contribuições e descubra como é acessível ter todos esses benefícios.
            </p>
            <button 
              onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              Calcular Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
