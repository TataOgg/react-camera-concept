import React from 'react';
import Photo from "./photo";
import { render } from "../test-utils";
import { PhotoStatus } from "../types";

test('render empty photo', () => {
  const {queryByAltText} = render(<Photo/>)
  const emptyElement = queryByAltText('empty')
  expect(emptyElement).toBeInTheDocument()

})

test('render photo module if photo', () => {
  let fakePhoto = new Image()
  fakePhoto.alt = 'test'
  const {getByTestId} = render(<Photo/>,
    {
      initialState: {
        PhotoReducer: {
          currentPhoto: {
            photo: fakePhoto,
            status: PhotoStatus.Pending
          }
        }
      }
    })
  const photoElement = getByTestId('photo-canvas')
  expect(photoElement).toBeInTheDocument()
})

test('render retake button if photo error', () => {
  let fakePhoto = new Image()
  fakePhoto.alt = 'test'
  const {getByText} = render(<Photo/>,
    {
      initialState: {
        PhotoReducer: {
          currentPhoto: {
            photo: fakePhoto,
            status: PhotoStatus.Error
          }
        }
      }
    })
  const retakeElement = getByText('Retake picture')
  expect(retakeElement).toBeInTheDocument()
})

test('render pill error if photo error', () => {
  let fakePhoto = new Image()
  fakePhoto.alt = 'test'
  const {getByText} = render(<Photo/>,
    {
      initialState: {
        PhotoReducer: {
          currentPhoto: {
            photo: fakePhoto,
            status: PhotoStatus.Error
          }
        }
      }
    })
  const rejectedElement = getByText('Rejected')
  expect(rejectedElement).toBeInTheDocument()
})

test('render pill success if photo error', () => {
  let fakePhoto = new Image()
  fakePhoto.alt = 'test'
  const {getByText} = render(<Photo/>,
    {
      initialState: {
        PhotoReducer: {
          currentPhoto: {
            photo: fakePhoto,
            status: PhotoStatus.Taken
          }
        }
      }
    })
  const rejectedElement = getByText('Accepted')
  expect(rejectedElement).toBeInTheDocument()
})