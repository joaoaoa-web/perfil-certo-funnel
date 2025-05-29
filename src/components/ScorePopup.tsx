
import { useEffect, useState } from 'react';
import { Trophy, Star } from 'lucide-react';

interface ScorePopupProps {
  points: number;
  totalScore: number;
}

const ScorePopup = ({ points, totalScore }: ScorePopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
      <div
        className={`transform transition-all duration-500 ${
          isVisible
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-50 opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-green-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl border-4 border-yellow-400 max-w-sm md:max-w-md mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3 md:mb-4">
              <Trophy className="h-12 w-12 md:h-16 md:w-16 text-yellow-400" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
              +{points} Pontos! 💰
            </h3>
            
            <p className="text-lg md:text-xl mb-3 md:mb-4">
              Sua pontuação: <span className="font-bold text-yellow-400">{totalScore}</span>
            </p>
            
            <div className="flex justify-center space-x-1 mb-3 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 md:h-6 md:w-6 ${
                    i < Math.min(5, Math.floor(points / 5))
                      ? 'text-yellow-400 fill-current'
                      : 'text-yellow-200'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-base md:text-lg font-semibold text-blue-200">
              Continue jogando! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorePopup;
