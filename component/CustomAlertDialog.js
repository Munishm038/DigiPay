import React from 'react';
import {AlertDialog, Center, Button, NativeBaseProvider} from 'native-base';
import { Colors } from '../constant/styles';

export const CustomAlertDialog = ({isOpen, setIsOpen}) => {
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return (
    <NativeBaseProvider>
      <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Success!</AlertDialog.Header>
            <AlertDialog.Body>
              Your request has been Successfully Submitted, You will recieve notification on approval
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>

                <Button color={Colors.primaryColor} onPress={onClose}>
                  Okay
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </NativeBaseProvider>
  );
};
