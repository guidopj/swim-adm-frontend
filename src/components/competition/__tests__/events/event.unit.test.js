import React from 'react';
import Event from 'components/competition/events/event';
import renderer from 'react-test-renderer';
import history from 'history.js'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'


describe ('Events with state and props', () => {

    const events = [
        {
            eventNro: 1,
            meters: 50,
            style: "BACKSTROKE",
            genre: "MALE",
            category_from_age: 18,
            category_to_age: 23
        },
        {
            eventNro: 2,
            meters: 50,
            style: "BACKSTROKE",
            genre: "MALE",
            category_from_age: 18,
            category_to_age: 23
        },
        {
            eventNro: 3,
            meters: 50,
            style: "BACKSTROKE",
            genre: "MALE",
            category_from_age: 18,
            category_to_age: 23
        },
    ]

const { store } = configureStore({
    competitions: {}
  })

  it('renders correctly', () => {
    const component = renderer.create(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Event
                    events={events}
                />
            </ConnectedRouter>
        </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})