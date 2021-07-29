import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import styleH from "./styleH";


const image = {
  uri:
    'https://i.pinimg.com/originals/07/96/05/079605f8c4ab678168bcab6ecebcae9e.jpg',
};



export default function Home() {
  return (
    
    <View style={styleH.mainContainer}>
    <View>
            <Image
              style={{ marginTop:10, width: 425, height: 350 }}
              source={image}
            />
</View>

<View style={styleH.textContainer}>  
<ScrollView>
<Text>                             Welcome in the Mars Exploration. {"\n"}
{"\n"}
Enjoy of pictures taken by the 3 Rovers of the expedition.{"\n"}

The Rovers are : Spirit, Opportunity and Curiosity .{"\n"}

To count the number of days of the mission for every Rover in mars, we use the unit " Sol ". {"\n"}
The Marsian's days are a little longer than an Earth day.
{"\n"}
{"\n"}
{"\n"}
Spirit:{"\n"}
- Activity : 06 years,{"\n"}
- Landing date: 2010-03-22,{"\n"}
- End of the mission: planned 2004-01-04,
{"\n"}
{"\n"}
Opportunity:{"\n"}
- Activity : 15 years,{"\n"}
- Landing date: 2004-01-25,{"\n"}
- End of the mission: 2019-02-13,
{"\n"}
{"\n"}
Curiosity:{"\n"}
- Activity : 14 years,{"\n"}
- Landing date: 2012-08-26,{"\n"}
- End of the mission: planned to 2026,
{"\n"}
{"\n"}
</Text>
</ScrollView>
</View>

        
      
        
        
    </View>
    
  );
}
