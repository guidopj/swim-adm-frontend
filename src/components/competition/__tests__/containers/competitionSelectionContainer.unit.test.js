import React from 'react';
import CompetitionSelectionContainer from 'components/competition/containers/competitionSelectionContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe ('Competition Selection Container', () => {
  const getExistingCompetitions = jest.fn()
  const getCompetition = jest.fn()
  const moveToCreation = jest.fn()
  const { store } = configureStore({})

  it('renders correctly', () => {

    const tree = shallow
      (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <CompetitionSelectionContainer 
              actions={{
                getCompetition,
                getExistingCompetitions,
                moveToCreation,
              }}
            />
          </ConnectedRouter>
        </Provider>
    )
    expect(toJson(tree)).toMatchSnapshot();
  })
})