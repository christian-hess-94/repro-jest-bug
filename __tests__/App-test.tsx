/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Card from '../src/components/card';

it('renders correctly', () => {
  renderer.create(<App />);
  // expect(1).toBe(1);
});
