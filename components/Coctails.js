import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Picker, 
  Image, 
  FlatList, 
  Button} from 'react-native';
import 'react-native-gesture-handler';

function Coctails({navigation}) {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [datas, setData] = React.useState([])
  React.useEffect(() => {
    go()
  }, []);

  const go = async (val)=>{
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    let data = await resp.json()
    setData(data.drinks)
    console.log(data);
  }
  const coctails = async (val)=>{
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?'+val)
    let data = await resp.json()
    setData(data.drinks)
    console.log(data);
  }
  return (

    <View style={styles.container}>
      <Text style={styles.txt}>Coctail menu!!!</Text>
      <Picker style={styles.selector}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue), coctails(itemValue)}}
      >
        <Picker.Item label="All coctails" value="c=Cocktail" />
        <Picker.Item label="Alcoholic" value="a=Alcoholic" />
        <Picker.Item label="Non-Alcoholic" value="a=Non_Alcoholic" />
      </Picker>
      <FlatList 
     data={datas}
     renderItem={({item})=>(
       <View>
        <Text style={styles.txtContent}>{item.strDrink}</Text>
       <Image style={styles.img} source={{uri:item.strDrinkThumb}} />

       <View style={styles.btnController}>
      <Button 
      title='Подробнее'
      onPress={() => navigation.navigate('Recipe', { name: item.strDrink })}
      />
       </View>
       </View> 
       )} 
       />
    </View>
  );
}
export default Coctails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: '15%',

  },
  txt:{
    fontSize:35,
    color:'#000'
  },
  selector:{
    height: 50, 
    width: 150,
    borderColor:'white',
    borderWidth:1,
    color: 'blue'
  },
  img:{
    width: 200,
    height:200,
    marginTop:'10%'
  },
  txtContent:{
    color:'white',
    fontSize:15,
    marginTop:'20%'
  },
  btnController:{
    width:200,
    marginTop:'5%'
  }
  
});
