import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/icons';
import styles from './styles';

class ForgotModal extends Component {
  render() {
    const { visible, closeModal } = this.props;

    return (
      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image style={styles.modalIcon} source={Icons.forgotPopIcon} />
            <Text style={styles.modalTitle}>Link Sent!</Text>
            <Text style={styles.modalMessage}>
              The link to reset your password has been sent to your email address.
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.okButton}>
              <Text style={styles.okButtonText}>Go to Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ForgotModal;
