import React from 'react';
import AthleteContainer from 'components/competition/containers/athleteContainer';
import renderer from 'react-test-renderer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'

describe ('Athlete Container', () => {
  const createNewAthlete = jest.fn()
  const { store } = configureStore({
    competitions: {
      teams: [
        {
          team_name: "TEAM 1",
          team_name_abbr: "T1",
          team_address: "addr",
          team_city: "city 1",
        }
      ]
    }
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AthleteContainer 
              actions={{
						    createNewAthlete,
              }}
            />
          </ConnectedRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
})