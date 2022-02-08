import { View, Text, ImageBackground,Image} from 'react-native';
import styles from './profile.style.js';
import { Dimensions } from "react-native";
import { Button } from 'react-native-paper';

const Profile = () => {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
        <View style={styles.container}>
            {/* <View name="backGround" 
                style={[ 
                    {
                       
                        backgroundColor: "blue",
                        width: width
                    },r
                ]} 
            >
                <Text style= {{fontSize:50 }}>backGround</Text>
            </View> */}
            <ImageBackground source={require('Mountain.jpg')} style={{width: width, height: '100%',  }}>
            
          
            <View name="infoTab" style={ {flex:4, marginTop: 0.2*height, marginLeft: 0.05*width, borderWidth:3, width: 0.9*width, borderRadius:30,}}>
                
                <View name="profile" style={{flex: 1,  backgroundColor: "white",  borderTopStartRadius:30, borderTopEndRadius:30, flexDirection:"row"}} >

                    <Button name="Edit" style={{position:'absolute', right:0}}>Edit</Button>

                    <View name="profilePic" style={{flex: 1, maxWidth:0.44*width}}>
                        <Image source={require('Profile.png')} style={{ borderRadius:100, borderWidth:5, marginTop:10, marginLeft: 0.2*width ,width: 0.2*width, height:0.2*width, justifyContent: 'center' }}></Image>
                    </View>

                    <View style={{flex: 1,}}>
                        <Text name="name" style={{marginLeft:0, marginTop:20, fontSize:30, textAlign:'center', justifyContent: 'center'}}>name</Text>
                        <Text name="location" style={{fontSize:10,textAlign:'center'}}>location</Text>
                    </View>

                </View>

                <View name="plantsPhoto" style={{flex: 3, backgroundColor: "white",  borderTopColor:'grey', borderTopWidth:2, borderBottomEndRadius:30,borderBottomStartRadius:30}} >

                    <Text style={{textAlign:'center',fontSize:20,}}>Plants Photos</Text>

                    <Button name="seeAll" style={{position:'absolute', right:0}}>see all</Button>
                    
                    <View style={{felx: 1,flexDirection:"row"}}>
                        <View style={{flex:0.25}}/>
                        <Image source={require('Plants 1.jpg')} style={{ flex: 1,borderRadius:10, borderWidth:3, marginTop:20,  width: 0.1*width, height:0.8*width, justifyContent: 'center' }}></Image>
                        <View style={{flex:0.25}}/>
                        <Image source={require('Plants 2.jpg')} style={{ flex: 1, borderRadius:10, borderWidth:3, marginTop:20, width: 0.1*width, height:0.8*width, justifyContent: 'center' }}></Image>
                        <View style={{flex:0.25}}/>
                    </View>
                   
                </View>
                
            </View>

            </ImageBackground>
        </View>
    )
}

export default Profile;