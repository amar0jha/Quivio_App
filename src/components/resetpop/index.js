import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/icons';
import styles from './styles';

class ResetModal extends Component {
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
            <Image style={styles.modalIcon} source={Icons.resetPopIcon} />
            <Text style={styles.modalTitle}>Password Updated!</Text>
            <Text style={styles.modalMessage}>
              Your new password has been updated successfully.
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

export default ResetModal;
