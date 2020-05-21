import React from 'react';
import AthleteContainer from 'components/competition/containers/athleteContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

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
    const tree =
      shallow(
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
    expect(toJson(tree)).toMatchSnapshot();
  })
})