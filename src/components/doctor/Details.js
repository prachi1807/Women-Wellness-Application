import React, { useState } from 'react';
import './Details.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Details() {
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
          <h3>Asthama</h3><br></br>
          <p>Asthma is a lifelong, or chronic, lung disease that makes your lungs more sensitive than other people's. This condition is with you every day, even if you don't have symptoms. Sensitive airways can react to different things, called triggers. Once your asthma is "triggered," the lining of the airways gets inflamed or swollen and the muscles around the airways tighten, making breathing difficult.</p><br></br>
          
          <h3>Symptoms</h3><br></br>
            <p>Shortness of breath</p>
            <p>Chest tightens or pains</p>
            <p>Chest tightens or pains</p>
            <p>Chest tightens or pains</p><br></br>

          <h3>Cure</h3><br></br>
            <p>Asthma cannot be cured.Some children with asthma will outgrow it by adulthood.</p><br></br>

          <h3>Precautions</h3><br></br>
            <p>Take asthma medications as prescribed</p>
            <p>Stay away from allergens</p>
            <p>Prevent colds</p>
            <p>Get your vaccinations</p> 
        </div><br></br>

        <br></br>

        <hr></hr>

        <br></br>

        <div>
          <h3>Autoimmune Diseases</h3><br></br>
          <p>Autoimmune disease occurs when body cells that eliminate threats, such as viruses, attack healthy cells. As this condition continues to escalate among the population, researchers remain baffled as to why the condition affects mostly women. </p><br></br>
          
          <h3>Symptoms</h3><br></br>
            <p>Exhaustion</p>
            <p>Mild Fever</p>
            <p>Pain</p>
            <p>Skin Irritation</p>
            <p>Vertigo</p><br></br>

          <h3>Cure</h3><br></br>
            <p>The best defense against autoimmune disease is early detection.</p><br></br>

          <h3>Precautions</h3><br></br>
          <p>Consuming less sugar</p>
          <p>Consuming less fat</p>
          <p>Lowering stress</p>
          <p>Reducing toxin intake</p>

        </div>
    </div>

    </form>

    </>
  )
}
export default Details;
