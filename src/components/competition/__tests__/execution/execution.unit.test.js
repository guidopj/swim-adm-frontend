import React from 'react';
import Execution from 'components/competition/execution/execution';
import renderer from 'react-test-renderer';
import history from 'history.js'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'


describe ('competition execution with state and props', () => {

    const athletes = [
        {
            dni:"111",
            name:"first athlete",
            surname:"first athlete",
            date_of_birth:"2000-05-27",
            genre: "Male",
        },
        {
            dni:"222",
            name:"second athlete",
            surname:"second athlete",
            date_of_birth:"2000-05-27",
            genre: "Male",
        },
        {
            dni:"333",
            name:"third athlete",
            surname:"third athlete",
            date_of_birth:"2000-05-27",
            genre: "Male",
        },
    ]

    const eventsByName = [ "50 BACKSTROKE", "100 BACKSTROKE", "200 BACKSTROKE"]

const { store } = configureStore({
    competitions: {}
  })

  it('renders correctly', () => {
    const component = renderer.create(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Execution
                    athletes={athletes}
                    eventsByName={eventsByName}
                />
            </ConnectedRouter>
        </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})