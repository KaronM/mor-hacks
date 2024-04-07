const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json
app.use(bodyParser.json());

// CORS middleware to allow requests from frontend
app.use(cors());

// Endpoint for saving email to Kintone
app.post('/inputEmail', async (req, res) => {
    try {
        const { email } = req.body;

        // Prepare the data to be sent to Kintone
        const data = {
            app: 1, // Replace with your Kintone app ID
            record: {
                email: { value: email } // Assuming the field name for email in Kintone is "email"
            }
        };

        // API endpoint and authentication token for Kintone
        const apiUrl = 'https://datadocs.kintone.com/k/v1/record.json';
        const token = 'TXwHX9swPiQbs7pUQD0B4GXOnSW9mEwVvBe2JMTC';

        // Send the data to Kintone
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Cybozu-API-Token': token
            },
            body: JSON.stringify(data)
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to save email to Kintone');
        }

        // Send success response
        res.status(200).json({ message: 'Email saved successfully to Kintone', email });
    } catch (error) {
        console.error('Error saving email to Kintone:', error);
        res.status(500).json({ error: 'Failed to save email to Kintone' });
    }
});

// PUT endpoint for updating firstName and/or lastName in Kintone based on email
app.put('/updateUserInfo', async (req, res) => {
    try {
      const { email, firstName, lastName } = req.body;
  
      // Validate email and input data
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing email' });
      }
  
      // Ensure at least one field to update is provided
      if (!firstName && !lastName) {
        return res.status(400).json({ error: 'At least one of firstName or lastName must be provided' });
      }
  
      // Find the record number based on the email address, EMAIL is always unique
      const recordsApiUrl = `https://datadocs.kintone.com/k/v1/records.json?app=1&query=email = "${encodeURIComponent(email)}"`;
      const token = 'TXwHX9swPiQbs7pUQD0B4GXOnSW9mEwVvBe2JMTC';
  
      const recordsResponse = await fetch(recordsApiUrl, {
        headers: {
          'X-Cybozu-API-Token': token
        }
      });
  
      if (recordsResponse.ok) {
        const recordsData = await recordsResponse.json();
        const recordNumber = recordsData.records.length > 0 ? recordsData.records[0]['$id'].value : null;
  
        if (recordNumber) {
          const updateApiUrl = `https://datadocs.kintone.com/k/v1/record.json`;
          const data = {
            app: 1,
            id: recordNumber,
            record: {
              ...(firstName && { firstName: { value: firstName } }),
              ...(lastName && { lastName: { value: lastName } })
            }
          };
  
          const response = await fetch(updateApiUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-Cybozu-API-Token': token
            },
            body: JSON.stringify(data)
          });
  
          if (response.ok) {
            res.json({ message: 'User information updated successfully' });
          } else {
            const errorData = await response.json();
            res.status(response.status).json({ error: errorData.message || 'Failed to update user in Kintone' });
          }
        } else {
          res.status(404).json({ error: 'User record not found' });
        }
      } else {
        const errorData = await recordsResponse.json();
        res.status(recordsResponse.status).json({ error: errorData.message || 'Failed to find user record in Kintone' });
      }
    } catch (error) {
      console.error('Error updating user in Kintone:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  });




// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
