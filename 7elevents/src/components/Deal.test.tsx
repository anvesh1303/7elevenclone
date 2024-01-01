import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Deal from './Deal';
import { RootState } from '../redux/store';
jest.mock('axios');
jest.mock('react-redux');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedRedux = jest.requireMock('react-redux');

const dealsMock = [{ _id: '1', ImageUrl: 'url1', Description: 'Deal1', Disclaimer: 'Disclaimer1', StoreId: 'store1', ValidTill: '1-1-2024' }];

describe('Deal Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear();
    mockedAxios.get.mockClear();

    mockedRedux.useDispatch.mockReturnValue(mockDispatch);
    mockedRedux.useSelector.mockImplementation((callback: (state: RootState) => any) => 
  callback({ 
    deals: {
      allDeals: dealsMock, 
      filteredDeals: dealsMock, 
      isFoodDropdown: false, 
      login: false 
    } 
  })
);

    mockedAxios.get.mockResolvedValue({ data: dealsMock });
  });



  test('renders DEALS heading', () => {
    render(<Deal />);
    expect(screen.getByText('DEALS')).toBeInTheDocument();
  });



  test('fetches deals on component mount', async () => {
    render(<Deal />);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:5000/deals');
  });



  test('dispatches setDeals action with fetched data', async () => {
    render(<Deal />);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled(); 
    });
  });



  test('renders each deal with the correct data', async () => {
    render(<Deal />);
    await waitFor(() => {
      dealsMock.forEach((deal, index) => {
        expect(screen.getAllByTestId('deal-description')[index]).toHaveTextContent(deal.Description);
        expect(screen.getAllByTestId('deal-disclaimer')[index]).toHaveTextContent(deal.Disclaimer);
      });
    });
  });


  
});
