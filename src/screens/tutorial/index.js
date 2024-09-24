import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View,
    ImageBackground,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Images } from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width } = Dimensions.get('window');

const data = [
    {
        title: 'Quality Foot',
        description:
            'Food quality is a concept thats based on a foods nutritional value, safety, and organoleptic characteristics, such as its taste, aroma, and appearance.',
        image: Images.tutorial1,
    },
    {
        title: 'Fast Delivery',
        description:
            'Food quality is a concept thats based on a foods nutritional value, safety, and organoleptic characteristics, such as its taste, aroma, and appearance.',
        image: Images.tutorial2,
    },
    {
        title: '24/7 Service',
        description:
            'Food quality is a concept thats based on a foods nutritional value, safety, and organoleptic characteristics, such as its taste, aroma, and appearance.',
        image: Images.tutorial3,
    },
];

export class TutorialScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('isTutorial', 'true');
        } catch (error) {
            // Error 
            console.log('error');
        }
    };

    componentDidMount() {
        this._storeData();
    }

    goToNext = () => {
        this.setState(prevState => ({
            currentIndex: this.state.currentIndex + 1,
          }));
        if (this.state.currentIndex < data.length - 1) {
            this.flatListRef.scrollToIndex({ index: this.state.currentIndex + 1 });
            console.log('working', this.state.currentIndex);
        } else {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'SignIn' }]
            })
            //   const {navigation} = this.props;
            //   navigation.navigate('SignInScreen');
        }
    };

    goToPrev = () => {
        this.setState(prevState => ({
            currentIndex: this.state.currentIndex - 1,
          }));
        if (this.state.currentIndex > 0) {
            this.flatListRef.scrollToIndex({ index: this.state.currentIndex - 1 });
        }
    };

    renderItems = ({ item }) => {
        return (
            <View style={styles.slide}>
                <ImageBackground source={item.image} style={styles.image}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={ref =>
                        this.flatListRef = ref
                    }
                    data={data}
                    renderItem={this.renderItems}
                    keyExtractor={item => item.title}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onMomentumScrollEnd={event => {
                        const index = Math.floor(event.nativeEvent.contentOffset.x / width);
                        this.setState({ currentIndex: index });
                    }}
                />
                <View style={styles.paginationContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.goToPrev}
                        disabled={this.state.currentIndex === 0}>
                        <Text style={styles.buttonText}>Prev</Text>
                    </TouchableOpacity>

                    <View style={styles.pagination}>
                        {
                            data.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.paginationDot,
                                        this.state.currentIndex === index && styles.activeDot,
                                    ]}
                                />
                            ))
                        }
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.goToNext}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default TutorialScreen;