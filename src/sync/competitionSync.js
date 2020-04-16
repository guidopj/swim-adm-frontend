import axios from 'axios';
const baseURL = 'http://localhost:8000/competitions'

async function createNewCompetition(data) {
    await axios.post(
        `${baseURL}/create`, data
    ).then(response => {
        return response
      })
}

export default {
    createNewCompetition,
}