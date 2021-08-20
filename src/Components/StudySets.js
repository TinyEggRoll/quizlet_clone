import {
    Flex, Link, Popover, Text, PopoverTrigger, Button, PopoverBody, PopoverContent, Box, InputGroup, InputLeftElement, Input
} from "@chakra-ui/react"

import { RiArrowDownSLine, AiOutlineSearch, AiOutlineBell, FiFolderPlus, IoMdCopy } from 'react-icons/all';

const StudySets = () => {
    return (
        <Box maxW='80rem' margin='0 auto'>
            {/* Dashboard Page Inner */}
            <Flex mt='1rem' mb='2.5rem' >
                <Link fontSize='sm' fontWeight='600' _hover={{ textDecoration: 'none' }} pb='.5rem' mr='2rem' borderBottom='2px solid #3ccfcf'>Study sets</Link>
                <Link fontSize='sm' fontWeight='400' pb='.5rem' _hover={{ color: 'highlight', borderBottom: '2px solid #ffdc62' }}>Folders</Link>
            </Flex>

            <Flex justify='space-between' maxW='80rem' margin='0 auto' >
                <Popover w='50%'>
                    <PopoverTrigger w='50%'>
                        <Button h='2rem' fontSize='sm' color='slightShade' rightIcon={<RiArrowDownSLine size='1.5rem' />}>Created</Button>
                    </PopoverTrigger>
                    <PopoverContent ml='6rem' w='13rem' h='9rem' _focus={{}} >
                        <PopoverBody >
                            <Flex w='13rem' direction='column' align='flex-start' h='8rem' justify='space-evenly'>
                                <Button _active={{}} _focus={{}} _hover={{ color: 'black' }} w='90%' justifyContent='flex-start' mt='.2rem' flex='1' fontSize='sm' color='slightShade' >Created</Button>
                                <Button _active={{}} _focus={{}} _hover={{ color: 'black' }} w='90%' justifyContent='flex-start' mt='.2rem' flex='1' fontSize='sm' color='slightShade' >Recent</Button>
                                <Button _active={{}} _focus={{}} _hover={{ color: 'black' }} w='90%' justifyContent='flex-start' mt='.2rem' flex='1' fontSize='sm' color='slightShade'  >Studied</Button>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                {/* Search (Study Sets) Bar */}
                <InputGroup mr='1rem' h='2rem' w='17rem' >
                    <InputLeftElement pb='1.4rem' pointerEvents="none" children={<AiOutlineSearch size='1.1rem' color='#4A5568' />} />
                    <Input pb='1rem' fontSize='sm' _focus={{ borderBottom: '2px solid #4257b2' }} variant='unstyled' h='2rem' type="tel" placeholder="Search your sets" />
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default StudySets
