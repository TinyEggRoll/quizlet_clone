import { useState, useEffect } from 'react'

import { FaMask, MdDeleteForever, HiOutlinePlusCircle, RiArrowDownSLine, BiPencil, FiUpload, RiInformationLine, BiDotsHorizontalRounded, AiOutlineArrowLeft, AiOutlineArrowRight, MdKeyboard, BiFullscreen, FiCopy, MdRotateRight, FaPencilAlt, FaSpellCheck, BsFileEarmarkText, GiMatchHead, GiFallingBlob } from 'react-icons/all';

import {
    useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Tooltip, Avatar, Box,
    Button, Flex, Heading, IconButton, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, Textarea, ModalFooter
} from "@chakra-ui/react"

import { Link as LinkRoute, useParams, useHistory } from 'react-router-dom'
import firebase from 'firebase'
import ReactCardFlip from 'react-card-flip';

import TopNavBar from "../Fragments/TopNavBar";
import SingleFlashCard from "../Fragments/SingleFlashCard";
import { useAuth } from '../../context/auth-context'


const StudySet = () => {
    const [studySet, setStudySet] = useState({
        title: '',
        description: '',
        flashCards: [{
            term: '',
            definition: '',
            id: ''
        }]
    })
    const [currentFlashCard, setCurrentFlashCard] = useState(0)
    const [move, setMove] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)

    const { currentUser } = useAuth();
    const { studySetID } = useParams()
    const history = useHistory()
    const totalStudySets = firebase.database().ref('users/' + currentUser.uid + '/totalStudySets').child(studySetID)
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        totalStudySets.get().then((snapshot) => {
            const todos = snapshot.val()

            const tempStudySet = {
                title: todos.title,
                description: todos.description,
                flashCards: []
            }

            todos.flashCards.forEach((card) => {
                tempStudySet.flashCards.push(card)
            })

            setStudySet(tempStudySet)
        })
    }, [])

    const deleteStudySet = () => {
        totalStudySets.remove()
        if (currentUser.isAnonymous === true ? history.push('/' + currentUser.uid + '/view/sets')
            :
            history.push('/' + currentUser.displayName.replace(/ /g, '') + '/view/sets')
        );
    }

    const flipHandler = () => {
        setIsFlipped(!isFlipped)
    }

    const incrementSlideHandler = () => {
        setCurrentFlashCard((prevCard) => {
            return prevCard + 1
        })

        setIsFlipped(false)
        setMove(!move)
    }


    const decrementSlideHandler = () => {
        setCurrentFlashCard((prevCard) => {
            return prevCard - 1
        })

        setIsFlipped(false)
        setMove(!move)
    }

    return (
        <>
            {/* Top Nav Bar */}
            <TopNavBar currentUser={currentUser} />
            {/* Main Content */}
            <Box margin='0 auto' mt='3.5rem' maxW='55rem' >
                {/* Heading + Main Content */}
                <Box p='2.5rem' >
                    {/* Heading */}
                    <Flex >
                        <Heading mb='2.5rem' size='lg'>{studySet.title}</Heading>
                    </Flex>
                    {/* Main Content */}
                    <Flex margin='0 auto'>

                        {/* Left Side Main Content */}
                        <Flex direction='column' justify='space-between' mr='6rem' >
                            {/* Group Top: Study */}
                            <Flex direction='column' justify='space-evenly' w='158px' h='240px'>
                                <Text pl='0.5rem' color='gray.400' fontSize='sm'>Study</Text>
                                <Button variant='ghost' iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<FiCopy size='1.5rem' color='#4257b2' />}  >Flashcards</Button>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<MdRotateRight size='1.5rem' color='#4257b2' />} >Learn</Button>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<FaPencilAlt size='1.5rem' color='#4257b2' />} >Write</Button>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<FaSpellCheck size='1.5rem' color='#4257b2' />} >Spell</Button>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<BsFileEarmarkText size='1.5rem' color='#4257b2' />} >Text</Button>
                            </Flex>
                            {/* Group Bottom: Play */}
                            <Flex direction='column' justify='space-between' w='158px' h='108px' mt='1rem'>
                                <Text pl='0.5rem' color='gray.400' fontSize='sm'>Play</Text>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<GiMatchHead size='1.5rem' color='#4257b2' />} >Match</Button>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<GiFallingBlob size='1.5rem' color='#4257b2' />} >Gravity</Button>
                            </Flex>

                        </Flex >

                        {/* Right Side Main Content */}
                        <Flex direction='column' flex='1'>
                            {/* FlashCard SlideShow */}
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront='0.3' flipSpeedFrontToBack='0.3'>
                                <Flex as='button' h='21.25rem' w='34rem' boxShadow={move ? '0 0.3125rem 1.25rem 0 rgb(0 0 0 / 16%)' : '0 0.3125rem 1.25rem .5rem  rgb(0 255 0 /16%)'} borderRadius='1rem' mb='1rem' p='3rem' flex='1' justify='center' align='center' onClick={flipHandler}>
                                    <Heading fontWeight='400' >{studySet.flashCards[currentFlashCard].term}</Heading>
                                </Flex>
                                <Flex as='button' h='21.25rem' w='34rem' boxShadow={move ? '0 0.3125rem 1.25rem 0 rgb(0 0 0 / 16%)' : '0 0.3125rem 1.25rem .5rem rgb(0 255 0 /16%)'} borderRadius='1rem' mb='1rem' p='3rem' flex='1' justify='center' align='center' onClick={flipHandler}>
                                    <Heading fontWeight='400'>{studySet.flashCards[currentFlashCard].definition}</Heading>
                                </Flex>
                            </ReactCardFlip>
                            {/* SlideShow Settings -> Left Arrow | Current Slide | Right Arrow  | Maximize Screen Btn */}
                            <Flex align='center' justify='flex-end'>
                                {/* Left Or Right Button */}
                                <Flex align='center' mr='5.5rem'>
                                    {
                                        currentFlashCard === 0 ?
                                            <IconButton isDisabled variant='ghost' icon={<AiOutlineArrowLeft size='1.5rem' />} />
                                            :
                                            <IconButton onClick={decrementSlideHandler} variant='ghost' icon={<AiOutlineArrowLeft size='1.5rem' />} />

                                    }
                                    <Text fontSize='sm' marginX='3rem'>{currentFlashCard + 1}/{studySet.flashCards.length}</Text>
                                    {
                                        currentFlashCard === studySet.flashCards.length - 1 ?
                                            <IconButton isDisabled variant='ghost' icon={<AiOutlineArrowRight size='1.5rem' />} />
                                            :
                                            <IconButton onClick={incrementSlideHandler} variant='ghost' icon={<AiOutlineArrowRight size='1.5rem' />} />

                                    }
                                </Flex>
                                {/* Full Screen Mode */}
                                <Flex textAlign='end'>
                                    <IconButton mr='1rem' variant='ghost' icon={<MdKeyboard size='1.5rem' />} />
                                    <IconButton variant='ghost' icon={<BiFullscreen size='1.5rem' />} />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>

                {/* Created A Flex Inside a Flex Just To Create a Gray Divider */}
                {/* Avatar + Settings For Study Set */}
                <Flex p='2.5rem' >
                    <Flex pt='2.5rem' w='100%' justify='space-between' borderTop='solid #EDF2F7 .2rem'>
                        {/* Avatar */}
                        <Flex>
                            <Avatar src={currentUser.photoURL} mr='0.5rem' icon={<FaMask size='2rem' color='white' />} bg='#242222' />
                            <Flex direction='column' justify='center' align='flex-start'>
                                <Text mb='0.2rem' fontSize='x-small' color='gray.400'>Created by</Text>
                                <Text fontWeight='600' fontSize='sm'>{currentUser.displayName ? currentUser.displayName : '_anonymous user_'}</Text>
                            </Flex>
                        </Flex>
                        {/* Settings for Study Set */}
                        <Flex>
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' isDisabled variant='ghost' icon={<HiOutlinePlusCircle size='1.3rem' />} />
                            <Tooltip hasArrow label='Edit' fontSize='sm' color='white' bg='primary' borderRadius='0.2rem' p='0.5rem'>
                                {/* Redirect to Edit Study Set Page */}
                                <LinkRoute to={'/' + studySetID + '/edit'}>
                                    {/* Edit Button */}
                                    <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<BiPencil size='1.3rem' />} />
                                </LinkRoute>
                            </Tooltip>
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' isDisabled variant='ghost' icon={<FiUpload size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' isDisabled variant='ghost' icon={<RiInformationLine size='1.3rem' />} />
                            <Tooltip hasArrow label='Delete' fontSize='sm' color='white' bg='primary' borderRadius='0.2rem' p='0.5rem'>
                                <IconButton onClick={onOpen} _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<MdDeleteForever size='1.3rem' />} />
                            </Tooltip>
                            <Modal size='xl' isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent  >
                                    <ModalHeader fontSize='2rem' bg='#4257b2' color='white'>Delete this set?</ModalHeader>
                                    <ModalCloseButton p='2rem' size='lg' color='white' />

                                    <ModalBody direction='column'>
                                        <Heading fontSize='2xl' p='1rem' pt='2rem' pl='0rem'>{studySet.title}</Heading>
                                        <Text p='1rem' pl='0rem'>Your are about to delete this set and all of its data. No one will be able to access this set ever again.</Text>
                                        <Text fontWeight='500' pt='1rem' >Are you absolutely positive? There's no undo.</Text>
                                    </ModalBody>

                                    <ModalFooter paddingY='1.5rem' paddingX='0rem' >
                                        {/* I have no idea why flex='35%' each won't work... */}
                                        <Flex w='100%' justify='space-evenly'>
                                            <Button _hover={{ bg: '#595d6a' }} fontSize='1.5rem' w='14rem' h='4rem' bg='#303545' color='white' onClick={onClose}>Cancel</Button>
                                            <Button _hover={{ bg: '#ff8e7b' }} fontSize='1.5rem' w='14rem' h='4rem' bg='#ff725b' color='white' onClick={deleteStudySet} >Yes, delete set</Button>
                                        </Flex>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            {/* Delete Study Set Button */}
                            <IconButton onClick={onClose} _hover={{ color: '#ffcd1f' }} isDisabled variant='ghost' icon={<BiDotsHorizontalRounded size='1.3rem' />} />
                        </Flex>
                    </Flex>
                </Flex>
                {/* Description */}
                <Flex paddingX='2.5rem' pt='0rem' pb='1rem'>
                    <Textarea defaultValue={studySet.description} mt='1rem' variant='unstyled' isReadOnly resize='none' />
                </Flex>
            </Box >

            {/* Double Box Divs for Gray Background | All Flash Cards */}
            < Box bg='#f6f7fb' minH='100vh' >
                <Box margin='0 auto' maxW='55rem' >
                    {/* All Flash Cards  */}
                    <Flex p='2.5rem' align='center' justify='space-between' >
                        {/* Number of Terms In This Set */}
                        <Heading size='md'>Terms in this set ({studySet.flashCards.length})</Heading>
                        {/* Sort FlashCards Button */}
                        <Popover>
                            <PopoverTrigger >
                                <Button variant='outline' h='2.5rem' iconSpacing='3rem' fontSize='sm' rightIcon={<RiArrowDownSLine size='1.5rem' color='#3ccfcf' />} >Original</Button>
                            </PopoverTrigger>
                            <PopoverContent ml='3rem' w='13rem' h='6rem'>
                                <PopoverBody >
                                    <Flex w='13rem' direction='column' h='4rem'>
                                        <Button variant='unstyled' textAlign='left' pl='.5rem' _active={{}} _focus={{}} _hover={{ bg: '#4299E1', color: 'white' }} mb='0.4rem' w='90%' fontSize='sm'  >Original</Button>
                                        <Button variant='unstyled' textAlign='left' pl='.5rem' _active={{}} _focus={{}} _hover={{ bg: '#4299E1', color: 'white' }} w='90%' mb='0.4rem' fontSize='sm'  >Alphabetical</Button>
                                        <Button variant='unstyled' textAlign='left' pl='.5rem' _active={{}} _focus={{}} _hover={{ bg: '#4299E1', color: 'white' }} w='90%' fontSize='sm' >Your stats</Button>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>

                    {/* Below is A List of Each Flash Card */}
                    {studySet.flashCards.map((card, index) => (
                        <SingleFlashCard
                            id={card.id}
                            key={card.id}
                            cardTerm={card.term}
                            cardDefinition={card.definition}
                        />
                    ))}
                </Box>
            </Box >
        </>
    )
}

export default StudySet

