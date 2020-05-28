import React from 'react';
import EventContainer from 'components/competition/containers/eventContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe ('Event Container', () => {
  const createEvent = jest.fn()
  const { store } = configureStore()

  it('renders correctly', () => {
    const tree =
      shallow(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <EventContainer 
              actions={{
                createEvent,
              }}
            />
          </ConnectedRouter>
        </Provider>
    )
    expect(toJson(tree)).toMatchSnapshot();
  })
})