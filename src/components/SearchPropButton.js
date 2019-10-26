import React from "react";
import { View, TextInput, StyleSheet, Picker } from "react-native";
import {
  Autocomplete,
  withKeyboardAwareScrollView
} from "react-native-dropdown-autocomplete";
import { EvilIcons } from "@expo/vector-icons";
import { calcWidth, calcHeigt } from "../../responsive/ratio.responsive";

const SearchPropButton = ({ placeholder, iconname, setContent, content }) => {
  // var items = [
  //   //name key is must.It is to show the text in front
  //   { id: 1, name: "angellist" },
  //   { id: 2, name: "codepen" },
  //   { id: 3, name: "envelope" },
  //   { id: 4, name: "etsy" },
  //   { id: 5, name: "facebook" },
  //   { id: 6, name: "foursquare" },
  //   { id: 7, name: "github-alt" },
  //   { id: 8, name: "github" },
  //   { id: 9, name: "gitlab" },
  //   { id: 10, name: "instagram" }
  // ];

  return (
    <View style={styles.containerStyle}>
      <EvilIcons style={styles.iconStyle} name={`${iconname}`} />
      <TextInput
        style={styles.inputStyle}
        placeholder={`${placeholder}`}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={newText => setContent(newText)}
        value={content}
      />
      {/* <Autocomplete
        containerStyle={styles.inputStyle}
        highlightText
        // scrollToInput={ev => scrollToInput(ev)}
        handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
        // onDropdownClose={() => onDropdownClose()}
        // onDropdownShow={() => onDropdownShow()}
        minimumCharactersCount={2}
        valueExtractor={item => item.name}
        placeholder={placeholder}
        initialValue={content}
        autoCorrect={false}
        onChangeText={text => setContent(text)}
        fetchData={() => {
          items;
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 7,
    flexDirection: "row",
    padding: calcWidth(3),
    marginHorizontal: calcWidth(5),
    height: calcHeigt(7),
    borderColor: "#C7B0FA",
    borderWidth: 2,
    flex: 1,
    marginVertical: calcHeigt(2)
  },
  inputStyle: {
    flex: 1,
    fontSize: 15
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: calcWidth(2),
    color: "#C7B0FA"
  }
});

export default SearchPropButton;
