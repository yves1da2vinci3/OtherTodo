import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import TodoItem from '../Components/TodoItem'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const HomeScreen = (props) => {
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title : 'Todo Id :123455',headerLeft: ()=>       <Icon size={30} type="ionicon" name='arrow-back-outline'  />
        ,      })
        },[])
        const tasks = useSelector((state)=> state.todos) 
  return (
    <View style={tw `flex-1 bg-white pt-10 relative `}>
            <Text style={tw `mt-5 font-bold mb-4 text-center`}>Bienvenue sur l'application de TODOLIST</Text>
        <View style={tw `h-50   `}>
            <Image  style={tw `h-50 `} source={{ uri : "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" }}/>
        </View>
        <Text style={ tw `text-xl font-bold text-center mt-4 ml-1`}>Statitisques</Text>
<View style={tw `mt-4 h-36 w-full flex flex-row mb-2`}>

  <View style={tw `flex-1 bg-white justify-center items-center flex border-2 p-2 border-gray-200 border-b-4 border-b-blue-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{tasks.length}</Text>
  <Text style={ tw ` font-bold  ml-1`}>Totals</Text>

  </View>
  <View style={tw `flex-1 bg-white justify-center items-center flex p-2 border-2 p-2 border-gray-200 border-b-4 border-b-green-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{tasks.filter(t => t.status === 2).length}</Text>
  <Text style={ tw `font-bold  ml-1`}>Terminé</Text>

  </View>
  <View style={tw `flex-1 bg-white justify-center items-center flex p-2  border-2 p-2 border-gray-200 border-b-4 border-b-yellow-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{tasks.filter(t => t.status === 1).length}</Text>
  <Text style={ tw ` font-bold  ml-1`}>En cours</Text>

  </View>
  <View style={tw `flex-1 bg-white justify-center items-center flex border-2 p-2 border-gray-200 p-2 border-b-4 border-b-red-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{tasks.filter(t => t.status === 0).length}</Text>
  <Text style={ tw `text-md font-bold  ml-1`}>Non fait</Text>

  </View>
</View>

{/* TodoLit */}
<ScrollView showsVerticalScrollIndicator={false} style={tw `flex-1 mt-4  px-2`} > 
 
    { tasks.map(task => (
        <TodoItem key={task.id} task={task} />
    ))}





</ScrollView>
{/* Buuton */}
<TouchableOpacity onPress={()=> props.navigation.navigate("add")} activeOpacity={0.7} style={tw `bg-blue-500  absolute bottom-9 right-5 h-12 w-12 rounded-full justify-center items-center`}>
    <Icon name='add' size={25} type='ionicon' color="white" />
</TouchableOpacity>
    </View>
  )
}

export default HomeScreen