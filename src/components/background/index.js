import React from 'react';
import {Component} from 'react';
import {Text, Image, ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../assets/images';
import styles from './style';
import {Icons} from '../../assets/icons';
import AutoScroll from "@homielab/react-native-auto-scroll";

export default class BackgroundImage extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={Images.appbg} imageStyle={styles.appBg} >

        <View style={styles.topElements}>
          <Image source={Images.logo} style={styles.appLogo} />

          <View style={styles.commonMargin}>
            <Text style={styles.quivioText}>
              QUIVIO
              <Text style={styles.quivioDescription}>
                {'\n'}Your Personal CarWash Assistant
              </Text>
            </Text>
          </View>

          <AutoScroll endPaddingWidth={0}>
            <View style={styles.listContainer}>
              <Image source={Icons.graph} style={styles.listIcon} />
              <Text style={styles.listText}>Aesthetical{'\n'}Graphics</Text>

              <Image source={Icons.timer} style={styles.listIcon} />
              <Text style={styles.listText}>Real-time{'\n'}statistics</Text>

              <Image source={Icons.track} style={styles.listIcon} />
              <Text style={styles.listText}>Track equipment{'\n'}usage</Text>
            </View>
          </AutoScroll>

          {this.props.children}
        </View>
</ImageBackground>
      </View>
    );
  }
}
