import React from 'react';
import Athlete from 'components/competition/athlete/athlete';
import renderer from 'react-test-renderer';
import history from 'history.js'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'


describe ('Athlete with state and props', () => {

    const teams = [
        {
            team_name: "NEW TEAM 1",
            team_name_abbr: "T1",
            team_address: "address 1",
            team_city: "city 1",
        },
        {
            team_name: "NEW TEAM 2",
            team_name_abbr: "T2",
            team_address: "address 2",
            team_city: "city 2",
        },
        {
            team_name: "NEW TEAM 3",
            team_name_abbr: "T3",
            team_address: "address 3",
            team_city: "city 3",
        },
    ]

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

const { store } = configureStore({
    competitions: {}
  })

  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
});

  it('renders correctly', () => {
    const component = renderer.create(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Athlete
                    teams={teams}
                    athletes={athletes}
                />
            </ConnectedRouter>
        </Provider>
    )
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})