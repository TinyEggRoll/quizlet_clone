import {
    Flex, Image, Button, Avatar, Input,
    InputGroup, InputLeftElement, IconButton, PopoverTrigger, PopoverContent, PopoverBody, Popover, Text,
    Box, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Modal, ModalFooter, FormControl, FormLabel
} from "@chakra-ui/react"

import { useState } from 'react';

import Logo1 from '../assets/Quizlet_Logo_White1.svg'
import Logo2 from '../assets/Quizlet_Logo_White2.svg'
import { RiArrowDownSLine, AiOutlineSearch, AiOutlineBell, FiFolderPlus, IoMdCopy } from 'react-icons/all';

// import './Testing.css';

const TopNavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [folderName, setFolderName] = useState('');

    const folderNameChangeHandler = (newFolderName) => {
        setFolderName(newFolderName.target.value);
    }

    const addNewFolderHandler = (event) => {
        event.preventDefault();
        setFolderName('');
    }
    return (
        <div>
            {/* Whole Nav Bar */}
            <Flex w='100%' p='1rem' bg='primary' height='3.5rem' pos='fixed' top='0' justify='space-between'>
                {/* Left Side Nav Bar */}
                <Flex h='100%' align='center'>
                    {/* Logo */}
                    <Flex mr='1rem'>
                        <Image mr='10px' src={Logo1} alt='logo 1' />
                        <Image w='5rem' src={Logo2} alt='logo 2' />
                    </Flex>
                    {/* Your Library Button */}
                    <Flex direction='column' justify='center'>
                        <Button h='2rem' id='bob' mt='.7rem' mb='.63rem' mr='1rem' _hover={{ bg: 'primary' }} fontSize='sm' color='#fff' bg='primary' rightIcon={<RiArrowDownSLine color='#fff' size='1.5rem' />}>Your Library </Button>
                        <Box background='#ffdc62' ml='1rem' w='68%' h='.33rem' borderTopRightRadius='.25rem' borderTopLeftRadius='.25rem'></Box>
                    </Flex>
                    {/* Create (Study Sets / Folder) Button */}
                    <Popover>
                        <PopoverTrigger >
                            <Button h='2rem' fontSize='sm' color='primary' bg='#7dd' rightIcon={<RiArrowDownSLine size='1.5rem' />}>Create </Button>
                        </PopoverTrigger>
                        <PopoverContent ml='6.5rem' w='13rem' h='6rem'>
                            <PopoverBody >
                                <Flex w='13rem' direction='column' align='flex-start' h='4.5rem' justify='space-evenly'>
                                    <Button pr='40%' h='2rem' fontSize='sm' color='primary' leftIcon={<IoMdCopy size='1.5rem' />} >Study Set</Button>
                                    <Button onClick={onOpen} pr='50%' h='2rem' fontSize='sm' color='primary' leftIcon={<FiFolderPlus size='1.5rem' />} >Folder</Button>
                                    {/* Create Folder Button Modal */}
                                    <Modal size='xl' motionPreset="slideInRight" isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent >
                                            <ModalHeader fontSize='2rem' bg='#4257b2' color='white'>Create a new folder</ModalHeader>
                                            <ModalCloseButton color='white' />
                                            <ModalBody>
                                                <FormControl>
                                                    <Input p='1rem' pl='.4rem' size='lg' _focus={{ borderBottom: '4px solid #ffdc62' }} onChange={folderNameChangeHandler} placeholder='Enter a title' value={folderName} borderBottom='4px solid black' variant='unstyled' />
                                                    <FormLabel>TITLE</FormLabel>
                                                    <Input p='1rem' pl='.4rem' size='lg' _focus={{ borderBottom: '4px solid #ffdc62' }} placeholder='Enter a description (optional)' borderBottom='4px solid black' variant='unstyled' type="email" />
                                                    <FormLabel fontSize='sm'>DESCRIPTION</FormLabel>
                                                </FormControl>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button mb='1rem' isDisabled={!folderName} _hover={{ bg: 'secondary' }} isFullWidth onClick={e => { onClose(); addNewFolderHandler(e); }} bg='secondary' color='white'>Create Folder</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>

                {/* Right Side Nav Bar */}
                <Flex align='center' >
                    {/* Yellow Upgrade Button */}
                    <Button mr='1rem' _hover={{ bg: 'highlight' }} h='2rem' w='11rem' fontSize='sm' color='primary' bg='highlight' >Upgrade: free 7-day trial </Button>
                    {/* Search Bar */}
                    <InputGroup mr='1rem' h='2rem' w='14rem'>
                        <InputLeftElement pb='.3rem' pointerEvents="none" children={<AiOutlineSearch size='1.4rem' color='#cedaf3' />} />
                        <Input variant='unstyled' h='2rem' bg='hsla(0,0%,100%,0.1)' type="tel" placeholder="Search" />
                    </InputGroup>
                    {/* Notification Button */}
                    <IconButton mr='1rem' _hover={{ opacity: '.7' }} size='sm' isRound color='#cedaf3' bg='hsla(0,0%,100%,0.1)' aria-label="Search Notifications" icon={<AiOutlineBell size='1.2rem' />} />
                    {/* Avatar Button */}
                    <Button mr='1rem' variant='unstyled' >
                        <Avatar size='sm' />
                    </Button>
                </Flex>
            </Flex>

        </div >
    )
}

export default TopNavBar
