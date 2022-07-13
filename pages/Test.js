//import required library and components
import  React,{useState,useEffect} from 'react';
import {View, TextInput, TouchableOpacity, FlatList, Image, Text} from 'react-native';
import Style from './../styles/style';
import {useDispatch,useSelector} from 'react-redux';
import {addIncome,addData} from "../src/features/testSlice";

//import required library and components



const TestScreen=({navigation})=>{

    const dispatch=useDispatch();
    const income=useSelector(state => state.income.value);
    const data=useSelector(state => state.income.userData);

    useEffect(()=>{

        try {
                const getData=async ()=>{
                        const response=await fetch('https://jsonplaceholder.typicode.com/users',{
                            method:'get',
                            headers:{
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            }
                        });
                        const responseJson=await response.json();
                        dispatch(addData(responseJson));
                };
                getData();
        }
        catch (e) {
        }

    },[]);




        function Item({name,username}) {
            return(
                <TouchableOpacity style={Style.TouchView} onPress={()=>{
                    dispatch(addIncome(10))
                }} >
                    <Image  source={require('./../image/conversation.png')} style={Style.ImageStyle}/>
                    <View style={Style.View}>
                        <Text style={Style.TextView}>{name}</Text>
                        <Text style={[Style.TextView,Style.SubText]}>{username}</Text>
                    </View>

                    <View style={Style.RightView}>
                        <Text style={Style.TextRightView}>{'$'+income}</Text>
                        <Text style={Style.TextRightViewBott}>{'100gr'}</Text>
                    </View>

                </TouchableOpacity>
            )
        }

        return(

            <FlatList
                data={data}
                renderItem={({ item }) => <Item name={item.name} username={item.username}/>}
                keyExtractor={item => item.id}
                style={{backgroundColor:'#fff'}}
            />

        )



};




export default TestScreen;
