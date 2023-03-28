import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.scss";

const ErrorModal = (props) => {
  return (
    <div>
        <div className='backdrop' onClick={props.onConfirm}></div>
        <Card className='modal'>
        <header className='header'>
            <h2>{props.title}</h2>
        </header>
        <div className='content'>
            <p>{props.message}</p>
        </div>
        <footer className='actions'>
            <Button className='error-btn' onClick={props.onConfirm}>Okay</Button>
        </footer>
        </Card>
    </div> 
  );
};

export default ErrorModal;
