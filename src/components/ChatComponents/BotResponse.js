import React from "react";

// Using the following API key
const apiKey = "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";
// Making a temporary username
const username = "Maha is fat";
// Giving the bot a persona targeted as a Rogerian psychotherapist.
const persona = `You are a Rogerian psychotherapist. You listen empathetically and provide support. You avoid giving direct advice and encourage the user to explore their feelings. Keep responses brief and speak in the first person like a conversation. Introduce yourself and help me with my mental health. Your name is Riverbot. Do not refer to yourself as a psychotherapist, but instead use pronouns like I. Also, the user name is ${username}`;

let conversation = [];

let password = prompt("Please enter your password");


const sendMessage = (message) => {
  return new Promise((resolve, reject) => {
    conversation.push({ role: 'user', text: message });

    try {
      fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: conversation.map(item => item.content).join('\n'),
          max_tokens: 100,
          temperature: 0
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        resolve(data);
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
    } catch (error) {
      console.log('Error:', error);
      reject(error);
    }
  });
};

function BotResponse() {
  return (
    <div>
        {password == "1234" ? sendMessage("Hello") : console.log("Wrong password")}
    </div>
  )
}

export default BotResponse;
