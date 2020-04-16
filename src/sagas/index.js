import { all } from 'redux-saga/effects';
import createNewCompetition from './competitionsSagas';

export default function *rootSaga() {
	yield all([
		createNewCompetition(),
	])
}