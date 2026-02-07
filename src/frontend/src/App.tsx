import { useState } from 'react';
import IntroScreen from './screens/IntroScreen';
import Level1Screen from './screens/Level1Screen';
import FinalLevelScreen from './screens/FinalLevelScreen';
import RealQuestionScreen from './screens/RealQuestionScreen';
import YesCelebrationScreen from './screens/YesCelebrationScreen';
import ExtraCuteEndingScreen from './screens/ExtraCuteEndingScreen';
import AudioToggle from './components/AudioToggle';

type Screen = 'intro' | 'level1' | 'finalLevel' | 'realQuestion' | 'celebration' | 'ending';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro');

  const resetGame = () => {
    setCurrentScreen('intro');
  };

  return (
    <div className="h-mobile-screen relative overflow-hidden">
      <AudioToggle />
      
      {currentScreen === 'intro' && (
        <IntroScreen onStartGame={() => setCurrentScreen('level1')} />
      )}
      
      {currentScreen === 'level1' && (
        <Level1Screen onComplete={() => setCurrentScreen('finalLevel')} />
      )}
      
      {currentScreen === 'finalLevel' && (
        <FinalLevelScreen onComplete={() => setCurrentScreen('realQuestion')} />
      )}
      
      {currentScreen === 'realQuestion' && (
        <RealQuestionScreen onYes={() => setCurrentScreen('celebration')} />
      )}
      
      {currentScreen === 'celebration' && (
        <YesCelebrationScreen onComplete={() => setCurrentScreen('ending')} />
      )}
      
      {currentScreen === 'ending' && (
        <ExtraCuteEndingScreen onReplay={resetGame} />
      )}
    </div>
  );
}

export default App;
