
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
      </View>
    )
  }
  const [isRefreshing, setIsRefreshing] = useState(false)
  const _refresh = () => {
    setIsRefreshing(false)
  }
  const onRefresh = () => {
    setIsRefreshing(true)
    _refresh()
  }
   

  const onSubmitEditing = async (value) => {
    try {
      const jsonValue = JSON.stringify(value) 
      await AsyncStorage.setItem("key", jsonValue)
    } catch (e) {}

    notes.push(note)
    console.log(notes)
    console.log("Done.")
  }









<FlatList
data={notes.reverse()}
renderItem={renderItem}
keyExtractor={(item) => item.id}
onRefresh={onRefresh}
refreshing={isRefreshing}
showsVerticalScrollIndicator={false}
extraData={notes}
/>

<TextInput
autoCorrect={false}
blurOnSubmit={true}
placeholder="new note..."
style={styles.input}
value={note}
onChangeText={(text) => setNote(text)}
onSubmitEditing={onSubmitEditing}
/>