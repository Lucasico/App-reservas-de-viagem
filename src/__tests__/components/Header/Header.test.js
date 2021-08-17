/* eslint-disable jest/valid-expect */
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Header from '../../../components/Header';

jest.mock('react-redux',() => {
  return {
    useSelector: () => 0
  }
})

describe('Header component tests',() => {
  test('Render correctly component',() => {
    const{getByRole, getByText} = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter> 
      )
      expect(getByRole('img', {
        name: /logo/i
      }));

      expect(getByText(/minhas reservas/i));
    
      expect(getByText(0));
  })
})