import fs from 'fs';
import path from 'path';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }
  const { username, password } = JSON.parse(event.body);
  if (!username || !password) {
    return {
      statusCode: 400,
      body: 'Missing username or password',
    };
  }
  const usersPath = path.join(__dirname, 'users.json');
  let users = [];
  if (fs.existsSync(usersPath)) {
    users = JSON.parse(fs.readFileSync(usersPath));
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return {
      statusCode: 401,
      body: 'Invalid credentials',
    };
  }
  return {
    statusCode: 200,
    body: 'Login successful',
  };
}
