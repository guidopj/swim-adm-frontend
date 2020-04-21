import axios from 'axios';
const baseURL = 'http://localhost:8000'

async function createNewCompetition(data) {
    await axios.post(
        `${baseURL}/competitions/create`, data
    ).then(response => {
        return response
      })
}

async function createNewTeam(data) {
    await axios.post(
        `${baseURL}/teams/create`, data
    ).then(response => {
        return response
      })
}

async function createNewAthlete(data) {
    await axios.post(
        `${baseURL}/athletes/create`, data
    ).then(response => {
        return response
      })
}

async function getExistingCompetitions() {
    return axios.get(
        `${baseURL}/competitions`)
        .then(response => {
            return response
        })
}

async function getTeams() {
    return axios.get(
        `${baseURL}/teams`)
        .then(response => {
            return response
        })
}

export default {
    createNewCompetition,
    createNewTeam,
    getExistingCompetitions,
    createNewAthlete,
    getTeams
}