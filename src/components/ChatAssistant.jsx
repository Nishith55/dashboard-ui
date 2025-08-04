import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress, TextField } from '@mui/material';

const ChatAssistant = ({ filename }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [customPrompt, setCustomPrompt] = useState('');

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const predefinedPrompts = [
    "What trends do you see?",
    "Any concerning patterns?",
    "Recommend next steps"
  ];

  const askOpenAI = async (prompt) => {
    setLoading(true);
    try {
      const res = await fetch(`https://dashboard-backend-1-4ipw.onrender.com/api/json/${filename}`);
      const data = await res.json();

      const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful data analyst assistant." },
            { role: "user", content: `${prompt} based on this data: ${JSON.stringify(data).slice(0, 3000)}` } // Truncate if too large
          ],
          temperature: 0.5
        })
      });

      const json = await openaiResponse.json();
      const message = json.choices?.[0]?.message?.content || "No response.";

      setResponse(message);
      setChatHistory(prev => [...prev, { prompt, message }]);
    } catch (err) {
      setResponse("Error fetching from OpenAI.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>Ask the Assistant</Typography>

      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
        {predefinedPrompts.map((prompt, idx) => (
          <Button key={idx} variant="contained" onClick={() => askOpenAI(prompt)}>
            {prompt}
          </Button>
        ))}
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          placeholder="Ask a custom question..."
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && askOpenAI(customPrompt)}
        />
        <Button sx={{ mt: 1 }} onClick={() => askOpenAI(customPrompt)} variant="outlined">
          Submit
        </Button>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box mt={2}>
          {response && (
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              <strong>AI:</strong> {response}
            </Typography>
          )}

          {chatHistory.length > 0 && (
            <Box mt={3}>
              <Typography variant="subtitle1">Chat History:</Typography>
              {chatHistory.map((chat, idx) => (
                <Typography key={idx} variant="body2" sx={{ mt: 1 }}>
                  <strong>Q:</strong> {chat.prompt}<br />
                  <strong>A:</strong> {chat.message}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ChatAssistant;
