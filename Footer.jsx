import { Phone, Mail, MapPin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Sincofarma/SP</h3>
              <p className="text-gray-300 leading-relaxed">
                Representante Oficial Patronal das Farmácias e Drogarias no estado de São Paulo
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A única instituição patronal que representa farmácias e drogarias de 
              praticamente todo o estado, nas negociações salariais e convenções coletivas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-300">(11) 3224-0966</div>
                  <div className="text-sm text-gray-300">(11) 94387-2305</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a 
                  href="https://www.sincofarmasp.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  www.sincofarmasp.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Endereço</h4>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
              <div className="text-sm text-gray-300 leading-relaxed">
                Rua Santa Isabel, 160<br />
                6° andar - Vila Buarque<br />
                São Paulo - SP<br />
                CEP 01221-010
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Sincofarma/SP. Todos os direitos reservados.
            </div>
            <div className="text-sm text-gray-400">
              Calculadora de Contribuições - Exercício 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
