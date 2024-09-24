import React, {Component} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {Icons} from '../../assets/icons';
import {Images} from '../../assets/images';
import GetStarted from '../../components/getstarted';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGetStartedVisible: false,

      benefits: [
        {id: '1', title: 'Create\nCompaign', img: Icons.micIcon},
        {id: '2', title: 'One Time\nTrigger', img: Icons.timeIcon},
        {id: '3', title: 'Create\nCompaign', img: Icons.micIcon},
        {id: '4', title: 'One Time\nTrigger', img: Icons.timeIcon},
      ],

      data: [
        {
          id: 1,
          img: Icons.personIcon,
          title1: 'Successfully configured POS for sites',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 2,
          img: Icons.personIcon,
          title1: 'You ended the campaign Holiday Special',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 3,
          img: Icons.personIcon,
          title1: 'Created a campaign Holiday Special',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 4,
          img: Icons.personIcon,
          title1: 'Activated the user access group named Site manager',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 5,
          img: Icons.personIcon,
          title1: 'Added a discount code to a campaign named Holiday Special',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 6,
          img: Icons.personIcon,
          title1: 'Added a new customer C02039',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 7,
          img: Icons.personIcon,
          title1: 'Successfully configured POS for sites',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 8,
          img: Icons.personIcon,
          title1: 'Activated the user access group named Site Managers',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 9,
          img: Icons.personIcon,
          title1: 'Successfully configured POS for sites',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
        {
          id: 10,
          img: Icons.personIcon,
          title1: 'You ended the campaign Holiday Special',
          title2: 'Jun 3, 2023 | 12:30 PM',
        },
      ],
    };
  }

  handleNav = () => {
    const {navigation} = this.props;
    navigation.navigate('SignIn');
  };

  handleBottomSheet = () => {
    this.setState({isGetStartedVisible: true});
  };

  renderItem = ({item}) => (
    <View style={styles.unload}>
      <View style={styles.imgView}>
      <Image style={styles.img1}
      source={item.img}/>
      </View>
      <Text style={styles.frequentText}>{item.title}</Text>
    </View>
  );

  renderItemVertical = ({item}) => (
   
    <View style={styles.unloadVertical}>
      <View style={styles.imgViewVertical}>
      <Image style={styles.img2}
      source={item.img}/>
      </View>
      <View>
      <Text style={styles.frequentTextV1}>{item.title1}</Text>
      <Text style={styles.frequentTextV2}>{item.title2}</Text>
      </View>
    </View>
   
  );

  seperate=()=>{
    return(
    <View style={{borderBottomWidth:1,
      marginHorizontal:16, 
      borderColor:'lightgrey'}}/>
  )}

  render() {
    const {isGetStartedVisible} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.containerTop}>
            <View>
              <Text style={styles.welcome}>
                Welcome<Text style={styles.name}>{'\n'}Kevin</Text>
              </Text>
            </View>
            <View style={styles.horizontal}>
              <View style={styles.imageContainer}>
                <TouchableOpacity onPress={this.handleNav}>
                  <Image style={styles.image} source={Icons.chatIcon} />
                </TouchableOpacity>
              </View>

              <View style={styles.imageContainer}>
                <TouchableOpacity >
                  <Image style={styles.image} source={Icons.notificationIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

        <TouchableOpacity onPress={this.handleBottomSheet}>
      <View style={styles.setupCont}>
        <View style={styles.setupimgBox}>
          <Image style={styles.imgsetup}
           source={Icons.completeSetupIcon}/>
        </View>
        <View>
          <Text style={styles.head}>Complete your account setup</Text>
          <Text style={styles.descr}>Tap to continue</Text>
        </View>
      </View>
      </TouchableOpacity>

      <Text style={styles.frequently}>FREQUENTLY USED</Text>
      <View style={styles.flatCont}>
          <FlatList
            bounces={false}
            horizontal
            data={this.state.benefits}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
      </View>
      <View style={styles.recent}>
        <Text style={styles.recent1}>RECENT ACTIVITIES</Text>
        <TouchableOpacity><Text style={styles.recent2}>All Product ▼</Text></TouchableOpacity>
      </View>
          <View style={styles.secondBoxCont}>
            <FlatList
              bounces={false}
              data={this.state.data}
              renderItem={this.renderItemVertical}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={this.seperate}
            />
          </View>
        </ScrollView>


        <GetStarted
          navigation={this.props.navigation}
          visible={isGetStartedVisible}
          onClose={() => this.setState({isGetStartedVisible: false})}
        />
      </View>
    );
  }
}
