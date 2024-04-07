import React, {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const TriggerAnalysis = () => {
    const [feeling, setFeeling] = useState('');
    const [type, setType] = useState('');
    const [severity, setSeverity] = useState('');
    const [environmentalFactors, setEnvironmentalFactors] = useState('');
    const [notes, setNotes] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Update currentUser when authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        // Clean up listener on unmount
        return () => unsubscribe();
    }, []);

    const Emoji = [
        { label: "Sad", emoji: "😢" },
        { label: "Anxious", emoji: "😰" },
        { label: "Angry", emoji: "😡" },
        { label: "Calm", emoji: "😌" },
    ];

    const selectFeeling = (label) => {
        setFeeling(label);
    };
  

    const TypeChange = (event) => {
        setType(event.target.value);
    };

    const SeverityChange = (event) => {
        setSeverity(event.target.value);
    };

    const EnvironmentalFactorsChange = (event) => {
        setEnvironmentalFactors(event.target.value);
    };


    const NotesChange = (event) => {
        setNotes(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(type);
            const response = await fetch('http://localhost:3001/updateUserInfo', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    email: currentUser.email, 
                    firstName, 
                    lastName,
                    feeling,
                    type,
                    severity,
                    environmentalFactors,
                    notes
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            console.log('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };
    
    return (
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f0f0f0",minHeight: '60vh' }}>
          <h1 style={{ color: "blue" }}>Trigger Analysis</h1>
            <p>How are you feeling?</p>
            <div>
            {Emoji.map((emotion, index) => (
                <button
                key={index}
                onClick={() => selectFeeling(emotion.label)}
                style={{
                    backgroundColor: "lightblue",
                    padding: "5px 10px",
                    margin: "5px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease-in-out", // Adding transition
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "skyblue")} // Change background color on hover
                onMouseOut={(e) => (e.target.style.backgroundColor = "lightblue")} // Revert back to original color on mouse out
                >
                {emotion.emoji} {emotion.label}
                </button>
            ))}
            </div>
            <p style={{ color: "green" }}>Selected feeling: {feeling}</p>
            <h2>Trigger Details</h2>
          <label>
            Trigger Reason:
            <select value={type} onChange={TypeChange} style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", margin: "5px" }}>
              <option value="">Select Type</option>
              <option value="Weather conditions">Weather conditions</option>
              <option value="Physical activity">Physical activity</option>
              <option value="Dietary">Dietary</option>
              <option value="Medication related">Medication related</option>
              <option value="Sleep patterns">Sleep patterns</option>
              <option value="Other">Other</option>
            </select>
          </label>
      
          <label>
            Severity:
            <select value={severity} onChange={SeverityChange} style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", margin: "5px" }}>
              <option value="">Select Severity</option>
              <option value="Very severe">Very severe</option>
              <option value="Severe">Severe</option>
              <option value="Moderate">Moderate</option>
              <option value="Mild">Mild</option>
              <option value="Very mild">Very mild</option>
            </select>
          </label>
      
          <label>
            EnvironmentalFactors:
            <select value={environmentalFactors} onChange={EnvironmentalFactorsChange} style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", margin: "5px" }}>
              <option value="">Select EnvironmentalFactors</option>
              <option value="Temperature">Temperature</option>
              <option value="Noise levels">Noise levels</option>
              <option value="Exposure to chemicals">Exposure to chemicals</option>
            </select>
          </label>
      
          <div>
            <label>
              Notes:
              <textarea value={notes} onChange={NotesChange} style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", margin: "5px" }}></textarea>
            </label>
          </div>
          <button onClick={handleSubmit} style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}>Update</button>
        </div>
    );      
}

export default TriggerAnalysis;