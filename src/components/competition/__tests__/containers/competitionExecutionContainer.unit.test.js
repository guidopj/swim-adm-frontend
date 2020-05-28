import React from 'react';
import CompetitionExecutionContainer from 'components/competition/containers/competitionExecutionContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe ('Competition Execution Container', () => {
  const getAthletes = jest.fn()
  const { store } = configureStore({})

  it('renders correctly', () => {

    const tree = shallow
      (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <CompetitionExecutionContainer 
              actions={{
                getAthletes,
              }}
            />
          </ConnectedRouter>
        </Provider>
    )
    expect(toJson(tree)).toMatchSnapshot();
  })
})