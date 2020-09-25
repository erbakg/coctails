import React from 'react'
import { 
  StyleSheet, 
  View,
    Text, } from 'react-native';

function Recipe({navigation, route}) {
    const [datas, setData] = React.useState('')
    React.useEffect(() => {
        go()
      }, [route.params?.name]);
    const go = async ()=>{
        let name = route.params?.name
        let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ name)
        let data = await resp.json()
        console.log(data);
        setData(data.drinks[0])
      }
    return(
      <View style={styles.container}>
        <Text style={styles.mainTxt}>Состав</Text>
        <Text style={styles.txt} onPress={() => navigation.navigate('Ingredient', { name: datas.strIngredient1})}>1.{datas.strIngredient1}</Text>
        <Text style={styles.txt} onPress={() => navigation.navigate('Ingredient', { name: datas.strIngredient2})}>2.{datas.strIngredient2}</Text>
        <Text style={styles.txt} onPress={() => navigation.navigate('Ingredient', { name: datas.strIngredient3})}>3.{datas.strIngredient3}</Text>
        <Text style={styles.txt} onPress={() => navigation.navigate('Ingredient', { name: datas.strIngredient4})}>4.{datas.strIngredient4}</Text>
        <Text style={styles.mainTxt}>Пропорции</Text>
        <Text style={styles.txt}>4.{datas.strMeasure1}</Text>
        <Text style={styles.txt}>4.{datas.strMeasure2}</Text>
        <Text style={styles.txt}>4.{datas.strMeasure3}</Text>
        <Text style={styles.txt}>4.{datas.strMeasure4}</Text>
        
       

      </View>
    )
}

export default Recipe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: '15%',
  },
  txt:{
    fontSize:20,
  },  
  mainTxt:{
    fontSize:30,
  }
})