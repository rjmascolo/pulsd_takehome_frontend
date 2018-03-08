import fetch from 'isomorphic-fetch';

const API_URL = "https://pulsd-take-home-backend.herokuapp.com/"
// const API_URL = "http://localhost:3000/"

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

export const getEvents = (data) => {
    return fetch(`${API_URL}events`)
}
