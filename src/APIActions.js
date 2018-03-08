import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3000/"

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json'
}

export const createEvent = (data) => {
    return fetch(`${API_URL}events`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
}
