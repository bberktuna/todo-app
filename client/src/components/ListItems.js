// import React, { useState } from "react"
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   TouchableHighlight,
// } from "react-native"
// import { SwipeListView } from "react-native-swipe-list-view"
// import { TodoText } from "../../../../../../AppData/Local/Temp/Rar$DIa3108.35554/appStyles"

// const ListItems = ({ fontFamily, todos, setTodos, fontFamilyDate }) => {
//   const [swipedRow, setSwipedRow] = useState(null)

//   return (
//     <SwipeListView
//       data={todos}
//       renderItem={(data) => {
//         //const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText
//         return (
//           <TouchableHighlight
//             style={styles.renderView}
//             onPress={() => console.log({ todos })}
//           >
//             <View>
//               <Text
//                 style={{ fontFamily: fontFamily, color: "white", fontSize: 16 }}
//               >
//                 {data.text}
//               </Text>
//               <Text style={{ fontFamily: fontFamilyDate, color: "white" }}>
//                 {data.date}
//               </Text>
//             </View>
//           </TouchableHighlight>
//         )
//       }}
//       renderHiddenItem={() => {
//         return (
//           <View>
//             <TouchableOpacity onPress={() => console.log("pressed trash")}>
//               <Image
//                 source={require("../assets/trash.png")}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </View>
//         )
//       }}
//       leftOpenValue={80}
//       previewRowKey={"1"}
//       previewOpenValue={80}
//       previewOpenDelay={3000}
//       disableLeftSwipe={true}
//       showsVerticalScrollIndicator={false}
//       style={{
//         flex: 1,
//         paddingBottom: 30,
//         marginBottom: 40,
//       }}
//       onRowOpen={(rowKey) => {
//         setSwipedRow(rowKey)
//       }}
//       onRowClose={() => {
//         setSwipedRow(null)
//       }}
//     />
//   )
// }

// export default ListItems

// const styles = StyleSheet.create({
//   renderView: {
//     width: "100%",
//     height: 60,
//     borderWidth: 3,
//     borderColor: "white",
//   },
//   icon: {
//     width: 40,
//     height: 40,
//     alignItems: "center",
//   },
// })
