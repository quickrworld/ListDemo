import React from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import getReviews from './reviews'

function Review ({ name, text, avatar }) {
  return (
    <View style={styles.review}>
      <Image source={{uri: avatar}} style={styles.avatar}/>
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        <Text style={{fontSize: 20}}>{name}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default class App extends React.Component {
  renderItem = ({ item }) => {
    return <Review {...item} />
  }
  render() {
    const reviews = getReviews()
    const demo = 'FlatList'
    if(demo === 'View') {
      return (
        <View style={styles.container}>
          {reviews.map(({ key, name, text, avatar }) => (<Review key={key} name={name} text={text} avatar={avatar}/>))}
        </View>
      )
    }
    else if(demo === 'ScrollView') {
      return (
        <ScrollView style={styles.container}>
          {reviews.map(({ key, name, text, avatar }) => (<Review key={key} name={name} text={text} avatar={avatar}/>))}
        </ScrollView>
      )
    }
    else if(demo === 'FlatList') {
      return (
        <View style={styles.container}>
        <FlatList
          data={reviews}
          renderItem={this.renderItem}/>
        </View>)
    }
    else {
      return (
        <View>
          <Text>Set demo to be one of 'View', 'ScrollView', 'FlatView'</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  review: {
    margin: 10,
    flexDirection: 'row',
  }
});
