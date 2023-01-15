import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Icon, Overlay } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { modifyTodo } from '../Redux/Actions'
const DetailsScreen = (props) => {
  const dispatch  = useDispatch()
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title : `Todo Id :${props.route.params.id}`,headerLeft: ()=>       <Icon size={30} type="ionicon" name='arrow-back-outline'  />
        ,      })
        
        },[])
        const status = 0
        const [visible, setVisible] = useState(false);
        const toggleOverlay = () => {
          setVisible(!visible);
        };
        // Retrouver la Todo
        const tasks = useSelector((state)=> state.todos)
         console.log(tasks.filter(task => task.id === props.route.params.id )[0])
        const Task = tasks.filter(task => task.id === props.route.params.id )[0]

// 
const markAsDone = () => { 
  try {
    const data =  {
      id : props.route.params.id,
      Title : Task.Title,
      Description : Task.Description,
      DateDebut : Task.DateDebut,
      DateFin : Task.DateFin,
      status : 2
    }
    dispatch(modifyTodo(Task.id,data))
    props.navigation.navigate("home")
  } catch (error) {
    console.log(error)
  }

 }

 const markAsPending = () => { 
  try {
    const data =  {
      id : props.route.params.id,
      Title : Task.Title,
      Description : Task.Description,
      DateDebut : Task.DateDebut,
      DateFin : Task.DateFin,
      status : 1
    }
    dispatch(modifyTodo(Task.id,data))
    props.navigation.navigate("home")
  } catch (error) {
    console.log(error)
  }
  }

  return (
    <View style={ tw `flex-1 justify-center items-center`}> 
    {/* Modal */}
<Overlay  overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }   isVisible={visible} onBackdropPress={toggleOverlay}>
     <View style={tw`flex   h-40 w-90 bg-white`}>
       {/* Column */}
      <Text style={tw `text-center text-lg font-bold `}>Modifier Status</Text>

        <View style={tw ` self-center items-center flex flex-row`}>
      
        <TouchableOpacity  onPress={markAsPending } style={ tw `bg-yellow-500 h-14  mt-8 flex flex-row justify-center items-center rounded-lg w-40`} >
    <Icon type='ionicon' size={29} color="white"  name='time' />

        <Text style={tw `capitalize text-white text-xl font-semibold ml-1`} >En cours</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={markAsDone}  style={ tw `bg-green-500 h-14  mt-8 ml-5 flex flex-row justify-center items-center rounded-lg w-40`} >
    <Icon type='ionicon' size={29} color="white"  name='checkmark' />

        <Text style={tw `capitalize text-white text-xl font-semibold ml-1`} >Faire</Text>
      </TouchableOpacity>
        </View>
     

      
     

     </View>
    </Overlay>
    {/* Todo  Information */}
    <View style={tw `h-40 bg-white w-80 `}>
    <View style={tw `flex-row items-center justify-between px-3`} >
          
          <Text style={tw `font-semibold`}>Order ID : {props.route.params.id}</Text>
          
         <Text style={tw `${ status ===0 ? `text-red-500` : status ===1 ?  `text-yellow-500` : "text-green-900" } font-semibold mt-2`}>{status ===0  ? "pas fait" : status ===1  ?  "en cours"  : "Fait"}</Text>
        </View>
       
        <View style={tw `flex-1 mt-2 `}>

          <View style={tw `flex flex-row items-center`}>
        <Text style={tw `font-semibold ml-3 mt-1`}>Titre : </Text>
        <Text style={tw ` ml-3 mt-1`}>{Task?.Title} </Text>
          </View>
          <View style={tw `flex flex-row items-center`}>
        <Text style={tw `font-semibold ml-3 mt-1`}>Description : </Text>
        <Text style={tw ` ml-3 mt-1`}>{Task?.Description} </Text>
          </View>
          <View style={tw `flex flex-row items-center`}>
        <Text style={tw `font-semibold ml-3 mt-1`}>Date de Debut : </Text>
        <Text style={tw ` ml-3 mt-1`}>{Task?.DateDebut} </Text>
          </View>
          <View style={tw `flex flex-row items-center`}>
        <Text style={tw `font-semibold ml-3 mt-1`}>Date de Fin : </Text>
        <Text style={tw ` ml-3 mt-1`}>{Task?.DateFin} </Text>
          </View>
        
         
          
          
         
        
        
          
        

        </View>
        
    </View>

    <View style={ tw `flex items-center justify-around flex-row`}>
    <TouchableOpacity   style={ tw `bg-red-500 h-14 mt-26 flex flex-row justify-center items-center rounded-lg w-1/3`} >
    <Icon type='ionicon' size={29} color="white"  name='close-circle' />

        <Text style={tw `capitalize text-white text-xl font-semibold ml-1`} >Revenir</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> toggleOverlay() } style={ tw `bg-blue-600 h-14 mt-26 ml-4 flex-row flex justify-center items-center rounded-lg w-56`} >
        <Icon type='ionicon' size={29} color="white"  name='pencil' />
        <Text style={tw `capitalize text-white text-lg font-semibold ml-3`} >Modifier Status</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default DetailsScreen