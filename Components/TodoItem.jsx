import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
const TodoItem = ({task}) => {
    const navigator = useNavigation()
  return (
    <TouchableOpacity   onPress={()=> navigator.navigate("detail",{ id : task.id })}  style={tw `h-20 p-2 flex-row flex items-center rounded-lg w-full bg-white mt-4 border-2 border-gray-100`}>
        { task.status === 0 ?     <Icon type='ionicon' color="red" size={40} name='close-circle' /> : task.status === 1 ?   <Icon type='ionicon' color="yellow" size={40} name='time' />  :  <Icon type='ionicon' color="green" size={40} name='checkmark' /> }

    <View style={tw `flex-1 flex justify-between ml-4 py-2`}>
        <Text style={tw `font-semibold text-lg `}>{task.Title}</Text>
        <Text style={tw `font-semibold text-gray-500 italic`}>{task.Description}</Text>
    </View>
    <View style={tw `w-30 flex justify-end `}>
    <View style={ tw `flex flex-1   items-center   flex-row`}>
        <Icon type='ionicon' name='calendar-outline' color="#1877f2" />
      <Text ellipsizeMode="tail" style={tw ` text-black font-semibold ml-2` }>{task.DateDebut + "-" + task.DateFin} </Text>
    
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default TodoItem