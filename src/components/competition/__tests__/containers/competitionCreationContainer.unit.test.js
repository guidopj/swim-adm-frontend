import React from 'react';
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer';
import renderer from 'react-test-renderer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'

describe ('Competition Creation Container', () => {
  const CreateNewCompetition = jest.fn()
  const { store } = configureStore({})

  it('renders correctly', () => {

    const location = {
        location: {
            state: {
                competitionName: 'a',
            }
        }
    }

    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <CompetitionCreationContainer 
              actions={{
                CreateNewCompetition,
              }}
              location={location}
            />
          </ConnectedRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
})