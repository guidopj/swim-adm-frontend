import React from 'react';
import CompetitionCreationContainer from 'components/competition/containers/competitionCreationContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe ('Competition Creation Container', () => {
  const CreateNewCompetition = jest.fn()
  const { store } = configureStore({})

  it('renders correctly', () => {

    const location = {
      state: {
        competitionName: 'a',
      }
    }

    const tree = shallow
      (
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
    expect(toJson(tree)).toMatchSnapshot();
  })
})