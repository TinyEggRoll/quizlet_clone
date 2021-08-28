import {
    Box,
    Button,
    Flex, Heading, IconButton, Input, Link, Text, Textarea,
} from "@chakra-ui/react"

import { animateScroll as scroll } from 'react-scroll'

import { MdKeyboard, BiTransfer } from 'react-icons/all';

import { useState } from 'react';
import CreateNewSingleFlashCard from "./CreateNewSingleFlashCard";
import AddCardButton from "./AddCardButton";

const CreateNewSet = () => {
    const [resize, setResize] = useState("none")

    const [numFlashCards, setNumFlashCards] = useState([
        { text: '', cardNum: '1', id: 'g1' }
    ]);

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const addNewCardHandler = () => {
        setNumFlashCards(prevFlashCards => {
            const updatedFlashCards = [...prevFlashCards];
            updatedFlashCards.push({ text: '', cardNum: updatedFlashCards.length + 1, id: Math.random().toString() });
            return updatedFlashCards;
        });

        scrollToBottom();
    }

    return (
        <>
            {/* Entire Header */}
            <Box>
                {/* Create a new study set + Create Button*/}
                <Flex maxW='80rem' h='6.875rem' margin='0 auto' mt='6rem' mb='1.5rem' p='0 2.5rem' align='center' justify='space-between'>
                    <Heading size='md'>Create a new study set</Heading>
                    <Button id='bottomEnd' size='lg' bg='secondary' color='white'>Create</Button>
                </Flex>

                {/* Next Time use Grid || Description Input Fields */}
                <Flex maxW='80rem' margin='0 auto' p='0 2.5rem' direction='column'>
                    <Input _focus={{ borderBottom: 'solid #4257b2 .125rem' }} mb='1.5rem' variant='filled' placeholder='Enter a title, like "Biology - Chapter 22: Evolution"' />
                    <Flex>
                        <Textarea _focus={{ borderBottom: 'solid #4257b2 .125rem' }} resize={resize} h='6.5rem' mr='1.5rem' variant='filled' flex='1' placeholder='Add a description...' />
                        <Flex flex='1' direction='column' ml='1.5rem'>
                            <Input _focus={{ borderBottom: 'solid #4257b2 .125rem' }} mb='1.5rem' variant='filled' placeholder='School name' />
                            <Input isDisabled variant='filled' placeholder='Course' />
                        </Flex>
                    </Flex>
                </Flex>

                {/* Edit Settings Div */}
                <Flex maxW='80rem' margin='0 auto' p='0 2.5rem' pb='2rem' justify='space-between' align='center' mt='1.5rem'>
                    <Link color='secondary'>+ Import from Word, Excel, Google Docs, etc.</Link>
                    <Flex w='25rem' justify='space-between' align='center'>
                        <Flex direction='column'>
                            <Text fontSize='sm'>Visible to everyone</Text>
                            <Link ml='3.7rem' textAlign='end' color='secondary'>Change</Link>
                        </Flex>
                        <Flex direction='column' >
                            <Text fontSize='sm'>Only editable by me</Text>
                            <Link ml='4rem' textAlign='end' color='secondary'>Change</Link>
                        </Flex>

                        <IconButton _hover={{ bg: 'gray.500' }} isDisabled bg='gray.500' size='sm' icon={<BiTransfer color='white' size='1.5rem' />} />
                        <IconButton bg='#3ccfcf' size='sm' icon={<MdKeyboard color='white' size='1.5rem' />} />
                    </Flex>
                </Flex>
            </Box>

            {/* Below Is Creation of Every Single Flash Card */}
            <Flex w='100%' h='100%' bg='#f6f7fb' direction='column'>
                {numFlashCards.map((currCard) => (
                    <CreateNewSingleFlashCard cardNum={currCard.cardNum} key={currCard.id} id={currCard.id} />
                ))}
                <AddCardButton addNewCardHandler={addNewCardHandler} />
                <Button onClick={scrollToTop}>Click Me To Scroll Up</Button>
            </Flex>


        </>
    )
}

export default CreateNewSet
