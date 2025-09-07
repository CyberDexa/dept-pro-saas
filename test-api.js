const fetch = require('node-fetch');

async function testAPI() {
  try {
    const response = await fetch('https://dspt-pro-saas-8zbq0wxu6-cyberdexas-projects.vercel.app/api/dspt/sections');
    const data = await response.text();
    console.log('Response status:', response.status);
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testAPI();
