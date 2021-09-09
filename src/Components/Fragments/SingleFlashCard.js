import { Flex, IconButton, Textarea } from "@chakra-ui/react"

import { BiPencil, AiFillStar, FiVolume2 } from 'react-icons/all';

const SingleFlashCard = ({ cardTerm, cardDefinition, cardStar }) => {
    let star

    if (cardStar) {
        star = <IconButton _hover={{}} mr='.25rem' variant='ghost' icon={<AiFillStar color='#ffcd1f' size='1.5rem' />} />
    } else {
        star = <IconButton _hover={{ color: '#ffcd1f' }} mr='.25rem' variant='ghost' icon={<AiFillStar size='1.5rem' />} />
    }

    return (
        <Flex paddingX='2.5rem'>
            <Flex w='55rem' border='solid #EDF2F7 .25rem' borderRadius='1rem' bg='white' mb='.625rem' >
                {/* Term */}
                <Flex paddingX='2rem' flex='25%'>
                    <Textarea defaultValue={cardTerm} mt='1rem' variant='unstyled' isReadOnly resize='none' />
                </Flex>
                {/* Definition */}
                <Flex paddingX='2rem' flex='50%' borderLeft='solid #EDF2F7 .20rem '>
                    <Textarea defaultValue={cardDefinition} mt='1rem' variant='unstyled' isReadOnly resize='none' />
                </Flex>
                {/* Triple Icon Buttons */}
                <Flex mt='1rem' >
                    {/* Star Button */}
                    {star}
                    {/* Volume Button */}
                    <IconButton _hover={{ color: '#ffcd1f' }} mr='.25rem' variant='ghost' icon={<FiVolume2 size='1.5rem' />} />
                    {/* Edit Button */}
                    <IconButton _hover={{ color: '#ffcd1f' }} mr='.25rem' variant='ghost' icon={<BiPencil size='1.5rem' />} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SingleFlashCard
