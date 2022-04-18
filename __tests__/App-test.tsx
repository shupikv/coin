import 'react-native';
import React from 'react';
import App from '../app/App';
import { render } from '@testing-library/react-native';

jest.mock('../app/navigation/RootNavigator', () => 'RootNavigator');

it('renders correctly', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('AppRoot')).toBeDefined();
});
