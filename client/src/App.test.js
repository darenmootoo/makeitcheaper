import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ListDisplay from './components/ListDisplay';
import Form from './components/Form';

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
  expect(ListComponent.length).toEqual(3)
})

// it('updates the Form state when then input field is changed', () => {

// })

// it('receives an object with shorturl and URL when POST to localhost:9000', () => {

// })
