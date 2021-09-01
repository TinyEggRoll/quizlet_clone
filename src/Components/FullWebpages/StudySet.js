import { Avatar, Box, Button, Flex, Heading, IconButton, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react"

import { FiCopy, MdRotateRight, FaPencilAlt, FaSpellCheck, BsFileEarmarkText, GiMatchHead, GiFallingBlob } from 'react-icons/all';
import { AiOutlineArrowLeft, AiOutlineArrowRight, MdKeyboard, BiFullscreen } from 'react-icons/all';
import { AiOutlinePlus, BiPencil, FiUpload, RiInformationLine, BiDotsHorizontalRounded } from 'react-icons/all';
import { RiArrowDownSLine } from 'react-icons/all';

import TopNavBar from "../Fragments/TopNavBar";
import SingleFlashCard from "../Fragments/SingleFlashCard";


const SingleStudySet = () => {
    return (
        <>
            {/* Top Nav Bar */}
            <TopNavBar />

            {/* Main Content */}
            <Box margin='0 auto' mt='6rem' maxW='80rem' >
                {/* Heading + Main Content */}
                <Box p='2.5rem' >
                    {/* Heading */}
                    <Flex >
                        <Heading mb='1.5rem' size='lg'>'Insert Heading Here'</Heading>
                    </Flex>
                    {/* Main Content */}
                    <Flex margin='0 auto'>
                        {/* Left Side Main Content */}
                        <Flex direction='column' justify='space-around' mr='6rem' >
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


                {/* Created A Flex Inside a Flex Just TO Create a Gray Divider */}
                {/* Avatar + Settings For Study Set */}
                <Flex w='71%' p='2.5rem' >
                    <Flex pt='2.5rem' paddingX='0rem' w='100%' justify='space-between' borderTop='solid #EDF2F7 .2rem'>
                        {/* Avatar */}
                        <Flex>
                            <Avatar />
                        </Flex>
                        {/* Settings for Study Set */}
                        <Flex>
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<AiOutlinePlus size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<BiPencil size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<FiUpload size='1.3rem' />} />
                            <IconButton _hover={{ color: '#ffcd1f' }} mr='.5rem' variant='ghost' icon={<RiInformationLine size='1.3rem' />} />
                            <IconButton variant='ghost' icon={<BiDotsHorizontalRounded size='1.3rem' />} />
                        </Flex>
                    </Flex>
                </Flex>

                <Flex paddingX='2.5rem' w='71%'>
                    <Text>Integrated Chinese Level 1 Part 1 Lesson 3 vocabulary; Dialogue I and Dialogue II. Character Pinyin (English).</Text>
                </Flex>

            </Box>

            {/* Double Box Divs for Gray Background | All Flash Cards */}
            <Box bg='#f6f7fb' mt='2.5rem' h='100vh' >
                <Box margin='0 auto' maxW='80rem' >
                    {/* All Flash Cards  */}
                    <Flex p='2.5rem' w='70%' justify='space-between' >
                        {/* Number of Terms In This Set */}
                        <Heading size='md'>Terms in this set (124)</Heading>
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
                    <SingleFlashCard />
                    <SingleFlashCard />

                </Box>
            </Box>
        </>
    )
}

export default SingleStudySet

