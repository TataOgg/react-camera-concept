import React from 'react';
import { render } from './test-utils';
import App from './App';
import { Mode } from "./types";

test('render header', () => {
  const {getByText} = render(<App/>);
  const header = getByText('BankClient');
  expect(header).toBeInTheDocument();
})

test('render photo class at init', () => {
  const {getByTestId} = render(<App/>);
  const appElement = getByTestId('app')
  expect(appElement).toHaveClass('photo')
})

test('do not render header if scan mode', () => {
  const {queryByText} = render(<App/>, {initialState: {ModeReducer: Mode.Scan}});
  const headerElement = queryByText('BankClient')
  expect(headerElement).toBeNull()
})

test('render camera class if scan mode', () => {
  const {getByTestId} = render(<App/>, {initialState: {ModeReducer: Mode.Scan}});
  const linkElement = getByTestId('app')
  expect(linkElement).toHaveClass('camera')
})

test('render Photo if Photo mode', () => {
  const {getByTestId} = render(<App/>);
  const photoElement = getByTestId('photo')
  expect(photoElement).toBeInTheDocument()
})

test('render Scanner if scan mode', () => {
  const {getByTestId} = render(<App/>, {initialState: {ModeReducer: Mode.Scan}});
  const scannerElement = getByTestId('scanner')
  expect(scannerElement).toBeInTheDocument()
})