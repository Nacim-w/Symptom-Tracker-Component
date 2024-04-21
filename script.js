function submitSymptoms() {
    const painLevel = document.getElementById('pain-level').value;
    const fatigue = document.getElementById('fatigue').value;
    const mood = document.getElementById('mood').value;
    const additionalInfo = document.getElementById('additional-info').value;
  
    const summary = document.getElementById('symptom-summary');
    summary.innerHTML = `
      <h3>Symptom Summary</h3>
      <p><strong>Pain Level:</strong> ${painLevel}</p>
      <p><strong>Fatigue:</strong> ${fatigue}</p>
      <p><strong>Mood:</strong> ${mood}</p>
      <p><strong>Additional Info:</strong> ${additionalInfo}</p>
    `;
  }
  