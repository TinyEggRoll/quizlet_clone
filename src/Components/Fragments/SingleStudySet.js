import { Flex, Text, Heading } from "@chakra-ui/react"

import { Link as LinkRoute } from 'react-router-dom'

const SingleStudySet = ({ title, totalCards, id }) => {
    return (
        <LinkRoute to={'/' + id}>
            {/* Individual Study Set Link */}
            <Flex align='flex-start' marginY='1rem' bg='white' _hover={{ borderBottom: 'solid #cedaf3 .25rem' }} direction='column' border='solid #EDF2F7 .25rem' borderRadius='1rem' p='1rem'>
                <Flex align='center'>
                    {/* Number of Terms */}
                    <Text ml='0.1rem' pr='1rem' fontSize='sm'  >{totalCards} Terms</Text>
                </Flex>
                {/* Title */}
                <Heading size='md' isTruncated _hover={{ color: '#ffdc62' }} >{title}</Heading>
            </Flex>
        </LinkRoute>
    )
}

export default SingleStudySet
