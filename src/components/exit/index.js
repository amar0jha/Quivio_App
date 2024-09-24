import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/icons';
import styles from './styles';

class ExitModal extends Component {
  render() {
    const { visible, closeModal ,onChoice} = this.props;

    return (
      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image style={styles.modalIcon} source={Icons.exitIcon} />
            <Text style={styles.modalTitle}>Exit 2FA?</Text>
            <Text style={styles.modalMessage}>
            Are you sure you want to exit 2FA, You will need to redo it again.
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <TouchableOpacity onPress={() => onChoice('continue')} style={styles.okContinue}>
                <Text style={styles.okContinueText}>No, Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onChoice('yes')} style={styles.okButton}>
                <Text style={styles.okButtonText}>Yes, Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ExitModal;
