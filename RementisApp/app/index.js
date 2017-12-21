import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screen/Home';
import Feed from './screen/Feed';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryWhite: '#FFFFFF',
    $outline: 0,
})

const App = () => (
    <Feed>

    </Feed>
);

export default App;
