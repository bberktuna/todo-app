//! DARK MODE ICON ON THE RIGT SIDE OF HEADER
//! OPEN DRAWER WHEN PRESSED SETTINGS

import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Header = ({ headerText, fontFamily }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: fontFamily, color: "white", fontSize: 28 }}>
        {headerText}
      </Text>
      <TouchableOpacity style={styles.iconOpacity}>
        <Image source={require("../assets/settings.png")} style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    width: width,
    justifyContent: "space-between",
    marginLeft: 10,
    backgroundColor: "black",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
  iconOpacity: {
    marginRight: 10,
  },
})
