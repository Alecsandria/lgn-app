import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'

import generalStyles from '../../styles/general';
import bookingStyles from '../../styles/booking';

const NailTech = () => {
  const [nailTechnician, setNailTech] = useState({})

  const nailTechs = [
    {
      image: "",
      name: "Zoey",
      rating: 2.5
    },
    {
      image: "",
      name: "Violet",
      rating: 4
    },
    {
      image: "",
      name: "Vanessa",
      rating: 0
    }
  ]

  const displayRating = (rating) => {
    const ratingCopy = rating
    const ratingArray = []
    const fullStarClass = "star", emptyStarClass = "star-o", halfStarClass = "star-half-empty"
    let maxRating = 5

    if (!Number.isInteger(rating)) {
      maxRating = 4
      rating = parseInt(rating.toString().split(".")[0])
    }

    const emptyStars = maxRating - rating

    for (let i = 0; i < rating; i++) {
      ratingArray.push(fullStarClass)
    }

    if (!Number.isInteger(ratingCopy)) {
      ratingArray.push(halfStarClass)
    }

    for (let i = 0; i < emptyStars; i++) {
      ratingArray.push(emptyStarClass)
    }

    return ratingArray.map((rating, index) => {
      return (
        <FontAwesome name={rating} size={18} color="black" key={index} />
      )
    })
  }

  const displayNailTechs = () => {
    return nailTechs.map((nailTech, index) => {
      return (
        <TouchableWithoutFeedback key={index} onPress={() => { setNailTech({ [nailTech.name]: nailTech.name }) }} onLongPress={ () => {alert("TODO: Menu Option to view profile")} } >
          <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <View style={{ borderWidth: 1, borderColor: "#000", width: 50, height: 50, borderRadius: 100 }}>
              <EvilIcons name="image" size={40} color="black" style={{justifyContent: "center"}} />
            </View>

            <View style={{paddingLeft: 28}}>
              <Text>{nailTech.name}</Text>
              <View style={{flexDirection: "row", paddingTop: 8}}>
                { displayRating(nailTech.rating) }
              </View>
            </View>
          
            {
              nailTechnician[nailTech.name] ?
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Feather name="check-circle" size={18} color="#B284EB" />
                </View>
                :
                <></>
            }
            
          </View>
        </TouchableWithoutFeedback>
      )
    })
  }

  return (
    <View style={generalStyles.card}>
      <Text style={bookingStyles.cardTitle}>Nail Technician</Text>
      <View style={bookingStyles.content}>
        { displayNailTechs() }
      </View>
    </View>
  )
}

export default NailTech