import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/react';

import { Modal } from './Modal';

export const EditButton = () => {
    const disclosureProps = useDisclosure();
    const footer = (
        <>
            <Button colorScheme="blue" mr={3} onClick={disclosureProps.onClose}>
                Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
        </>
    );

    return <Modal buttonText="..." modalTitle={'Edit column name'} body={undefined} footer={footer} disclosureProps={disclosureProps} />;
};