import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Link,
  ModalHeader,
  ModalCloseButton,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900" w="900px" height="600px">
        <ModalBody>
          <Stack maxW="900px" maxH="600px ">
            <Image src={imgUrl} layout="fill" objectFit="contain" />
          </Stack>
        </ModalBody>
        <ModalFooter
          justifyContent="left"
          zIndex="1"
          backgroundColor="gray.800"
        >
          <Link
            fontSize="14px"
            lineHeight="16px"
            color="gray.50"
            href={imgUrl}
            target="_blank"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
