
import { useRef } from 'react';
import './App.css';
import FinalBlock from './components/FinalBlock';
import FirstBlock from './components/FirstBlock';
import FivethBlock from './components/FivethBlock';
import FourthBlock from './components/FourthBlock';
import SecondBlock from './components/SecondBlock';
import SeventhBlock from './components/SeventhBlock';
import SixthBlock from './components/SixthBlock';
import ThirdBlock from './components/ThirdBlock';

function App() {

  const stateRef = useRef()

  return (
    <div className="App">
      <FirstBlock stateRef={stateRef}/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FivethBlock/>
      <SixthBlock/>
      <SeventhBlock/>
      <FinalBlock stateRef={stateRef}/>
    </div>
  );
}

export default App;
