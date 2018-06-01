import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from './IstasyonOperasyon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IstasyonOperasyon />, div);
  ReactDOM.unmountComponentAtNode(div);
});