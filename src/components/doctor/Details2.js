import React, { useState } from 'react';
import './Details.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Details2() {
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
              <h3>Cervical Cancer</h3><br></br>
              <p>Cervical cancer is a type of cancer that occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina. Various strains of the human papillomavirus (HPV), a sexually transmitted infection, play a role in causing most cervical cancer.</p><br></br>             
              
              <h3>Symptoms</h3><br></br>
                <p>Vaginal bleeding after intercourse, between periods or after menopause.</p>
                <p>Watery, bloody vaginal discharge that may be heavy and have a foul odor</p>
                <p>Pelvic pain or pain during intercourse.</p><br></br>

              <h3>Cure</h3><br></br>
                <p>Radical hysterectomy operation, which involves removing the cervix, uterus, part of the vagina and nearby lymph nodes.</p><br></br>

              <h3>Precautions</h3><br></br>
                <p>To help prevent cervical cancer, ASCO recommends that girls receive HPV vaccination</p>
                <p>Delaying first sexual intercourse until the late teens or older.</p>
                <p>Limiting the number of sex partners.</p>
                <p>Practicing safe sex by using condoms and dental dams.</p> 
            </div><br></br>

            <br></br>

            <hr></hr>

            <br></br>

            <div>
              <h3>Ovarian Cancer</h3><br></br>
              <p>Ovarian cancer is a growth of cells that forms in the ovaries. The cells multiply quickly and can invade and destroy healthy body tissue. Ovarian cancer starts in the fallopian tubes</p><br></br>
              
              <h3>Symptoms</h3><br></br>
                <p>Abdominal bloating or swelling.</p>
                <p>Quickly feeling full when eating.</p>
                <p>Weight loss.</p>
                <p>Discomfort in the pelvic area.</p>
                <p>Fatigue.</p>
                <p>Back pain.</p>
                <p>Changes in bowel habits, such as constipation.</p>
                <p>A frequent need to urinate.</p><br></br>

              <h3>Cure</h3><br></br>
                <p>Surgery and chemotherapy are generally used to treat ovarian cancer.</p><br></br>

              <h3>Precautions</h3><br></br>
              <p>Exercise and Diet.</p>
              <p>Oral Contraceptives.</p>
              <p>Avoiding Carcinogens.</p>
              <p>Pregnancy & Breastfeeding.</p>
              <p>Healthy Lifestyle.</p>

            </div>
        </div>

      </form>
    </>
  )
}
export default Details2;
