import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screen/Home';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryWhite: '#FFFFFF',
    $outline: 0,
})

const App = () => (
    <Home>

    </Home>
);

export default App;
