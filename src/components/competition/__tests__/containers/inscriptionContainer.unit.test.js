import React from 'react';
import InscriptionContainer from 'components/competition/containers/inscriptionContainer';
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe ('Inscription Container', () => {
    const createNewInscriptions = jest.fn()
    const addInscription = jest.fn()
    const deleteInscription = jest.fn()
        
  const { store } = configureStore()

  it('renders correctly', () => {
    const tree =
      shallow(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <InscriptionContainer 
              actions={{
                createNewInscriptions,
                addInscription,
                deleteInscription,
              }}
            />
          </ConnectedRouter>
        </Provider>
    )
    expect(toJson(tree)).toMatchSnapshot();
  })
})