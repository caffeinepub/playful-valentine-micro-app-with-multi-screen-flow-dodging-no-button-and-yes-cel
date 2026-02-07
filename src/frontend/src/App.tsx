import { useState } from 'react';
import IntroScreen from './screens/IntroScreen';
import BuildUpScreen from './screens/BuildUpScreen';
import BigQuestionScreen from './screens/BigQuestionScreen';
import YesCelebrationScreen from './screens/YesCelebrationScreen';
import SweetEndingScreen from './screens/SweetEndingScreen';
import AudioToggle from './components/AudioToggle';

type Screen = 'intro' | 'buildup' | 'question' | 'celebration' | 'ending';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AudioToggle />
      
      {currentScreen === 'intro' && (
        <IntroScreen onContinue={() => setCurrentScreen('buildup')} />
      )}
      
      {currentScreen === 'buildup' && (
        <BuildUpScreen onReady={() => setCurrentScreen('question')} />
      )}
      
      {currentScreen === 'question' && (
        <BigQuestionScreen onYes={() => setCurrentScreen('celebration')} />
      )}
      
      {currentScreen === 'celebration' && (
        <YesCelebrationScreen onContinue={() => setCurrentScreen('ending')} />
      )}
      
      {currentScreen === 'ending' && (
        <SweetEndingScreen />
      )}
    </div>
  );
}

export default App;
