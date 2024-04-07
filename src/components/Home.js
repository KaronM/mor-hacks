import './Home.css';
import React from 'react';

class Home extends React.Component{

    constructors(props){
        this.props = props;
    }
    render(){
        return(
            <div className="main-home-container">
                <div>
                    <form className="first-time-Questionaire">
                        <ol>
                            <li><input type="text" id="firstName"/>q1</li>
                            <li><input type="text" id="lastName"/>q1</li>
                            <li><input type="text" id="age"/>q3</li>
                            <li><input type="radio" id="firstName"/>q4</li>
                        </ol>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;