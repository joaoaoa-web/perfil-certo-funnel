import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trophy, Star, CheckCircle, Phone, User, MapPin } from 'lucide-react';

interface QuizResultProps {
  score: number;
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  onConfirm: () => void;
}

const QuizResult = ({ score, name, setName, phone, setPhone, onConfirm }: QuizResultProps) => {
  const getScoreLevel = () => {
    if (score >= 200) return { level: 'EXCELENTE', color: 'text-green-600', emoji: '🏆' };
    if (score >= 160) return { level: 'MUITO BOM', color: 'text-blue-600', emoji: '⭐' };
    if (score >= 120) return { level: 'BOM', color: 'text-yellow-600', emoji: '👍' };
    return { level: 'REGULAR', color: 'text-orange-600', emoji: '📈' };
  };

  const scoreLevel = getScoreLevel();

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Celebration Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="mb-4 md:mb-6">
            <Trophy className="h-16 w-16 md:h-20 md:w-20 text-yellow-500 mx-auto mb-3 md:mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-800 mb-3 md:mb-4">
              Parabéns! 🎉
            </h1>
          </div>
        </div>

        {/* Score Card */}
        <Card className="mb-6 md:mb-8 shadow-2xl border-0 bg-green-600 text-white">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Sua Pontuação Final</h2>
            <div className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-yellow-400">{score}</div>
            <div className="flex justify-center space-x-1 mb-3 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 md:h-8 md:w-8 ${
                    i < Math.min(5, Math.floor(score / 40))
                      ? 'text-yellow-400 fill-current'
                      : 'text-yellow-200'
                  }`}
                />
              ))}
            </div>
            <div className="text-xl md:text-2xl font-bold mb-2 text-yellow-400">
              {scoreLevel.emoji} Classificação: {scoreLevel.level}
            </div>
          </CardContent>
        </Card>

        {/* Approval Message */}
        <Card className="mb-6 md:mb-8 shadow-lg border-green-200">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6 text-center md:text-left">
              <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-600 mb-3 md:mb-0 md:mr-4" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">APROVADO! ✅</h3>
                <p className="text-lg md:text-xl text-gray-700">
                  Você está qualificado para receber leads quentes do MCMV em Natal/RN!
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 md:p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-base md:text-lg text-green-800 mb-3 flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                🎯 O que você vai receber em Natal/RN:
              </h4>
              <ul className="space-y-2 text-green-700 text-sm md:text-base">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Sistema de IA qualificado para MCMV em Natal
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Leads pré-qualificados das zonas de Natal diariamente
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Funil personalizado para o mercado potiguar
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0" />
                  Suporte especializado em MCMV local
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="shadow-lg border-blue-200">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-blue-800">
              Confirme seus dados para ativação
            </h3>
            
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div>
                <Label htmlFor="name" className="text-sm md:text-base font-semibold flex items-center mb-2 text-gray-800">
                  <User className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600" />
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-base md:text-lg py-2 md:py-3 border-gray-300"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm md:text-base font-semibold flex items-center mb-2 text-gray-800">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 text-green-600" />
                  WhatsApp *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(84) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-base md:text-lg py-2 md:py-3 border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={onConfirm}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-lg text-lg md:text-xl shadow-lg w-full md:w-auto"
              >
                <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                Solicitar Ativação no WhatsApp
              </Button>
              
              <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                📊 Seu resumo completo será enviado automaticamente<br/>
                🔒 Seus dados estão 100% seguros e protegidos
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Regional Notice */}
        <div className="text-center mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-semibold flex flex-col md:flex-row items-center justify-center text-sm md:text-base">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-0 md:mr-2 mb-2 md:mb-0" />
            <span>🎯 <strong>Funil Personalizado para Natal/RN:</strong> Este sistema foi especialmente configurado 
            para o mercado imobiliário de Natal e adaptado às características locais do MCMV potiguar.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
