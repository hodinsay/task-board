import './Setting.scss';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const Setting = (
    {
        timerMode,
        setSecondsLeft,
        setSettingVisible,
        setPomoLength,
        setShortLength,
        setLongLength,
        pomoLength,
        shortLength,
        longLength
    }
) => {

    const closeSetting = () => {
        setSettingVisible(false);
    }

    const applySetting = (event) => {
        event.preventDefault();

        setSettingVisible(false);
        setPomoLength(event.target.pomodoro.value);
        setShortLength(event.target.shortBreak.value);
        setLongLength(event.target.longBreak.value);

        switch(timerMode){
            case 'short':
                setSecondsLeft(event.target.shortBreak.value * 60);
                break;
            case 'long':
                setSecondsLeft(event.target.longBreak.value * 60);
                break;
            default:
                setSecondsLeft(event.target.pomodoro.value * 60);
                break;
        }
    }

    return (
        <div>
            <div className='setting-backdrop' onClick={closeSetting}></div>
            <Card className='setting'>
                <form onSubmit={applySetting}>
                    <header className='setting-header'>
                        <h2>Time Settings (Minutes)</h2>
                    </header>
                    <div className='setting-options'>
                        <div>
                            <label htmlFor="pomodoro">Pomodoro: </label>
                            <input type="number" name='pomodoro' id='pomodoro' min='5' max='60' defaultValue={pomoLength}/>
                        </div>
                        <div>
                            <label htmlFor="short-break">Short Break: </label>
                            <input type="number" name='shortBreak' id='short-break' min='1' max='14' defaultValue={shortLength}/>
                        </div>

                        <div>
                            <label htmlFor="long-break">Long Break: </label>
                            <input type="number" name='longBreak' id='long-break' min='15' max='30' defaultValue={longLength}/>
                        </div>
                    </div>
                    <div className='setting-action'>
                        <Button type='submit' className='apply-btn'>Apply</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Setting;
