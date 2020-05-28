import React from 'react';
import TeamContainer from 'components/competition/containers/teamContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe ('Team Container', () => {
    const createNewTeam = jest.fn()
    const getTeams = jest.fn()
        
    const { store } = configureStore()

    it('renders correctly', () => {
        const tree =
        shallow(
            <Provider store={store}>
            <ConnectedRouter history={history}>
                <TeamContainer 
                actions={{
                    createNewTeam,
                    getTeams,
                }}
                />
            </ConnectedRouter>
            </Provider>
        )
        expect(toJson(tree)).toMatchSnapshot();
    })
})