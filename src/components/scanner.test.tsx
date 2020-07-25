import React from 'react';
import Scanner from "./scanner";
import { render } from "../test-utils";
import { PhotoStatus } from "../types";

test('render success span if photo ok', () => {
  let fakePhoto = new Image()
  fakePhoto.alt = 'test'
  const {getByText} = render(<Scanner/>,
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
  const takenElement = getByText('Picture Taken!')
  expect(takenElement).toBeInTheDocument()
})

test('dont render success span if photo not ok', () => {
  let fakePhoto = new Image()
  fakePhoto.alt = 'test'
  const {queryByText} = render(<Scanner/>,
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
  const takenElement = queryByText('Picture Taken!')
  expect(takenElement).toBeNull()
})