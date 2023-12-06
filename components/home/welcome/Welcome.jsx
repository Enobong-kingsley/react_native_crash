import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import CheckBox from 'react-native-check-box';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, images, SIZES } from '../../../constants';
import TextInputWithIcon from '../../../app/textInputWithIcon';
import Button from '../../../app/button';

const Welcome = () => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState(null);
  const [dropdown2Value, setDropdown2Value] = useState(null);

  const handleButtonPress = () => {
    // Handle button press logic
    router.push('/PopularJobs');
  };

  return (
    <View>
      <TouchableOpacity>
        <Image source={images.profile} style={styles.roundedCenterImage} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Contact info</Text>
      </View>

      {/* Reusable TextInputWithIcon component with different icons */}
      <TextInputWithIcon placeholder="First name" icon={icons.chevronLeft} />
      <TextInputWithIcon placeholder="Last name" icon={icons.chevronRight} />
      <TextInputWithIcon placeholder="Mobile number" icon={icons.heart} />
      <TextInputWithIcon
        placeholder="Residential address"
        icon={icons.menu}
      />

      <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={() => {
          setChecked(!isChecked);
        }}
        isChecked={isChecked}
        rightText="Same as my address"
        checkBoxColor='#0090B7'

      />

       {/* Horizontal layout for dropdowns */}
       <View style={styles.horizontalContainer}>
        <View style={styles.dropdownContainer}>
          
          <DropDownPicker
            items={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            defaultValue={dropdown1Value}
            containerStyle={{ height: 40, width: 150}}
            onChangeItem={(item) => setDropdown1Value(item.value)}
          />
        </View>

        <View style={styles.dropdownContainer}>
         
          <DropDownPicker
            items={[
              { label: 'Choice A', value: 'choiceA' },
              { label: 'Choice B', value: 'choiceB' },
              { label: 'Choice C', value: 'choiceC' },
            ]}
            defaultValue={dropdown2Value}
            containerStyle={{ height: 40,width: 150 }}
            onChangeItem={(item) => setDropdown2Value(item.value)}
          />
        </View>
      </View>


      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Emergency Contact info</Text>
      </View>

      {/* Reusable TextInputWithIcon component with different icons */}
      <TextInputWithIcon placeholder="Full name" icon={icons.heart} />
      <TextInputWithIcon placeholder="Relationship" icon={icons.heart} />
      <TextInputWithIcon placeholder="Mobile number" icon={icons.heart} />

      <Button label="add beneficiary" onPress={handleButtonPress} />
    </View>
  );
};

export default Welcome;
