import React from 'react'
import { 
  StyleSheet, 
  View,
Text, } from 'react-native';

function Ingredient({navigation, route}) {
    const [datas, setData] = React.useState('')
    React.useEffect(() => {
        go()
      }, [route.params?.name]);
    const go = async ()=>{
        let name = route.params?.name
        let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+ name)
        let data = await resp.json()
        console.log(data);
        setData(data.ingredients[0])
      }
    return(
      <View style={styles.container}>
          <Text style={styles.mainTxt}>{datas.strIngredient}</Text>
          <Text style={styles.txt}>{datas.strDescription}</Text>
        
       

      </View>
    )
}

export default Ingredient;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: '15%',
  },
  txt:{
    fontSize:35,
  },  
  mainTxt:{
    fontSize:55,
  }
})