// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock'
import { unmountComponentAtNode } from "react-dom";

jest.mock("./components/camera", ()=> {
  return function DummyCamera(){
    return ("<div>Fake Camera</div>")
  }
})
let container:any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  container.id = 'root'
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})