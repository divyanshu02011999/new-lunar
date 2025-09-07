import fs from 'fs';
import path from 'path';

export async function handler(event) {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (err) {
      return {
        statusCode: 400,
        body: 'Malformed request body',
      };
    }
    const { username, password } = body;
    if (!username || !password) {
      return {
        statusCode: 400,
        body: 'Missing username or password',
      };
    }
    const usersPath = path.join(__dirname, 'users.json');
    let users = [];
    if (fs.existsSync(usersPath)) {
      try {
        users = JSON.parse(fs.readFileSync(usersPath));
      } catch (err) {
        return {
          statusCode: 500,
          body: 'Error reading users file',
        };
      }
    }
    if (users.find(u => u.username === username)) {
      return {
        statusCode: 409,
        body: 'User already exists',
      };
    }
    users.push({ username, password });
    try {
      fs.writeFileSync(usersPath, JSON.stringify(users));
    } catch (err) {
      return {
        statusCode: 500,
        body: 'Error writing users file',
      };
    }
    return {
      statusCode: 200,
      body: 'Signup successful',
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: 'Server error',
    };
  }
}
