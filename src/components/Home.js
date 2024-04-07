import './Home.css';
import React from 'react';

class Home extends React.Component{

    constructors(props){
        this.props = props;
    }
    render(){
        return(
            <div className="main-home-container">
                <div className="questionnaire-container">
                    <h2 id="questionnaire-header">First-Time Questionnaire <p>*must take to access features</p></h2>
                    <form id="questionnaire" action="">
                        <ul id="questions"> 
                            <li id="q1"><label for="firstName"><h4>Q1. First Name</h4></label><input type="text" id="firstName" placeholder="enter first name"/></li>

                            <li id="q2"><label for="lastName"><h4>Q2. Last Name:</h4></label><input type="text" id="lastName" placeholder="enter last name"/></li>

                            <li id="q3"><label for="dob"><h4>Q3. Date of Birth</h4></label><input type="date" id="dob"/></li>

                            <li id="q4"><h4>Q4. What is your gender?</h4><input type="radio" id="option1" name="options" value="option1" required/>
    <label for="option1">Male</label><input type="radio" id="option2" name="options" value="option2"required/>
    <label for="option2">Female</label><input type="radio" id="option3" name="options" value="option3"required/>
    <label for="option3">Prefer not to say</label>
                            </li>

                            <li id="q5"><h4>Q5. Telephone Number:</h4><input id="phone" type="tel" required/></li>

                            <li id="q6"><h4>Q6. Mobile or Home phone?</h4><input type="radio" id="option7-1" name="options" value="option7-1" required/>
    <label for="option7-1">Mobile</label><input type="radio" id="option7-2" name="options" value="option7-2"required/>Home</li>

                            <li id="q7"><h4>Q7. Email Address:</h4><input type="email" required/></li>

                            <li id="q8"><h4>Q8. Do you have sickle cell?</h4><input type="radio" id="option2-1" name="options" value="option2-1" required/>
    <label for="option2-1">Yes</label><input type="radio" id="option2-2" name="options" value="option2-2"required/>
    <label for="option2-2">No</label></li>

                            <li id="q9"><h4>Q9. If so what type?</h4><input type="text" id="pickSickle"></input></li>

                            <li id="q10"><h4>Q10. What best describes the current weather that you live in</h4><input type="text" id="weather" placeholder="ex. humid and dry"/></li>

                            <li id="q11"><h4>Q11. Are you currently taking medication?</h4><input type="radio" id="option3-1" name="options" value="option3-1" required/>
    <label for="option3-1">Yes</label><input type="radio" id="option3-2" name="options" value="option3-2"required/>No</li>

                            <li id="q12"><h4>Q12. If so what Medication?</h4><input type="text" id="pickMedication"></input></li>

                            <li id="q13"><h4>Q13. Do you have a history of seizures or strokes?</h4><input type="radio" id="option4-1" name="options" value="option4-1" required/>
    <label for="option4-1">Yes</label><input type="radio" id="option4-2" name="options" value="option4-2"required/>No</li>

                            <li id="q14"><h4>Q14. Do you experience chronic pain?</h4><input type="radio" id="option5-1" name="options" value="option5-1" required/>
    <label for="option5-1">Yes</label><input type="radio" id="option5-2" name="options" value="option5-2"required/>No</li>

                            <li id="q15"><h4>Q15. If so, rate the pain from 1 to 10?</h4><input type="text" id="pickPain"></input></li>

                            <li id="q16"><h4>Q16. Are you active?</h4><input type="radio" id="option6-1" name="options" value="option6-1" required/>
    <label for="option6-1">Yes</label><input type="radio" id="option6-2" name="options" value="option6-2"required/>No</li>

                            <li id="q17"><label for="pickHours"><h4>Q17. If so, how many hours are you active a week?</h4></label><input type="text" id="pickHours"></input></li>

                            <li id="q18"><h4>Q18. Have you already received blood transfusions?</h4><input type="radio" id="option7-1" name="options" value="option7-1" required/>
    <label for="option7-1">Yes</label><input type="radio" id="option7-2" name="options" value="option7-2"required/>No</li>

                            <li id="submit-container"><input type="submit"></input></li>
                        </ul>
                    </form>
                </div>
                <div className="recommendations">
                    <h1>Welcome to your Dashboard</h1>

                    <h2 id="recommendations-header">Trigger Analysis <p>must complete First-Time Questionnaire!</p></h2>
                    <h3>How are you feeling?</h3>
                    <ul id="feelings">
                        <li><div id="happy">Happy-Img</div><label for="happy">Happy</label></li>
                        <li><div id="calm">Calm-Img</div><label for="calm">Calm</label></li>
                        <li><div id="manic">Manic-Img</div><label for="manic">Manic</label></li>
                        <li><div id="angry">Angry-Img</div><label for="angry">Angry</label></li>
                        <li><div id="terrified">Terrified-Img</div><label for="terrified">Terrified</label></li>
                        <li><div id="anxious">anxious-Img</div><label for="anxious">Anxious</label></li>
                    </ul>
                    <h3>Trigger Details</h3>
                    
                </div>
            </div>
        );
    }
}

export default Home;