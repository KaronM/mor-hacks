import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.min.css';

function BundledEditor(props) {
  const [aiText, setAiText] = useState('');

  const log = () => {
    const editor = window.tinymce.get(props.id);
    if (editor) {
      console.log(editor.getContent());
    }
  };

  const generateAiText = async () => {
    const editor = window.tinymce.get(props.id);
    if (editor) {
      const content = editor.getContent();
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'saxkrxec9a1t43yt4s0v13zmvq2fjfcycah67vn3t6zh02kz'}`  // Use props.api_key here
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            temperature: 0.7,
            max_tokens: 800,
            messages: [{ role: 'user', content }],
          })
        });

        if (!response.ok) {
          throw new Error('Failed to generate AI text');
        }

        const data = await response.json();
        const aiResponse = data?.choices[0]?.message?.content?.trim();
        setAiText(aiResponse);
      } catch (error) {
        console.error(error);
        setAiText('Error generating AI text');
      }
    }
  };

  return (
    <>
      <Editor
        id={props.id}
        apiKey={props.api_key}
        init={{
          plugins: 'ai',
          toolbar: 'none',
          menubar: 'none',
          height: 300,
          width: 600,
          ai_endpoint: 'https://api.openai.com/v1/chat/completions', // AI endpoint
          ai_request: (request, success, failure) => { // AI request handler
            fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${'saxkrxec9a1t43yt4s0v13zmvq2fjfcycah67vn3t6zh02kz'}`
              },
              body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                temperature: 0.7,
                max_tokens: 800,
                messages: [{ role: 'user', content: request.prompt }],
              })
            })
            .then(response => response.json())
            .then(data => success({ response: data.choices[0].message.content }))
            .catch(error => failure({ response: error.message }));
          },
        }}
        initialValue="Welcome to TinyMCE!"
      />
      <button onClick={generateAiText}>Generate AI Text</button>
      <div>
        <h3>AI Text:</h3>
        <p>{aiText}</p>
      </div>
    </>
  );
}

export default BundledEditor;
