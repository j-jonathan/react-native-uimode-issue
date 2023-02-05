import React, {useEffect} from 'react';
import {Appearance, Text, View} from 'react-native';

function App(): JSX.Element {
  const [colorScheme, setColorScheme] = React.useState(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setColorScheme(Appearance.getColorScheme());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={{flex: 1, backgroundColor: isDarkMode ? 'black' : 'white'}}>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>
        isDarkMode: {isDarkMode ? 'true' : 'false'}
      </Text>
    </View>
  );
}

export default App;
