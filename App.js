import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import uuid from 'react-native-uuid'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Eggs' },
    { id: uuid.v4(), text: 'Milk' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' }
  ])

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id != id))
  }

  const addItem = (newItemText) => {
    // Validation Not Empty
    if(!newItemText) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}])
    }
    else {
      setItems([...items, { id: uuid.v4(), text: newItemText }])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem onAddItemClick={addItem} />
      <FlatList 
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} onDeleteItem={deleteItem} />
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
