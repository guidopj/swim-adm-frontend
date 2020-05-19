import { takeEvery,call, put } from 'redux-saga/effects';

import competitionActions from 'actions/competitionActions'
import teamActions from 'actions/teamActions'
import athleteActions from 'actions/athleteActions'
import eventActions from 'actions/eventActions'

import competitionSync from 'sync/competitionSync'
import actionTypes from 'actions/types'


function *createNewCompetition(data) {
	try {
		yield call(
			competitionSync.createNewCompetition,
			data.data
		)
		yield put(competitionActions.createNewCompetitionSuccess(data))
	} catch (error) {
		yield put(competitionActions.createNewCompetitionFailure(error))
	}
}

function *createNewTeam(data) {
	try {
		yield call(
			competitionSync.createNewTeam,
			data.data
		)
		yield put(teamActions.createNewTeamSuccess(data))
	} catch (error) {
		yield put(teamActions.createNewTeamFailure(error))
	}
}

function *createNewAthlete(payload) {
	try {
		const athleteData = payload.data
		yield call(
			competitionSync.createNewAthlete,
			athleteData
		)
		yield put(athleteActions.createNewAthleteSuccess(athleteData))
	} catch (error) {
		yield put(athleteActions.createNewAthleteFailure(error))
	}
}

function *createNewEvent(action) {
	try {
		yield call(
			competitionSync.createNewEvent,
			action.data
		)
		yield put(eventActions.createEventSuccess(action.data))
	} catch (error) {
		yield put(eventActions.createEventFailure(error))
	}
}

function *getExistingCompetitions() {
	try {
		const result = yield call(
			competitionSync.getExistingCompetitions,
		)
		yield put(competitionActions.getExistingCompetitionsSuccess(result.data))
	} catch (error) {
		yield put(competitionActions.getExistingCompetitionsFailure(error))
	}
}

function *getTeams() {
	try {
		const result = yield call(
			competitionSync.getTeams,
		)
		yield put(teamActions.getTeamsSuccess(result.data))
	} catch (error) {
		yield put(teamActions.getTeamsFailure(error))
	}
}

function *getCompetition(action) {
	try {
		const result = yield call(
			competitionSync.getCompetition,
			action.competitionName
		)
		yield put(competitionActions.getCompetitionSuccess(action.competitionName,result.data))
	} catch (error) {
		yield put(competitionActions.getCompetitionFailure(error))
	}
}

function *getAthletes() {
	try {
		const result = yield call(
			competitionSync.getAthletes,
		)
		yield put(athleteActions.getAthletesSuccess(result.data))
	} catch (error) {
		yield put(athleteActions.getAthletesFailure(error))
	}
}

function *createNewInscriptions(action){
	try {
		const result = yield call(
			competitionSync.createNewInscriptions,
			action.data,
		)
		yield put(athleteActions.getAthletesSuccess(result.data))
	} catch (error) {
		yield put(athleteActions.getAthletesFailure(error))
	}
}

export default function* competitions() {
	yield takeEvery(actionTypes.GET_COMPETITION, getCompetition)
	yield takeEvery(actionTypes.GET_EXISTING_COMPETITIONS, getExistingCompetitions)
	yield takeEvery(actionTypes.CREATE_NEW_COMPETITION, createNewCompetition)
	yield takeEvery(actionTypes.CREATE_NEW_TEAM, createNewTeam)
	yield takeEvery(actionTypes.CREATE_NEW_ATHLETE, createNewAthlete)
	yield takeEvery(actionTypes.GET_TEAMS, getTeams)
	yield takeEvery(actionTypes.GET_ATHLETES, getAthletes)
	yield takeEvery(actionTypes.CREATE_EVENT, createNewEvent)
	yield takeEvery(actionTypes.CREATE_NEW_INSCRIPTIONS, createNewInscriptions)
}

export {
	createNewCompetition,
}