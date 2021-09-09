import { useState } from 'react';

import { Box, Button, Flex, Heading, IconButton, Input, Link, Text, Textarea } from "@chakra-ui/react"
import { animateScroll as scroll } from 'react-scroll'
import { useHistory } from 'react-router';
import firebase from 'firebase'

import { MdKeyboard, BiTransfer } from 'react-icons/all';

import CreateNewSingleFlashCard from "../Fragments/CreateNewSingleFlashCard";
import AddCardButton from "../Fragments/AddCardButton";
import TopNavBar from '../Fragments/TopNavBar';

import { useAuth } from '../../context/auth-context'

const CreateNewStudySet = () => {
    const [submitBtn, setSubmitBtn] = useState(true);
    const { currentUser } = useAuth();
    const history = useHistory()
    let studySetKey
    let studySetKey1

    const [numFlashCards, setNumFlashCards] = useState({
        title: '',
        description: '',
        flashCards: [
            { term: '', definition: '', id: Math.floor((Math.random() * 10000000) + 1) },
            { term: '', definition: '', id: Math.floor((Math.random() * 10000000) + 1) }]
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
            const tempCard = { term: '', definition: '', id: Math.floor((Math.random() * 10000000) + 1) }
            updatedFlashCards.flashCards.push(tempCard);
            return updatedFlashCards;
        });
        scrollToBottom();
    }

    const deleteCardHandler = (cardIndex) => {
        setNumFlashCards(prevFlashCards => {
            const updatedFlashCards = { ...prevFlashCards };
            updatedFlashCards.flashCards.splice(cardIndex, 1)
            return updatedFlashCards
        })
    }

    const updateTermHandler = (newTerm, cardId) => {
        let indexOfMatchedCard = tempTermCards.findIndex((obj) => obj.id === cardId)

        if (indexOfMatchedCard === -1) {
            setTempTermCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                const tempCard = { term: newTerm, id: cardId }
                updatedFlashCards.push(tempCard);
                return updatedFlashCards;
            })
        } else {
            setTempTermCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                updatedFlashCards[indexOfMatchedCard].term = newTerm
                return updatedFlashCards;
            })
        }
    }

    const updateDefinitionHandler = (newDefinition, cardId) => {
        let indexOfMatchedCard = tempDefinitionCards.findIndex((obj) => obj.id === cardId)

        if (indexOfMatchedCard === -1) {
            setTempDefinitionCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                const tempCard = { definition: newDefinition, id: cardId }
                updatedFlashCards.push(tempCard);
                return updatedFlashCards;
            })
        } else {
            setTempDefinitionCards((prevFlashCards) => {
                const updatedFlashCards = [...prevFlashCards];
                updatedFlashCards[indexOfMatchedCard].definition = newDefinition
                return updatedFlashCards;
            })
        }
    }

    const updateArrayValues = () => {
        if (tempTermCards.length !== 0) {
            tempTermCards.forEach((currFlashCard, currIndex) => {
                let indexOfMatchedCard = numFlashCards.flashCards.findIndex((obj) => obj.id === tempTermCards[currIndex].id)
                setNumFlashCards((prevFlashCards) => {
                    const updatedFlashCards = { ...prevFlashCards };
                    updatedFlashCards.flashCards[indexOfMatchedCard].term = currFlashCard.term
                    return updatedFlashCards;
                })
            })
        }
        if (tempDefinitionCards.length !== 0) {
            tempDefinitionCards.forEach((currFlashCard, currIndex) => {
                let indexOfMatchedCard = numFlashCards.flashCards.findIndex((obj) => obj.id === tempDefinitionCards[currIndex].id)
                setNumFlashCards((prevFlashCards) => {
                    const updatedFlashCards = { ...prevFlashCards };
                    updatedFlashCards.flashCards[indexOfMatchedCard].definition = currFlashCard.definition
                    return updatedFlashCards;
                })
            })
        }
    }

    const createNewStudySet = async () => {
        await updateArrayValues()

        const todoRef = firebase.database().ref('totalStudySets').push();
        studySetKey = todoRef.key;
        await todoRef.set(numFlashCards)

        setTimeout(() => {
            history.push('/' + studySetKey)
        }, 1000)

    }

    const updateTitle = (e) => {
        let currentTitle = e.target.value
        setNumFlashCards((prevFlashCards) => {
            const updatedFlashCards = { ...prevFlashCards }
            updatedFlashCards.title = currentTitle
            return updatedFlashCards;
        })
    }

    const updateDescription = (e) => {
        let currentDescription = e.target.value
        setNumFlashCards((prevFlashCards) => {
            const updatedFlashCards = { ...prevFlashCards }
            updatedFlashCards.description = currentDescription
            return updatedFlashCards;
        })
    }



    const loadingHandler = () => {
        setSubmitBtn(false)
        createNewStudySet()
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
                    {
                        submitBtn ?
                            <Button onClick={loadingHandler} id='bottomEnd' size='lg' bg='secondary' color='white'>Create</Button>
                            :
                            <Button isLoading loadingText='Saving...' id='bottomEnd' size='lg' bg='secondary' color='white' />
                    }

                </Flex>

                {/* Next Time use Grid || Description Input Fields */}
                <Flex maxW='80rem' margin='0 auto' p='0 2.5rem' direction='column'>
                    <Input defaultValue={numFlashCards.title} onBlur={updateTitle} _focus={{ borderBottom: 'solid #4257b2 .125rem' }} mb='1.5rem' variant='filled' placeholder='Enter a title, like "Biology - Chapter 22: Evolution"' />
                    <Flex>
                        <Textarea _focus={{ borderBottom: 'solid #4257b2 .125rem' }} onBlur={updateDescription} resize={'none'} h='6.5rem' mr='1.5rem' variant='filled' flex='1' placeholder='Add a description...' />
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
                    {numFlashCards.flashCards.map((currCard, index) => (
                        <CreateNewSingleFlashCard
                            updateTermHandler={updateTermHandler}
                            updateDefinitionHandler={updateDefinitionHandler}
                            deleteCardHandler={deleteCardHandler}
                            totalCards={numFlashCards.flashCards.length}
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
