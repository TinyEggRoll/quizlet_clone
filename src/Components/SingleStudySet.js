import { Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react"
import { FiCopy, MdRotateRight, FaPencilAlt, FaSpellCheck, BsFileEarmarkText, GiMatchHead, GiFallingBlob } from 'react-icons/all';
import { AiOutlineArrowLeft, AiOutlineArrowRight, BiFullscreen } from 'react-icons/all';


// Find down arrow icon for sorting 
// Find the rest of the icons for small setting buttons + Create another component with icons star volume, pencil


const SingleStudySet = () => {
    return (
        <Box p='2rem' mt='6rem' >
            <Flex maxW='80rem' margin='0 auto'>
                <Heading mb='1.5rem' size='lg'>'Insert Heading Here'</Heading>
            </Flex>

            <Flex maxW='80rem' margin='0 auto'>
                <Flex >
                    {/* Left Side Main Heading */}
                    <Flex direction='column'>
                        <Text color='gray.400' fontSize='sm'>Study</Text>
                        <Button leftIcon={<FiCopy />} >Flashcards</Button>
                        <Button leftIcon={<MdRotateRight />} >Learn</Button>
                        <Button leftIcon={<FaPencilAlt />} >Write</Button>
                        <Button leftIcon={<FaSpellCheck />} >Spell</Button>
                        <Button leftIcon={<BsFileEarmarkText />} >Text</Button>
                        <Text color='gray.400' fontSize='sm'>Play</Text>
                        <Button leftIcon={<GiMatchHead />} >Match</Button>
                        <Button leftIcon={<GiFallingBlob />} >Gravity</Button>

                    </Flex>
                    {/* Right Side Main Heading */}
                    <Flex direction='column'>
                        {/* Display Cards/Animation */}
                        {/* Left Arrow | Current Slide | Right Arrow  | Maximize Screen Btn */}
                        <IconButton icon={<BiFullscreen />}></IconButton>
                    </Flex>
                </Flex>

                {/* Bottom Border Gray Divider */}

                {/* Settings For Study Set */}
                <Flex>
                    {/* Avatar | Smaller Setting Buttons  */}
                </Flex>
                {/* Bottom Line Gray Color BG  */}
            </Flex>

            {/* BG Gray, Terms In This Set | Sort By (Original) */}
        </Box>
    )
}

export default SingleStudySet

