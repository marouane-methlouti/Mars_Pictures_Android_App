import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import styleS from './styleS';

const image = {
  uri:
    'https://www.numerama.com/wp-content/uploads/2019/02/opportunity-rover-mars-nasa.jpg',
};

export default function Spirit() {
  const [pic, setPic] = useState([]);
  const [nbDay, setNbDay] = useState('');

  useEffect(() => {
    pictures();
  }, []);

  function handlePic(text) {
    setNbDay(text);
  }

  function pictures() {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${nbDay}&api_key=Q3072AUR2Se7xPzy1r4Oavp16P9H3TaZ8JISvN4g`
    )
      .then((res) => res.json())
      .then((jsonRes) => {
        setPic(jsonRes);
        console.log(jsonRes);
      });
  }

  return (
    <View style={styleS.mainContainer}>
      <View style={styleS.headerContainer}>
         <View>
        <Text>Sol : {pic.photos?.[0]?.sol}</Text>
      </View>
      <View>
        <Text>Earth Date: {pic.photos?.[0]?.earth_date}</Text>
      </View>
      </View>
      <ScrollView>
        {pic.photos?.map((photos) => (
          <View style={styleS.dayContainer}>
            <Image
              style={{ height: 500, margin: 1 }}
              source={{
                uri: photos?.img_src,
              }}
            />
          </View>
        ))}
      </ScrollView>

      <View>
        <TextInput
          style={{
            textAlign: 'center',
            borderWidth: 1,
            height: 30,
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            fontSize: 15,
          }}
          onChangeText={handlePic}
          placeholder="    The Solar's Number     "
          placeholderTextColor="#000000"
        />
      </View>
      <Button
        style={{
          marginBottom: 5,
          marginTop: 5,
          marginLeft: 5,
          marginRight: 5,
        }}
        title="Enter"
        onPress={pictures}
      />
    </View>
  );
}