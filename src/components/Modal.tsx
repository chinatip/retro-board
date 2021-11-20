import { Button, Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

interface DisclosureProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

interface Props {
    buttonText: string;
    modalTitle: string;
    body: React.ReactNode;
    footer: React.ReactNode;
    disclosureProps: DisclosureProps;
}

export const Modal = (props: Props) => {
    if (!props || !props.disclosureProps) return null;

    const { buttonText, modalTitle, body, footer, disclosureProps } = props;
    const { isOpen, onOpen, onClose } = disclosureProps;
    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        onOpen();
    };
  
    return (
      <>
        <Button onClick={handleOpen}>{buttonText}</Button>
        <ChakraModal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {body}
            </ModalBody>
            <ModalFooter>
              {footer}
            </ModalFooter>
          </ModalContent>
        </ChakraModal>
      </>
    );
};