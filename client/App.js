import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native"
import {
  Inconsolata_200ExtraLight,
  Inconsolata_300Light,
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_600SemiBold,
  Inconsolata_700Bold,
  Inconsolata_800ExtraBold,
  Inconsolata_900Black,
  useFonts,
} from "@expo-google-fonts/inconsolata"
import AppLoading from "expo-app-loading"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Header } from "./src/components"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])
  let [fontsLoaded, error] = useFonts({
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderWidth}>
        <Text
          style={{
            color: "white",
            fontFamily: "Inconsolata_700Bold",
            fontSize: 18,
          }}
        >
          {item}
        </Text>
        <TouchableOpacity style={styles.opacityTopIcon} onPress={onPressTrash}>
          <Image
            source={require("./src/assets/trash.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(tasks))
    } catch (error) {
      // Error saving data
    }

    try {
      tasks = await AsyncStorage.getItem("@MySuperStore:key")
      if (tasks !== null) {
        // We have data!!
        console.log(JSON.parse(tasks))
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  const onPressTrash = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
    storeData()
  }

  const onSubmitEditing = () => {
    const newTasks = [...tasks]
    newTasks.unshift(text)
    setTasks(newTasks)
    setText("")
    storeData()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" && "padding"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style={{ backgroundColor: "black" }} />

        <FlatList
          ListHeaderComponent={
            <Header fontFamily="Inconsolata_800ExtraBold" headerText="todo's" />
          }
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item + Date.now() + Math.random()}
          // onRefresh={onRefresh}
          // refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          extraData={tasks}
          numColumns={2}
        />

        <View style={styles.inputRow}>
          <TextInput
            autoCorrect={false}
            blurOnSubmit={true}
            placeholder="new task..."
            placeholderTextColor="#ACACAC"
            style={styles.input}
            value={text}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={onSubmitEditing}
          />
          <TouchableOpacity onPress={onSubmitEditing}>
            <Image
              source={require("./src/assets/submit.png")}
              style={[styles.icon, { width: 24, height: 24 }]}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  input: {
    width: width * 0.9,
    height: height * 0.05,
    color: "white",
    paddingLeft: 15,
  },
  renderWidth: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#ACACAC",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 6,
    margin: 10,
    paddingRight: 50,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  opacityTopIcon: {
    position: "absolute",
    top: 5,
    right: 3,
  },
  opacityBottomIcon: {
    position: "absolute",
    bottom: 5,
    right: 3,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.75,
    borderColor: "white",
    alignItems: "center",
    paddingRight: 5,
  },
})
