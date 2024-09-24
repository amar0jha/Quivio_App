import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/icons';
import styles from './styles';

class VerifiedModal extends Component {
  render() {
    const { visible, closeSuccessModal } = this.props;

    return (
      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={closeSuccessModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image style={styles.modalIcon} source={Icons.verifiedIcon} />
            <Text style={styles.modalTitle}>Account Verified!</Text>
            <Text style={styles.modalMessage}>
            Your account has been verified successfully.
            </Text>
            <TouchableOpacity onPress={closeSuccessModal} style={styles.okButton}>
              <Text style={styles.okButtonText}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default VerifiedModal;
