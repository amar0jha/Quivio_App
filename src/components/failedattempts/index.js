import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/icons';
import styles from './styles';

class FailedAttemptModal extends Component {
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
            <Image style={styles.modalIcon} source={Icons.failedattemtsIcon} />
            <Text style={styles.modalTitle}>Too many failed{'\n'}attempts</Text>
            <Text style={styles.modalMessage}>
            Your account has been locked, please try again in one hour.
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.okButton}>
              <Text style={styles.okButtonText}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default FailedAttemptModal;
