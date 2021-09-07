import { Flex, Popover, PopoverTrigger, Button, PopoverBody, PopoverContent, Box, InputGroup, InputLeftElement, Input, Text, Heading } from "@chakra-ui/react"

import { Link as LinkRoute } from 'react-router-dom'

import { RiArrowDownSLine, AiOutlineSearch } from 'react-icons/all';
import SingleStudySet from "../SingleStudySet";


const StudySets = ({ currentUser, studySetList, uniqueKeyList }) => {
    return (
        <>
            <Box>
                <Box borderBottom='.15rem #edeff4 solid'>
                    {/* Dashboard Page Inner */}
                    <Flex margin='0 auto' mt='1rem' maxW='80rem'>
                        <Text fontSize='sm' fontWeight='600' pb='1rem' mr='2rem' _hover={{ textDecoration: ' none' }} borderBottom='.15rem solid #3ccfcf' mb='-.15rem' >Study sets</Text>
                        <LinkRoute to='folders'>
                            <Text fontSize='sm' fontWeight='400' pb='1rem' _hover={{ color: 'highlight', mb: '-.15rem', borderBottom: '2px solid #ffdc62' }}  >Folders</Text>
                        </LinkRoute>
                    </Flex>
                </Box>

                <Box w='100%' bg='#f6f7fb' h='100vh' pt='3rem' >
                    <Flex justify='space-between' maxW='80rem' margin='0 auto' >
                        <Popover w='50%'>
                            <PopoverTrigger w='50%'>
                                <Button variant='outline' h='2.7rem' fontSize='sm' bg='white' color='slightShade' rightIcon={<RiArrowDownSLine size='1.5rem' />}>Created</Button>
                            </PopoverTrigger>
                            <PopoverContent ml='6rem' w='13rem' h='9rem' _focus={{}} >
                                <PopoverBody >
                                    <Flex w='13rem' direction='column' align='flex-start' h='8rem' justify='space-evenly'>
                                        <Button _active={{}} _focus={{}} _hover={{ color: 'black', bg: '#f6f7fb' }} w='90%' justifyContent='flex-start' mt='.2rem' flex='1' fontSize='sm' bg='white' >Created</Button>
                                        <Button _active={{}} _focus={{}} _hover={{ color: 'black', bg: '#f6f7fb' }} w='90%' justifyContent='flex-start' mt='.2rem' flex='1' fontSize='sm' bg='white' >Recent</Button>
                                        <Button _active={{}} _focus={{}} _hover={{ color: 'black', bg: '#f6f7fb' }} w='90%' justifyContent='flex-start' mt='.2rem' flex='1' fontSize='sm' bg='white' >Studied</Button>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>

                        {/* Search (Study Sets) Bar */}
                        <InputGroup mr='10rem' h='2rem' w='17rem' >
                            <InputLeftElement pb='1.4rem' pointerEvents="none" children={<AiOutlineSearch size='1.1rem' color='#4A5568' />} />
                            <Input pb='1rem' fontSize='sm' _focus={{ borderBottom: '3px solid #4257b2' }} borderBottom='3px solid #edeff4' variant='unstyled' h='2rem' type="tel" placeholder="Search your sets" />
                        </InputGroup>
                    </Flex>

                    {/* Total List of Study Sets */}
                    <Flex direction='column' maxW='80rem' margin='0 auto' mt='2rem' >
                        {studySetList.map((currCard, index) => (
                            <SingleStudySet
                                currentUser={currentUser}
                                title={currCard.title}
                                totalCards={currCard.flashcards.length}
                                key={uniqueKeyList[index]}
                                id={uniqueKeyList[index]} />
                        ))}

                    </Flex>

                </Box>
            </Box>
        </>
    )
}

export default StudySets
