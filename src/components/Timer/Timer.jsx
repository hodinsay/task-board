import './Timer.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Timer = () => {
  return (
    <Card className='timer'>
        <div>
            <a href="">Time Attask</a>
            <a href="">Short Break</a>
            <a href="">Long Break</a>
        </div>
        <span>25:00</span>
        <Button>Start / Pause</Button>
    </Card>
  );
};

export default Timer;
