import './Control.scss';

const Control = ( 
    {
        setButtonText, 
        setTimerMode,
        setIsActive,
        setSecondsLeft,
        setTimeUpMessage,
        timerMode,
        pomoLength,
        shortLength,
        longLength
    }
) => {
    
    const handleModeChange = (event) =>{
        setTimerMode(event.target.id)
        setButtonText('START');
        setIsActive(false);
        setTimeUpMessage('');
        
        switch(event.target.id){
            case 'short':
                setSecondsLeft(shortLength * 60);
                break;
            case 'long':
                setSecondsLeft(longLength * 60);
                break;
            default:
                setSecondsLeft(pomoLength * 60);
                break;
        }

    };

    return (
        <form className='controls'>
            <input 
            type="radio" 
            id='pomo' 
            name='mode'
            checked={timerMode === 'pomo'}
            onChange={handleModeChange}
            />
            <label htmlFor="pomo" className='controls-btn'>Pomodoro</label>

            <input 
            type="radio" 
            id='short' 
            name='mode'
            checked={timerMode === 'short'}
            onChange={handleModeChange}
            />
            <label htmlFor="short" className='controls-btn'>Short Break</label>

            <input 
            type="radio" 
            id='long' 
            name='mode'
            checked={timerMode === 'long'}
            onChange={handleModeChange}
            />
            <label htmlFor="long" className='controls-btn'>Long Break</label>
        </form>
    );
    };

export default Control;
