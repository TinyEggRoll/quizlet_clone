import { Flex, Link, Text } from "@chakra-ui/react"

const AddCardButton = (props) => {
    return (

        <Flex onClick={props.addNewCardHandler} w='80rem' h='8rem' margin='0 auto' bg='white' justify='center' align='center' mt='3rem' mb='8rem' border='solid #EDF2F7 .25rem' borderRadius='1rem'>
            <Link pt='2.5rem' w='100%' h='100%' textAlign='center' _hover={{ color: '#ffdc62', textDecoration: 'none' }} >
                <Text _hover={{ color: '#ffdc62', borderBottom: 'solid #ffdc62 .25rem' }} fontWeight='625' pb='.5rem' borderBottom='solid #3ccfcf .25rem' display='inline' >+ ADD CARD</Text>
            </Link>
        </Flex>

    )
}

export default AddCardButton
