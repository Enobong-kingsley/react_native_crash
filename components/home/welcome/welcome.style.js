import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  roundedCenterImage: {
    alignSelf: 'center', // Align the image horizontally to the center
    marginVertical: 10, // Adjust the vertical margin as needed
    resizeMode: 'contain', // Set the image resizing mode
    borderRadius: 50, // Adjust the border radius to make it rounded (use half of the image size for a circular effect)
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 5,
    marginLeft: 10
  },
  iconWrapper: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: '#008FB71A', // Add background color
    borderColor: '#0090B7',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: 16
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 5, // Adjust padding as needed
  },

  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin:20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  horizontalContainer: {
    marginStart: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // or 'space-around' based on your preference
    marginVertical: SIZES.medium,
   
  },
  
  dropdownContainer: {
    
    flex: 1,
    marginRight: SIZES.medium,
  },

  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
