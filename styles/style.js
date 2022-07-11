import {StyleSheet} from 'react-native';


const Style=StyleSheet.create({


    TouchView:{

        width:'94%',
        height:65,
        borderWidth:3,
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'#cecece',
        borderRadius:6,
        flexDirection:'row',
        marginTop: 15,
        marginLeft: 'auto',
        marginRight:'auto',
        backgroundColor:'#ffffff'


    },
    View:{

        width:150,
        height:'100%',
/*
        backgroundColor:'#37acfb',
*/
        borderRadius:6,
        marginTop: 0,
        marginLeft:10

    },

    RightView:{
        width:60,
        height:'100%',
        borderRadius:6,
        marginTop: 0,
        marginLeft:'auto',
        textAlign:'right'
    },
    TextRightView:{
        lineHeight:35,
        fontSize:18,
        color:'#000',
        fontWeight:'bold',
        textAlign:'right',
        paddingRight:10
    },
    TextRightViewBott:{
        textAlign:'right',
        paddingRight:10
    }
    ,
    TextView:{

        width:'100%',
        height:'50%',
        lineHeight:35,
        paddingLeft:0,
        fontSize:19,
        fontWeight:'normal',
        color:'#a8a8a8',
        float:'left'
    },
    SubText:{
        color:'#ee0046',
        fontSize:14,
        lineHeight: 20,
        fontWeight: 'bold'
    }
,
    ImageStyle:{
        width:40,
        height:40,
        marginLeft:5,
        marginTop:10
    },


});


export default Style;
