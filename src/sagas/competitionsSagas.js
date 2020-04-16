import { takeLatest, takeEvery,call, put } from 'redux-saga/effects';
import competitionActions from 'actions/competitionActions'

import competitionSync from 'sync/competitionSync'
import actionTypes from 'actions/types'


function *createNewCompetition(data) {
	console.log(data)
	try {
		yield call(
			competitionSync.createNewCompetition,
			data
		)
		yield put(competitionActions.createNewCompetitionSuccess(data))
	} catch (error) {
		yield put(competitionActions.createNewCompetitionFailure(error))
	}
}

export default function* competitions() {
	
	yield takeEvery(actionTypes.CREATE_NEW_COMPETITION,
		createNewCompetition)
}

export {
	createNewCompetition,
}