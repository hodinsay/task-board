import { useState, useEffect } from 'react';
import './Timer.scss';
import Control from './Control/Control';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Timer = () => {
  const [buttonText, setButtonText] = useState('START');
  const [timerMode, setTimerMode] = useState(25);
  // const [pomoLength, setPomoLength] = useState(25);
  // const [shortLength, setShortLength] = useState(5);
  // const [longLength, setLongLength] = useState(15);
  const [isActive, setIsActive] = useState(false);
  // const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);

  useEffect(() =>{
    if(isActive){
      const interval = setInterval(() => {
        setTimerMode(timerMode => timerMode - 1)
      }, 1000);

      if(timerMode === 0){
        clearInterval(interval);
        setIsActive(false);
        alert('Time Up!')
      };

      return () => clearInterval(interval);
    }

  }, [isActive, timerMode])

  const buttonHandler = () => {
    if (buttonText === 'START') {
      setIsActive(true)
      setButtonText('PAUSE');
    }
    if (buttonText === 'PAUSE') {
      setIsActive(false)
      setButtonText('START');
    }
  };

  return (
    <Card className='timer'>
        <Control 
        setIsActive={setIsActive}
        setTimerMode={setTimerMode}
        setButtonText={setButtonText}
        />
        <span>{timerMode}</span>
        <Button className='timer-btn' onClick={buttonHandler}>{buttonText}</Button>
    </Card>
  );
};

export default Timer;
