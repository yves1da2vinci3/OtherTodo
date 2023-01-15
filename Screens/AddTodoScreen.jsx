import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/Actions'
const AddTodoScreen = (props) => {
const dispatch = useDispatch()
  // State
  const [Title,setTitle] = useState("")
  const [Description,setDescription] = useState("")
  const [DateDebut,setDateDebut] = useState("")
  const [DateFin,setDateFin] = useState("")
  const navigation = useNavigation()
  useEffect(()=>{
      navigation.setOptions({title : 'Ajouter Todo',headerLeft: ()=>       <Icon size={30} type="ionicon" name='arrow-back-outline'  />
      ,      })
      },[])
      const HandleCreate = () => { 
        try {
          // console.log("clikc")
          console.log(Title,Description,DateDebut,DateFin)
          dispatch(addTodo(Title,Description,DateDebut,DateFin))
          setTitle("")
          setDescription("")
          setDateDebut("")
          setDateFin("")
           props.navigation.navigate("home")
        } catch (error) {
          console.log(error)
        }
       }
  return (
    <View style={tw `flex-1 bg-white p-4 relative`}>
      <Text style={tw `text-center`}>Entrez les informations de la todo</Text>
      <TextInput onChangeText={(txt) => setTitle(txt)}  secureTextEntry={false} style={ tw `p-2 mt-8 text-gray-600 font-semibold border-b-2 border-b-gray-200`} placeholder="Titre" />
      <TextInput  onChangeText={(txt) => setDescription(txt)} secureTextEntry={false} style={ tw `p-2 mt-8 text-gray-600 font-semibold border-b-2 border-b-gray-200`} placeholder="Description" />
      <TextInput  onChangeText={(txt) => setDateDebut(txt)} secureTextEntry={false} style={ tw `p-2 mt-8 text-gray-600 font-semibold border-b-2 border-b-gray-200`} placeholder="Date de debut" />
      <TextInput  onChangeText={(txt) => setDateFin(txt)} secureTextEntry={false} style={ tw `p-2 mt-8 text-gray-600 font-semibold border-b-2 border-b-gray-200`} placeholder="Date de Fin" />

      <TouchableOpacity  onPress={HandleCreate}  style={ tw `bg-blue-500 h-14  mt-8 ml-5 flex flex-row justify-center self-end items-center rounded-lg w-40`} >
    <Icon type='ionicon' size={29} color="white"  name='add-circle' style={tw `mr-3`} />

        <Text style={tw `capitalize text-white text-xl font-semibold ml-1`} >Ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodoScreen