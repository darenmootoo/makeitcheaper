import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ListDisplay from './components/ListDisplay';
import Form from './components/Form';
import moxios from 'moxios';

Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without error', () => {
  const wrapper = shallow(<App />)
  const AppComponent = wrapper.find("[data-test='app-component']")
  expect(AppComponent.length).toBe(1)
})

it('renders input field', () => {
  const wrapper = shallow(<Form />)
  const FormInput = wrapper.find("[data-test='form-component'] [data-test='input-field']")
  expect(FormInput.length).toBe(1)
})

it('renders input field, list of URLs', () => {
  const wrapper = mount(<ListDisplay items={[]} />)
  wrapper.setProps({ items: [{ "short-url": "/8861", "url": "http://www.youtube.com" }, { "short-url": "/8862", "url": "http://www.google.com" }] })
  const ListComponent = wrapper.find("[data-test='list-display'] tbody tr")
  expect(ListComponent.length).toEqual(2)
})

it('updates the Form state when then input field is changed', async () => {
  const wrapper = mount(<Form />)
  wrapper.instance().handleChange({ "target": { "value": "http://www.youtube.com" } })
  expect(wrapper.state().url).toEqual('http://www.youtube.com')
})

it('receives an object with shorturl and URL when POST to localhost:9000', async () => {
  moxios.install()
  const wrapper = mount(<App />)
  const response = { "short-url": "/8718", "url": "http://www.youtube.com" }
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: response
    })
  })
  await wrapper.instance().handleSubmit({ preventDefault: () => { } }, "www.youtube.com")
  moxios.uninstall()
})
