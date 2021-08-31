import { useState } from 'react';

import {
    Flex, Image, Button, Avatar, Input, InputGroup, InputLeftElement, IconButton, PopoverTrigger, PopoverContent, PopoverBody, Popover,
    Box, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Modal, ModalFooter, FormControl, FormLabel
} from "@chakra-ui/react"

import { Link as LinkRouter } from 'react-router-dom'


import QuizletLogo from '../../assets/Quizlet_Logo_White1.svg'
import CloneLogo from '../../assets/Quizlet_Logo_White2.svg'
import { RiArrowDownSLine, AiOutlineSearch, AiOutlineBell, FiFolderPlus, IoMdCopy } from 'react-icons/all';


const TopNavBarNotFocus = (props) => {
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
        //  Whole Nav Bar 
        <Flex w='100%' p='1rem' bg='primary' h='3.5rem' pos='fixed' top='0' justify='space-between' zIndex='1'>

            {/* Left Side Nav Bar */}
            <Flex h='100%' align='center'>
                {/* Logos */}
                <Flex mr='1rem'>
                    <Image mr='10px' src={QuizletLogo} alt='quizlet logo' />
                    <Image w='5rem' src={CloneLogo} alt='clone logo' />
                </Flex>
                {/* Your Library Button */}
                <LinkRouter to='/'>
                    <Flex direction='column' justify='center'>
                        <Button h='2rem' id='bob' mt='.7rem' mb='.63rem' mr='1rem' _hover={{ bg: 'primary' }} fontSize='sm' color='#fff' bg='primary' rightIcon={<RiArrowDownSLine color='#fff' size='1.5rem' />}>Your Library </Button>
                    </Flex>
                </LinkRouter>
                {/* Create (Study Sets / Folder) Button */}
                <Popover>
                    <PopoverTrigger >
                        <Button h='2rem' fontSize='sm' color='primary' bg='#7dd' rightIcon={<RiArrowDownSLine size='1.5rem' />}>Create </Button>
                    </PopoverTrigger>
                    <PopoverContent ml='5.5rem' w='12rem' h='6rem'>
                        <PopoverBody >
                            {/* Study Set | Folder */}
                            <Flex direction='column' align='flex-start' h='5rem' justify='space-evenly'>
                                <LinkRouter to='/create-set'>
                                    <Button variant='ghost' _hover={{ color: 'black', fontWeight: '700', bg: '#E2E8F0' }} w='10rem' h='2rem' justifyContent='flex-start' mt='.2rem' fontSize='sm' color='slightShade' leftIcon={<IoMdCopy size='1.7rem' />} >Study Set</Button>
                                </LinkRouter>
                                <Button variant='ghost' onClick={onOpen} _hover={{ color: 'black', fontWeight: '700', bg: '#E2E8F0' }} w='10rem' h='2rem' justifyContent='flex-start' mt='.2rem' fontSize='sm' color='slightShade' leftIcon={<FiFolderPlus size='1.5rem' />} >Folder</Button>

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
                    {/* src={props.userInfo.photoURL} */}
                </Button>
            </Flex>
        </Flex>
    )
}

export default TopNavBarNotFocus
