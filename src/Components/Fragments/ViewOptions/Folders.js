import { RiArrowDownSLine } from 'react-icons/all';

import { Flex, Popover, PopoverTrigger, Button, PopoverBody, PopoverContent, Box, Text } from "@chakra-ui/react"
import { Link as LinkRoute } from 'react-router-dom'

const Folders = () => {
    return (
        <>
            {/* Main Content Area */}
            <Box borderBottom='.15rem #edeff4 solid'>
                {/* Study Sets | Folders Link */}
                <Flex margin='0 auto' mt='1rem' maxW='80rem'>
                    <LinkRoute to='sets'>
                        <Text fontSize='sm' fontWeight='400' pb='1rem' mr='2rem' _hover={{ color: 'highlight', mb: '-.15rem', borderBottom: '2px solid #ffdc62' }} >Study sets</Text>
                    </LinkRoute>
                    <Text fontSize='sm' fontWeight='600' pb='1rem' mb='-.15rem' _hover={{ textDecoration: ' none' }} borderBottom='.15rem solid #3ccfcf'>Folders</Text>
                </Flex>
            </Box>
            {/* Sort By Box */}
            <Box bg='#f6f7fb' minH='100vh' pt='3rem'>
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
                </Flex>

                {/* List of All Folders */}
                <Flex maxW='80rem' margin='0 auto'>
                    <Text mt='4rem'>Folders are currently not available, come back later ????</Text>
                </Flex>
            </Box>

        </>
    )
}

export default Folders
