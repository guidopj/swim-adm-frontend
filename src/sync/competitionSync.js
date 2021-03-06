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

async function getCompetition(competition_name) {
    return axios.get(
        `${baseURL}/competitions/${competition_name}`)
        .then(response => {
            return response
        })
}

async function getAthletes() {
    return axios.get(
        `${baseURL}/athletes/`)
        .then(response => {
            return response
        })
}

async function createNewEvent(data) {
    await axios.post(
        `${baseURL}/events/create`, data
    ).then(response => {
        return response
      })
}

async function createNewInscriptions(data) {
    await axios.post(
        `${baseURL}/inscriptions/create`, data
    ).then(response => {
        return response
      })
}

export default {
    createNewCompetition,
    createNewTeam,
    getExistingCompetitions,
    createNewAthlete,
    getTeams,
    getCompetition,
    getAthletes,
    createNewEvent,
    createNewInscriptions,
}