import './Control.scss';

const Control = ( 
    {
        setButtonText, 
        setTimerMode,
        setIsActive
    }
) => {
    
    const handleModeChange = (event) =>{
        setButtonText('START');
        setIsActive(false);
        
        switch(event.target.id){
            case 'short':
                setTimerMode(5);
                break;
            case 'long':
                setTimerMode(15);
                break;
            default:
                setTimerMode(25);
                break;
        }

    };

    return (
        <form className='controls'>
            <input 
            type="radio" 
            id='pomo' 
            name='mode'
            onChange={handleModeChange}
            defaultChecked
            />
            <label htmlFor="pomo" className='controls-btn'>Pomodoro</label>

            <input 
            type="radio" 
            id='short' 
            name='mode'
            onChange={handleModeChange}
            />
            <label htmlFor="short" className='controls-btn'>Short Break</label>

            <input 
            type="radio" 
            id='long' 
            name='mode'
            onChange={handleModeChange}
            />
            <label htmlFor="long" className='controls-btn'>Long Break</label>
        </form>
    );
    };

export default Control;
