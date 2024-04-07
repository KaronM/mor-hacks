import React, { useState } from 'react';

const HealthInfo = () => {
    
    return (
        <div>
             <p>In HealthInfo!</p>
        </div>
    );
};

export default HealthInfo;

import React, { useState } from 'react';

export function TriggerAnalysis() {
  const [feeling, setFeeling] = useState('');
  const Emoji = [
    { label: "Sad", emoji: "😢" },
    { label: "Anxious", emoji: "😰" },
    { label: "Angry", emoji: "😡" },
    { label: "Calm", emoji: "😌" },
    
  ];
  const Feeling = (label) => {
    setFeeling(label);
  }

  return (
    <div>
      <h1>TriggerAnalysis</h1>
      <p>How are you feeling?</p>
      <div>
        {Emoji.map((emotion, index) => (
          <button key={index} onClick={() => Feeling(emotion.label)}>
            {emotion.emoji} {emotion.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TriggerDetails() {
  const [type, setType] = useState('');
  const [severity, setSeverity] = useState('');
  const [environmentalFactors, setEnvironmentalFactors] = useState('');
  const [notes, setNotes] = useState('');
  

  const TypeChange = (label) => {
    setType(label);
  };

  const SeverityChange = (label) => {
    setSeverity(label);
  };

  const EnvironmentalFactorsChange = (label) => {
    setEnvironmentalFactors(label);
  };


  const NotesChange = (label) => {
    setNotes(label);
  };
  
  return (
    <div> 
      <h2>Trigger Details</h2>
      <label>
        Type:
        <select value={type} onChange={TypeChange}>
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
        <select value={severity} onChange={SeverityChange}>
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
        <select value = {severity} onChange={EnvironmentalFactorsChange}>
            <option value="">Select EnvironmentalFactors</option>
            <option value="Temperature">Temperature</option>
            <option value="Noise levels">Noise levels</option>
            <option value="Exposure to chemicals">Exposure to chemicals</option>
          </select>
      </label>

      <div>
      <label>
        Notes:
        <textarea value={notes} onChange={NotesChange}></textarea>
      </label>
      </div>
    </div>
  );
}
