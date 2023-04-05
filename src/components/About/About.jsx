import './About.scss';

const About = () => {
  return (
    <div id='about'>
      <header>
          <h1>A Pomodoro Timer to increase your day to day productivity</h1>
      </header>
      <div>
          <h2>What is Time Attask?</h2>
          <p>Time Attask is a time customizable pomodoro timer that works on the computer browsers and mobile devices. The goal of this web app is to help users identify, prioritize, and complete their daily tasks in working time intervals with breaks. This web app is heavily inspired by the <a href="https://francescocirillo.com/products/the-pomodoro-technique">Pomodoro Technique</a>, a time management method developed by Francesco Cirillo, and <a href="https://pomofocus.io/">Pomofocus</a>, a customizable pomodoro timer created by Yuya Uzu.</p>
      </div>
      <div>
            <h2>What is the Pomodoro Technique?</h2>
            <p>Francesco Cirillo invented the Pomodoro Technique in the late 1980s to help break down work or study loads to make them more time manageable. Originally, this technique consist of using a kitchen timer to break work loads into 25 minutes working time intervals seperated by short breaks. Each working time interval became to knownn as a pomodoro which is an Italian word for tomato inspired by the Cirillo's tomato-shaped kitchen timer. </p>
      </div>
    </div>
  );
};

export default About;
