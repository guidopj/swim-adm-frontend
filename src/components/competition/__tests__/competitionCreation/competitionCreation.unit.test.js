import React from 'react';
import CompetitionCreation from 'components/competition/creation/competitionCreation';
import renderer from 'react-test-renderer';
import history from 'history.js'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'


describe ('Competition Creation with state and props', () => {

const { store } = configureStore({
    competitions: {}
  })

  it('renders correctly', () => {
    const component = renderer.create(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <CompetitionCreation
                />
            </ConnectedRouter>
        </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})