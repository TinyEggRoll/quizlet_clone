import { Flex, Text, Heading, Avatar } from "@chakra-ui/react"


const SingleStudySet = ({ currentUser, title, totalCards, id }) => {
    return (
        <Flex align='flex-start' marginY='1rem' bg='white' _hover={{ borderBottom: 'solid #cedaf3 .25rem' }} direction='column' border='solid #EDF2F7 .25rem' borderRadius='1rem' p='1rem'>
            <Flex align='center'>
                <Text ml='0.1rem' pr='1rem' fontSize='sm'  >{totalCards} Terms</Text>
            </Flex>
            <Heading size='md' isTruncated _hover={{ color: '#ffdc62' }} >{title}</Heading>
        </Flex>
    )
}

export default SingleStudySet
