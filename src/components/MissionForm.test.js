import React from 'react';
import { render } from '@testing-library/react';
import MissionForm from './MissionForm';

test("Mission Form renders properly", () => {
  const mockGetData = jest.fn();

  const { getByText, queryByText } = render(
    <MissionForm getData={mockGetData} isFetchingData={false} />
  );

    // first thing, we want to test that the button renders
    // and the the loading state isnt
    getByText(/get data/i);
    // expect(get data text).toBeInTheDoc();
    expect(queryByText(/we are fetching data/i)).toBeNull();
});

test("MissionForm transitions to loading state when isFetchingData is true", () => {
  const mockGetData = jest.fn();
  const { getByText, queryByText, rerender } = render(
    <MissionForm getData={mockGetData} isFetchingData={false} />
  );

  getByText(/get data/i);
  expect(queryByText(/we are fetching data/i)).toBeNull();

  rerender(
    <MissionForm getData={mockGetData} isFetchingData={true} />
  );

  getByText(/we are fetching data/i);
  expect(queryByText(/get data/i)).toBeNull();
});
