import { useState, useEffect } from 'react';
import './Timer.scss';
import Control from './Control/Control';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Setting from './Setting/Setting';
import useSound from 'use-sound';
import timesUpSfx from '../../assets/Sound/src_sounds_timesUp.mp3';
import startTimerSfx from '../../assets/Sound/src_sounds_startTimer.mp3';
import pauseTimerSfx from '../../assets/Sound/src_sounds_pauseTimer.mp3';

const Timer = () => {
  const [settingVisible, setSettingVisible] = useState(false);
  const [buttonText, setButtonText] = useState('START');
  const [timerMode, setTimerMode] = useState('pomo');
  const [pomoLength, setPomoLength] = useState(25);
  const [shortLength, setShortLength] = useState(5);
  const [longLength, setLongLength] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
  const [timeUpMessage, setTimeUpMessage] = useState('');
  const [volume, setVolume] = useState(1)
  const [timesUp] = useSound(timesUpSfx, {volume: volume});
  const [startTime] = useSound(startTimerSfx, {volume: volume});
  const [pauseTime] = useSound(pauseTimerSfx, {volume: volume});

  useEffect(() =>{
    if(isActive){
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft => secondsLeft - 1)
      }, 1000);

      if(secondsLeft === 0 && timerMode === 'pomo'){
        clearInterval(interval);
        setIsActive(false);
        timesUp();
        setTimeUpMessage('Time to take a break!');
      } else if (secondsLeft === 0 && timerMode === 'short' || secondsLeft === 0 && timerMode === 'long'){
        clearInterval(interval);
        setIsActive(false);
        timesUp();
        setTimeUpMessage('Time to work!');
      };

      return () => clearInterval(interval);
    }

  }, [isActive, secondsLeft, timesUp])

  const buttonHandler = () => {
    if (buttonText === 'START') {
      setIsActive(true);
      pauseTime()
      setButtonText('PAUSE');
    }
    if (buttonText === 'PAUSE') {
      setIsActive(false);
      startTime();
      setButtonText('START');
    }
  };

  const formatTimeLeft = (seconds) => {
    return(
      `${Math.floor(seconds / 60)}:${(seconds % 60 > 9) ? seconds % 60 : '0' + seconds % 60}`
    );
  };

  const toggleSettingVisibility = () => {
    setSettingVisible(true);
  }

  return (
    <div>
      {settingVisible && <Setting
        setSecondsLeft={setSecondsLeft}
        setSettingVisible={setSettingVisible}
        setPomoLength={setPomoLength}
        setShortLength={setShortLength}
        setLongLength={setLongLength}
        timerMode={timerMode}
        pomoLength={pomoLength}
        shortLength={shortLength}
        longLength={longLength}
      />}
      <Card className='timer'>
          <Control 
          setIsActive={setIsActive}
          setTimerMode={setTimerMode}
          setButtonText={setButtonText}
          setSecondsLeft={setSecondsLeft}
          setTimeUpMessage={setTimeUpMessage}
          timerMode={timerMode}
          pomoLength={pomoLength}
          shortLength={shortLength}
          longLength={longLength}
          />
          <Button onClick={toggleSettingVisibility}>Settings</Button>
          <span>{formatTimeLeft(secondsLeft)}</span>
          <h2 className='message'>{timeUpMessage}</h2>
          <Button className='timer-btn' onClick={buttonHandler}>{buttonText}</Button>
      </Card>
    </div>
  );
};

export default Timer;
