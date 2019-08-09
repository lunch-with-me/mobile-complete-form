/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {ScrollView,View, Text,Alert,Button, Picker,StatusBar,TextInput,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
var gender=[
  {label:"female",value:0},
  {label:"male",value:1},
  {label:"other",value:2}
]

const options={
  title:'my pic',
  takePhotoButtonTitle:'take photo from camera',
  chooseFromLibraryButtonTitle:'choose photo from library',
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource:null,
      name:"",
      mobile:"",
      gender:'-1'
      

    }
  }
  showError = () => {
    Alert.alert("Sorry. Some required fields are missing.");
  };

  signUp = () => {
    if (
      this.state.name.length === 0 ||
      this.state.name === undefined ||
      this.state.mobile.length === 0 ||
      this.state.mobile === undefined||
      this.state.gender===-1
     )
    {
      this.showError();
    } 
   
  };
pic=()=>{
  //alert('clicked');
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    
    } else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
      this.setState({
        avatarSource: source,
      });
    }
  });
}



render() {
  
return (
    
 
  
    <ScrollView>
      <View style={styles.container}>
      <ImageBackground source={require('./Images/back4.jpg')} blurRadius={1} style={{width: '100%', height: '100%'}}>
      <Text style={styles.txtH}>Create Account</Text>
      
      <Text style={styles.txt}>Full Name*</Text>
      <TextInput style={styles.input}
       
        placeholder="Enter Full Name"
        //secureTextEntry={true}
        onChangeText={text =>this.setState({name: text})}
        defaultValue={this.state.name}
        placeholderTextColor="#D5AFAF"
        />

<Text style={styles.txt}>Gender*</Text>

<RadioForm
      radio_props={gender}
      initial={-1}
      onPress={(value)=>{this.setState({gender:value})}}
      buttonSize={12}
      selectedButtonColor={'black'}
      buttonColor={'grey'}
      //labelColor={'#fffffb'}
      labelStyle={{fontSize: 15, color: '#fffffb',fontWeight:"bold"}}
      //buttonOuterSize={12}
      />
 
 <Text style={styles.txt}>Date of Birth*</Text>
 <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
              //color:'#fffffb'
            },
            dateText: {
              fontSize: 14,
              color: '#D5AFAF'
          }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />

<Text style={styles.txt}>Description about yourself</Text>
<TextInput style={styles.input}
 
  placeholder="Self Description"
  //secureTextEntry={true}
  //onChangeText={text =>this.setState({confirmpassword : text})}
  placeholderTextColor="#D5AFAF"
  />

     
      
<Text style={styles.txt}>Mobile Number* </Text>
  <TextInput style={styles.input}
  //style={styles2.input}
  placeholder="Mobile Number"
  //secureTextEntry={true}
  //onChangeText={text =>this.setState({confirmpassword : text})}
  placeholderTextColor="#D5AFAF"
  onChangeText={text =>this.setState({mobile: text})}
        defaultValue={this.state.mobile}
  />

<Text style={styles.txt}>Select Occupation*</Text>

<Picker
  selectedValue={this.state.job}
  style={{height: 50, width: 150,color:"#fffffb"}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({job: itemValue})
  }>
  <Picker.Item label="student" value="std" />
  <Picker.Item label="software Developer" value="sd" />
  <Picker.Item label="Doctor" value="d" />
  <Picker.Item label="Professor" value="p" />
  <Picker.Item label="Other" value="o" />
</Picker>

            
            
          

        <TouchableOpacity 
        onPress={this.pic}>
          <Text style={styles.btn}>select a profile picture*</Text>
        </TouchableOpacity>
        <Button title="Submit Form"
        color="#000000"
         onPress={() => this.signUp()} />
        
        </ImageBackground>
      </View>
    </ScrollView>
  

);
    
  }
}


const styles =StyleSheet.create({
    container: {
      flex:1,
      //backgroundColor:'rgb(230, 204, 179)',
      backgroundColor:'#C89696',
      width:"100%",
      height:"100%",
      //borderWidth: 3,
      //borderColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
     
    },


  txtH:{
   color:"#fffffb",
    //textAlign:"center",
    marginTop:10,
    fontWeight:"bold",
    fontSize: 25

  },
  txt:{
    color:"#fffffb",
     //textAlign:"center",
     marginTop:15,
     fontWeight:"bold",
     fontSize: 20,
     paddingBottom:15
 
   },
   txtt:{
    color:"#fffffb",
     //textAlign:"center",
     marginTop:15,
     fontWeight:"bold",
     fontSize: 20,
     paddingBottom:20
 
   },
   txt2:{
    color:"#fffffb",
     //textAlign:"center",
     //marginTop:15,
     fontWeight:"bold",
     fontSize: 15
 
   },
   input:{
    borderColor:'#fffffb',
    //backgroundColor:'rgba(240,208,193,0.5)' ,
    height:40,
    //width:150,
    marginBottom:10,
    marginTop:10,
    color:'#fffffb',
    //borderRadius:20,
    fontWeight:'bold',
    paddingLeft:20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fffffb',
    //backgroundColor: 'white',
   },
   btn:{
    //backgroundColor: '#DDDDDD',
    color:"#D5AFAF",
    padding: 10,
    fontWeight:"bold",
     fontSize: 20,
   }


  
  
  
  });




export default App;
