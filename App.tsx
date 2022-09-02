import { StatusBar, View } from 'react-native';
import { TimerProvider, useTimer } from './context/TimerContext';
import TimerApp from './screen/TimerApp';

export default function App() {

  return (
    <TimerProvider>      
      <StatusBar />
      <TimerApp />      
    </TimerProvider>
  );
}
