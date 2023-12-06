import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenHeaderBtn } from '../components';
import { COLORS, icons, SIZES } from '../constants';
import { Welcome } from '../components';
//import Popularjobs from '../components';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: COLORS.lightAppBar },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.chevronLeft}
                dimension="60%"
              />
            ),
            headerTitle: 'New Beneficiary',
          }}
        />

          {/* Add the PopularJobsScreen to the navigator */}
          {/* <Stack.Screen
          name="PopularJobs"
          component={Popularjobs}
          options={{
            headerStyle: { backgroundColor: COLORS.lightAppBar },
            headerShadowVisible: false,
            headerTitle: 'Popular Jobs',
          }}
        /> */}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        {/* Your content goes here */}
      </View>

      <Welcome />

      {/* Uncomment the following line when you have the Popularjobs component */}
      {/* <Popularjobs /> */}
    </ScrollView>
  );
};

export default Home;
