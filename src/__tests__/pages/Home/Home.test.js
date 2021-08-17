/* eslint-disable jest/valid-expect */
import {render,screen, waitFor} from '@testing-library/react';
import axiosMock from 'axios-mock-adapter';
import api from '../../../services/http';
import Home from '../../../pages/Home';

const apiMock = new axiosMock(api);

jest.mock('react-redux',() => {
  return{
    useDispatch:() => {} 
  }
})

const mockHandleAdd = jest.fn();

beforeAll(() => {
   apiMock.onGet('trips').reply(200, 
    [
      {
        id: 1,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        status: true,
        title: 'trip mock 1',
      },
      {
        id: 2,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        price: false,
        title: 'trip mock 2',
      },
    ]
  )
});

describe('Page Home tests',() => {

  test('Render correctly page', async() => {
    const{getAllByTestId} =  render(<Home />)
    await waitFor(() => getAllByTestId('title'),{
      timeout:200
    })
    expect(screen.getByText(/trip mock 1/i)).toBeInTheDocument()
    expect(screen.getByText(/trip mock 2/i)).toBeInTheDocument()
  })
  
});