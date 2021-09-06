import { useState, useRef } from 'react';

import { Box, Button, Flex, Heading, IconButton, Input, Link, Text, Textarea } from "@chakra-ui/react"
import { animateScroll as scroll } from 'react-scroll'

import { MdKeyboard, BiTransfer } from 'react-icons/all';

import CreateNewSingleFlashCard from "../Fragments/CreateNewSingleFlashCard";
import AddCardButton from "../Fragments/AddCardButton";
import TopNavBar from '../Fragments/TopNavBar';

import { useAuth } from '../../context/auth-context'

const CreateNewStudySet = () => {

    const studySetTitleRef = useRef()
    const { currentUser } = useAuth();

    const [numFlashCards, setNumFlashCards] = useState({
        title: 'testing',
        flashcards: [
            { term: '', definition: '', cardIndex: '', id: Math.floor((Math.random() * 10000000) + 1) },
            { term: '', definition: '', cardIndex: '', id: Math.floor((Math.random() * 10000000) + 1) }]
    });

    const [tempTermCards, setTempTermCards] = useState([]);
    const [tempDefinitionCards, setTempDefinitionCards] = useState([]);

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const addNewCardHandler = () => {
        setNumFlashCards(prevFlashCards => {
            const updatedFlashCards = { ...prevFlashCards };
            const tempCard = { term: '', definition: '', cardIndex: '', id: Math.floor((Math.random() * 10000000) + 1) }
            updatedFlashCards.flashcards.push(tempCard);
            return updatedFlashCards;
        });
        scrollToBottom();
    }

    const deleteCardHandler = (cardIndex) => {
        setNumFlashCards(prevFlashCards => {
            const updatedFlashCards = { ...prevFlashCards };
            updatedFlashCards.flashcards.splice(cardIndex, 1)
            return updatedFlashCards
        })
    }

    const updateTermHandler = (newTerm, cardId) => {
        let indexOfMatchCard = tempTermCards.findIndex((obj) => obj.id === cardId)
        console.log(`indexOfMatchCard`, indexOfMatchCard)
        if (indexOfMatchCard === -1) {
            setTempTermCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                const tempCard = { term: newTerm, id: cardId }
                updatedFlashCards.push(tempCard);
                return updatedFlashCards;
            })
        } else {
            setTempTermCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                updatedFlashCards[indexOfMatchCard].term = newTerm
                return updatedFlashCards;
            })
        }
    }

    const createNewStudySet = () => {
        console.log(studySetTitleRef.current.value)
    }

    const updateTitle = (e) => {
        let currentTitle = e.target.value
        setNumFlashCards((prevFlashCards) => {
            const updatedFlashCards = { ...prevFlashCards }
            updatedFlashCards.title = currentTitle
            return updatedFlashCards;
        })
    }

    const updateDefinitionHandler = (newDefinition, cardId) => {
        let indexOfMatchCard = tempDefinitionCards.findIndex((obj) => obj.id === cardId)

        if (indexOfMatchCard === -1) {
            setTempDefinitionCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                const tempCard = { term: newDefinition, id: cardId }
                updatedFlashCards.push(tempCard);
                return updatedFlashCards;
            })
        } else {
            setTempDefinitionCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                updatedFlashCards[indexOfMatchCard].term = newDefinition
                return updatedFlashCards;
            })
        }
    }

    return (
        <>
            {/* Top Nav Bar */}
            <TopNavBar currentUser={currentUser} />

            {/* Entire Main Content */}
            <Box >

                {/* Top Half of Content */}
                {/* Create a new study set + Create Button*/}
                <Flex maxW='80rem' h='6.875rem' margin='0 auto' mt='5.5rem' mb='1.5rem' p='0 2.5rem' align='center' justify='space-between'>
                    <Heading size='md'>Create a new study set</Heading>
                    <Button onClick={createNewStudySet} id='bottomEnd' size='lg' bg='secondary' color='white'>Create</Button>
                </Flex>

                {/* Next Time use Grid || Description Input Fields */}
                <Flex maxW='80rem' margin='0 auto' p='0 2.5rem' direction='column'>
                    <Input onBlur={updateTitle} _focus={{ borderBottom: 'solid #4257b2 .125rem' }} mb='1.5rem' variant='filled' placeholder='Enter a title, like "Biology - Chapter 22: Evolution"' />
                    <Flex>
                        <Textarea _focus={{ borderBottom: 'solid #4257b2 .125rem' }} resize={'none'} h='6.5rem' mr='1.5rem' variant='filled' flex='1' placeholder='Add a description...' />
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

                {/* Below Is Creation of Every Single Flash Card */}
                <Flex bg='#f6f7fb' direction='column'>
                    {numFlashCards.flashcards.map((currCard, index) => (
                        <CreateNewSingleFlashCard
                            updateTermHandler={updateTermHandler}
                            updateDefinitionHandler={updateDefinitionHandler}
                            deleteCardHandler={deleteCardHandler}
                            totalCards={numFlashCards.flashcards.length}
                            term={currCard.term}
                            definition={currCard.definition}
                            cardIndex={index}
                            key={currCard.id}
                            id={currCard.id} />
                    ))}

                    {/* Add New Flash Card Button */}
                    <AddCardButton addNewCardHandler={addNewCardHandler} />

                    {/* Scroll To Top Button */}
                    <Button onClick={scrollToTop}>Click Me To Scroll Up</Button>
                </Flex>
            </Box>

        </>
    )
}

export default CreateNewStudySet
