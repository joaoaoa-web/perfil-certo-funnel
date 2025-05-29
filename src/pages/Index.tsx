
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Trophy, Zap, Phone, MapPin } from 'lucide-react';
import QuizContainer from '@/components/QuizContainer';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <QuizContainer />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-3 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-3xl font-bold">Perfil Certo</h1>
          <p className="text-xs md:text-sm opacity-90 mt-1">O primeiro sistema de IA qualificado inteligente para o MCMV em Natal/RN!</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-2" />
              <span className="text-lg md:text-xl font-bold text-blue-600">NATAL/RN</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-3 md:mb-4">
              Corretor de Imóveis
            </h2>
            <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-green-600 mb-4 md:mb-6">
              Receba Leads Quentes do MCMV!
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-yellow-600 mb-6 md:mb-8 font-semibold px-2">
              Responda 9 perguntas e veja o caminho que o seu lead vai fazer!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-2">
            <Card className="border-green-200 bg-white shadow-lg">
              <CardContent className="p-4 md:p-6 text-center">
                <Trophy className="h-10 w-10 md:h-12 md:w-12 text-green-600 mx-auto mb-3 md:mb-4" />
                <h4 className="font-bold text-base md:text-lg mb-2 text-green-600">Sistema Inteligente</h4>
                <p className="text-sm md:text-base text-gray-600">IA qualificada especialmente para o mercado MCMV de Natal</p>
              </CardContent>
            </Card>
            
            <Card className="border-yellow-200 bg-white shadow-lg">
              <CardContent className="p-4 md:p-6 text-center">
                <Zap className="h-10 w-10 md:h-12 md:w-12 text-yellow-600 mx-auto mb-3 md:mb-4" />
                <h4 className="font-bold text-base md:text-lg mb-2 text-yellow-600">Leads Quentes</h4>
                <p className="text-sm md:text-base text-gray-600">Receba apenas clientes qualificados e prontos para comprar</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-white shadow-lg">
              <CardContent className="p-4 md:p-6 text-center">
                <Star className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mx-auto mb-3 md:mb-4" />
                <h4 className="font-bold text-base md:text-lg mb-2 text-blue-600">Funil Personalizado</h4>
                <p className="text-sm md:text-base text-gray-600">Adaptado especificamente para Natal e região metropolitana</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 md:space-y-4 px-4">
            <Button 
              onClick={() => setShowQuiz(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-lg text-lg md:text-xl shadow-lg w-full md:w-auto"
            >
              🎯 Quero fazer o teste agora!
            </Button>
            <p className="text-xs md:text-sm text-gray-500">
              ⚡ Teste gratuito • 📊 Resultado instantâneo • 🔒 100% seguro
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-600 px-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
              <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
            </div>
            <span className="font-semibold text-sm md:text-base">+200 corretores aprovados em Natal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
