import React, { useState } from 'react';
import './Details.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Details1() {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your Booking has been confirmed!')
  }
  return (
    <>
      <form class="box" onSubmit={handleSubmit}>
      <div>
          <div>
              <h3>Anxiety</h3><br></br>
              <p>Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel restless and tense, and have a rapid heartbeat. It can be a normal reaction to stress. For example, you might feel anxious when faced with a difficult problem at work, before taking a test, or before making an important decision</p><br></br>             
              
              <h3>Symptoms</h3><br></br>
                <p>Anxious thoughts or beliefs that are hard to control. They make you feel restless and tense and interfere with your daily life. They do not go away and can get worse over time.</p>
                <p>Physical symptoms, such as a pounding or rapid heartbeat, unexplained aches and pains, dizziness, and shortness of breath</p>
                <p>Changes in behavior, such as avoiding everyday activities you used to do</p><br></br>

              <h3>Cure</h3><br></br>
                <p>Cognitive behavioral therapy (CBT) is a type of psychotherapy that is often used to treat anxiety disorders.</p><br></br>

              <h3>Precautions</h3><br></br>
                <p>Take care of your body by eating a well-balanced diet. Include a multivitamin when you can't always eat right.</p>
                <p>Limit caffeine, and sugar consumption.</p>
                <p>Take time out for yourself every day. Even 20 minutes of relaxation or doing something pleasurable for yourself can be restorative and decrease your overall anxiety level.</p>
                <p>Trim a hectic schedule to its most essential items, and do your best to avoid activities you don't find relaxing.</p> 
            </div><br></br>

            <br></br>

            <hr></hr>

            <br></br>

            <div>
              <h3>Uterine Fibroids</h3><br></br>
              <p>Uterine fibroids are noncancerous growths of the uterus that often appear during childbearing years. Also called leiomyomas (lie-o-my-O-muhs) or myomas, uterine fibroids aren't associated with an increased risk of uterine cancer and almost never develop into cancer. Fibroids range in size from seedlings, undetectable by the human eye, to bulky masses that can distort and enlarge the uterus</p><br></br>
              
              <h3>Symptoms</h3><br></br>
                <p>Heavy menstrual bleeding.</p>
                <p>Menstrual periods lasting more than a week</p>
                <p>Pelvic pressure or pain</p>
                <p>Constipation</p>
                <p>Backache or leg pains.</p><br></br>

              <h3>Cure</h3><br></br>
                <p>If you have multiple fibroids, very large fibroids or very deep fibroids, your doctor may use an open abdominal surgical procedure to remove the fibroids.</p><br></br>

              <h3>Precautions</h3><br></br>
              <p>Fibroids can’t be prevented, but there is some research that suggests certain lifestyle habits can reduce your chances.</p>
              <p>One study found that high-sugar diets may be linked to a higher risk in some women. Another study found that eating fresh fruits and cruciferous vegetables like arugula, broccoli, cabbage, cauliflower, collard greens, and turnip greens could lower your odds. Cruciferous vegetables are rich in beta-carotene, folate, vitamins C, E, and K, and other minerals. They’re also full of fiber.</p>
              <p>ARegular exercise also can lower your chances of uterine fibroids.</p>


            </div>
        </div>

      </form>
    </>
  )
}
export default Details1;
