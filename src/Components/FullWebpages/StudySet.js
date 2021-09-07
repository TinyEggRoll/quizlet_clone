import { useState, useEffect } from 'react'
import { Avatar, Box, Button, Flex, Heading, IconButton, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, Textarea } from "@chakra-ui/react"

import { HiOutlinePlusCircle, RiArrowDownSLine, BiPencil, FiUpload, RiInformationLine, BiDotsHorizontalRounded, AiOutlineArrowLeft, AiOutlineArrowRight, MdKeyboard, BiFullscreen, FiCopy, MdRotateRight, FaPencilAlt, FaSpellCheck, BsFileEarmarkText, GiMatchHead, GiFallingBlob } from 'react-icons/all';

import TopNavBar from "../Fragments/TopNavBar";
import SingleFlashCard from "../Fragments/SingleFlashCard";

import { useAuth } from '../../context/auth-context'

import firebase from 'firebase'

const StudySet = () => {
    const [studySetTitle, setStudySetTitle] = useState()
    const [studySetFlashCards, setStudySetFlashCards] = useState()
    const [numFlashCards, setNumFlashCards] = useState()

    const { currentUser } = useAuth();

    // useEffect(() => {
    //     const totalStudySets = firebase.database().ref('totalStudySets')
    //     totalStudySets.on('value', (snapshot) => {
    //         const studySetList = []

    //         const todos = snapshot.val()
    //         console.log(todos)
    //         for (let id in todos) {
    //             studySetList.push(todos[id])
    //         }

    //         // setStudySetFlashCards(todos[0]['flashcards'])
    //         // setStudySetTitle(todos[0]['title'])
    //         // setNumFlashCards(todos[0]['flashcards'].length)

    //     })
    // }, [])

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
                        <Heading mb='2.5rem' size='lg'>{studySetTitle}</Heading>
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
                            <Flex direction='column' justify='space-between' w='158px' h='108px'>
                                <Text pl='0.5rem' color='gray.400' fontSize='sm'>Play</Text>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<GiMatchHead size='1.5rem' color='#4257b2' />} >Match</Button>
                                <Button variant='ghost' isDisabled iconSpacing='1rem' justifyContent='flex-start' _hover={{ bg: '#ffcd1f' }} leftIcon={<GiFallingBlob size='1.5rem' color='#4257b2' />} >Gravity</Button>
                            </Flex>

                        </Flex >

                        {/* Right Side Main Content */}
                        <Flex direction='column'>
                            {/* FlashCard SlideShow */}
                            <Box w='560px' h='348px' border='solid #E2E8F0 .25rem' mb='1rem' >
                                <Text textAlign='center' margin='auto 0'>FlashCards PlaceHolder</Text>
                            </Box>
                            {/* SlideShow Settings -> Left Arrow | Current Slide | Right Arrow  | Maximize Screen Btn */}
                            <Flex align='center' justify='flex-end'>
                                <Flex align='center' mr='5.5rem'>
                                    <IconButton variant='ghost' icon={<AiOutlineArrowLeft size='1.5rem' />} />
                                    <Text fontSize='sm' marginX='3rem'>1/25</Text>
                                    <IconButton variant='ghost' icon={<AiOutlineArrowRight size='1.5rem' />} />
                                </Flex>
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
                            <Avatar src={currentUser.photoURL} mr='0.5rem' />
                            <Flex direction='column' justify='center' align='flex-start'>
                                <Text mb='0.2rem' fontSize='x-small' color='gray.400'>Created by</Text>
                                <Text fontWeight='600' fontSize='sm'>{currentUser.displayName}</Text>
                            </Flex>
                        </Flex>
                        {/* Settings for Study Set */}
                        <Flex>
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<HiOutlinePlusCircle size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<BiPencil size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<FiUpload size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<RiInformationLine size='1.3rem' />} />
                            <IconButton variant='ghost' icon={<BiDotsHorizontalRounded size='1.3rem' />} />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

            {/* Double Box Divs for Gray Background | All Flash Cards */}
            <Box bg='#f6f7fb' h='100vh' >
                <Box margin='0 auto' maxW='55rem' >
                    {/* All Flash Cards  */}
                    <Flex p='2.5rem' w='70%' align='center' justify='space-between' >
                        {/* Number of Terms In This Set */}
                        <Heading size='md'>Terms in this set ({numFlashCards})</Heading>
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
                    {/* {studySetFlashCards.map((card, index) => (
                        <SingleFlashCard
                            id={index}
                            key={index}
                            cardTerm={card.term}
                            cardDefinition={card.definition}
                            cardStar={card.star}
                        />
                    ))} */}

                </Box>
            </Box>
        </>
    )
}

export default StudySet

