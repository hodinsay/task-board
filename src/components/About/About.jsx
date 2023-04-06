import './About.scss';

const About = () => {
  return (
    <div id='about'>
      <header>
          <h1>A Pomodoro Timer to increase productivity</h1>
      </header>
      <div>
          <h2>What is Time Attask?</h2>
          <p>Time Attask is a time customizable pomodoro timer that works on the computer browsers and mobile devices. The goal of this web app is to help users identify, prioritize, and complete their daily tasks in working time intervals with breaks. This web app is heavily inspired by the <a href="https://francescocirillo.com/products/the-pomodoro-technique" target='_blank'>Pomodoro Technique</a>, a time management method developed by Francesco Cirillo, <a href="https://www.productplan.com/glossary/eisenhower-matrix/#:~:text=President%20Dwight%20Eisenhower%20himself%20developed,president%20of%20the%20United%20States." target='_blank'>Eisenhower Matrix</a>, a concept of prioritizing tasks formulated by President Dwight Eisenhower, and <a href="https://pomofocus.io/" target='_blank'>Pomofocus</a>, a customizable pomodoro timer created by Yuya Uzu.</p>
      </div>
      <div>
            <h2>What is the Pomodoro Technique?</h2>
            <p>Francesco Cirillo invented the Pomodoro Technique in the late 1980s to help break down work or study to make them more time manageable. Originally, this technique consist of using a kitchen timer to break work into 25 minutes working time intervals seperated by short breaks. Each working time interval became to known as a <i>pomodoro</i> which is an Italian word for "tomato" inspired by the Cirillo's tomato-shaped kitchen timer. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target='_blank'>Wikipedia</a> </p>
      </div>
      <div>
        <h2>What is the Eisenhower Matrix?</h2>
        <p>The concept behind the Eisenhower Matrix was originated from President Dwight Eisenhower himself to help him prioritize and deal with the many high-stakes issues he faced as a high ranking military leader for the US Army and the NATO Forces. The Eisenhower Matrix help to catogorize tasks in four quadrants or categories based on their importance and urgency. It has become a widely used time-mangement and decision-making framework in business. - <a href="https://www.productplan.com/glossary/eisenhower-matrix/#:~:text=President%20Dwight%20Eisenhower%20himself%20developed,president%20of%20the%20United%20States." target='_blank'>ProductPlan</a></p>
      </div>
      <div>
        <h2>How to use Time Attask?</h2>
        <ol>
          <li> <b>Add tasks</b>  to work on.</li>
          <li> <b>Correctly identify</b> the importance, urgency, and difficulty of each task.</li>
          <li><b>Set estimate pomodoro</b> time interval for your tasks. </li>
          <li><b>Start timer and focus</b> on tasks that are labeled important and urgent. </li>
          <li><b>Take a break</b> when the alarm ring.</li>
          <li><b>Reiterate pomodoro</b> until you complete your set tasks.</li>
        </ol>
      </div>
      <div>
        <h2>Basic Features</h2>
        <ul>
          <li><b>Custom Settings:</b> Personalize your pomodoro and break time.</li>
          <li><b>Adding/Removing Task:</b> Identify the importance, urgency, and difficulty of each task. Keep track of completed and ongoing tasks.</li>
        </ul> 
      </div>
      <div>
        <h2>Download App</h2>
        <ul>
          <li>
            <a href="https://github.com/hodinsay/time-attask" target='_blank'>GitHub Repo</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
