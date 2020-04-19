import { takeLatest, takeEvery,call, put } from 'redux-saga/effects';

import competitionActions from 'actions/competitionActions'
import teamActions from 'actions/teamActions'
import athleteActions from 'actions/athleteActions'

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

function *createNewAthlete(data) {
	try {
		yield call(
			competitionSync.createNewAthlete,
			data.data
		)
		yield put(athleteActions.createNewAthleteSuccess(data))
	} catch (error) {
		yield put(athleteActions.createNewAthleteFailure(error))
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

export default function* competitions() {
	yield takeEvery(actionTypes.GET_EXISTING_COMPETITIONS, getExistingCompetitions)
	yield takeEvery(actionTypes.CREATE_NEW_COMPETITION, createNewCompetition)
	yield takeEvery(actionTypes.CREATE_NEW_TEAM, createNewTeam)
	yield takeEvery(actionTypes.CREATE_NEW_ATHLETE, createNewAthlete)
}

export {
	createNewCompetition,
}