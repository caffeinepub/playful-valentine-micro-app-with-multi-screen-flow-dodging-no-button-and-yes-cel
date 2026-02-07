import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';
import { useDodgingNoButton } from '@/hooks/useDodgingNoButton';
import DodgeMessageToast from '@/components/DodgeMessageToast';

interface BigQuestionScreenProps {
  onYes: () => void;
}

export default function BigQuestionScreen({ onYes }: BigQuestionScreenProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  
  const messages = [
    "Hey hey hey 😳",
    "Nice try",
    "That button is shy",
    "Wrong choice detected 🚫",
    "The universe says no… to NO"
  ];

  const handleNoDodge = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(randomMessage);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const { noButtonStyle, handlePointerEnter, handlePointerDown } = useDodgingNoButton(handleNoDodge);

  return (
    <ValentineScreenShell>
      <div className="text-center space-y-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-valentine-primary leading-tight">
          Anya, will you be my Valentine? 💝
        </h1>
        
        <div className="relative min-h-[200px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 w-full max-w-md">
            <div className="flex gap-4 justify-center items-center w-full relative" style={{ minHeight: '60px' }}>
              <Button
                onClick={onYes}
                size="lg"
                className="text-lg px-10 py-6 rounded-full bg-valentine-success hover:bg-valentine-success-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                YES 💕
              </Button>
              
              <div className="relative w-32 h-16">
                <Button
                  onPointerEnter={handlePointerEnter}
                  onPointerDown={handlePointerDown}
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                  variant="outline"
                  className="absolute text-lg px-10 py-6 rounded-full border-2 border-valentine-muted text-valentine-muted hover:bg-transparent transition-all duration-200 cursor-pointer"
                  style={noButtonStyle}
                >
                  NO
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-valentine-text-muted italic mt-4">
              (Just kidding… but I really hope you say yes 🥺)
            </p>
          </div>
          
          <DodgeMessageToast message={currentMessage} show={showMessage} />
        </div>
      </div>
    </ValentineScreenShell>
  );
}
