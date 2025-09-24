import { Button } from '@/components/ui/button.jsx'
import { ArrowDown, Shield, Users, Award } from 'lucide-react'

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-blue-800/20 to-blue-900/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-400/20">
                <Shield className="w-4 h-4 mr-2" />
                Representante Oficial Patronal
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Seja um Associado
                <span className="block text-yellow-400">Sincofarma/SP</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                A única instituição patronal que representa farmácias e drogarias 
                no estado de São Paulo, oferecendo um mundo de benefícios para 
                pessoas físicas e jurídicas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Calcular Contribuições
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <a 
                href="https://bit.ly/contrib-wpp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:\'size-4\' shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-600/30">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">10k+</div>
                <div className="text-sm text-blue-200">Inscritos em Cursos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">3k+</div>
                <div className="text-sm text-blue-200">Atendimentos/Ano</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400">700+</div>
                <div className="text-sm text-blue-200">CNPJs em 2022</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Representatividade</h3>
                    <p className="text-blue-200">Única instituição patronal do setor</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Consultoria Jurídica</h3>
                    <p className="text-blue-200">Orientação especializada</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cursos Certificados</h3>
                    <p className="text-blue-200">Chancela universitária</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
