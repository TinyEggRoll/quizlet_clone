import { useRef } from "react";

import { background, Box, Flex, FormLabel, IconButton, Input, Text } from "@chakra-ui/react"

import { BiImageAlt, FiTrash, AiOutlineMenu } from 'react-icons/all';

const CreateNewSingleFlashCard = ({ term, definition, id, cardIndex, totalCards, deleteCardHandler, updateTermHandler, updateDefinitionHandler }) => {
    const termInputRef = useRef()
    const definitionInputRef = useRef()

    const termHandler = () => {
        updateTermHandler(termInputRef.current.value, id)
    }

    const definitionHandler = () => {
        updateDefinitionHandler(definitionInputRef.current.value, id)
    }
    return (
        <>
            <Flex w='80rem' h='12rem' margin='0 auto' bg='white' direction='column' mt='1.5rem' border='solid #EDF2F7 .25rem' borderRadius='1rem'>
                {/* Top Half of New Card | Numbering of Cards*/}
                <Flex p='.75rem' justify='space-between'>
                    <Text color='gray.400' textAlign='center' w='2.5rem'>{cardIndex + 1}</Text>
                    <Box >
                        <IconButton _hover={{ color: '#ffdc62' }} mr='.5rem' variant='ghost' icon={<AiOutlineMenu size='1.5rem' />} />
                        {/* Delete Flashcard Button */}
                        <IconButton isDisabled={totalCards >= 3 ? false : true} onClick={() => { deleteCardHandler(cardIndex) }} _hover={{ color: '#ffdc62' }} variant='ghost' icon={<FiTrash size='1.5rem' />} />
                    </Box>
                </Flex>

                {/* Bottom Half of New Card | Enter Term/Def. */}
                <Flex p='1.5rem .75rem 2rem .75rem'>
                    {/* Left Term */}
                    <Flex direction='column' w='50%' mr='3rem'>
                        <Input ref={termInputRef} onBlur={termHandler} pb='.25rem' pl='0.5rem' defaultValue={term} _focus={{ borderBottom: 'solid #ffdc62 .25rem' }} borderBottom='solid black .25rem' variant='unstyled' fontSize='lg' placeholder='Enter term' />
                        <Flex>
                            <FormLabel mt='.25rem' color='gray.400'>TERM</FormLabel>
                        </Flex>
                    </Flex>
                    {/* Right Term */}
                    <Flex direction='column' w='40%' mr='3rem'>
                        <Input ref={definitionInputRef} onBlur={definitionHandler} pb='.25rem' pl='0.5rem' defaultValue={definition} _focus={{ borderBottom: 'solid #ffdc62 .25rem' }} borderBottom='solid black .25rem' variant='unstyled' fontSize='lg' placeholder='Enter definition' />
                        <Flex>
                            <FormLabel mt='.25rem' color='gray.400'>DEFINITION</FormLabel>
                        </Flex>
                    </Flex>
                    {/* Add Image Button */}
                    <IconButton variant='ghost' w='5rem' h='4rem' mr='1rem' _hover={{ color: '#ffdc62' }} icon={<BiImageAlt size='2rem' />} border='dashed #CBD5E0 .2rem'> </IconButton>
                </Flex>
            </Flex>
        </>
    )
}

export default CreateNewSingleFlashCard
