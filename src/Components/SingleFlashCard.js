import { Flex, IconButton, Textarea } from "@chakra-ui/react"
import { BiPencil, AiFillStar, FiVolume2 } from 'react-icons/all';

const SingleFlashCard = () => {
    return (
        <Flex paddingX='2.5rem'>
            <Flex w='69%' border='solid #EDF2F7 .25rem' borderRadius='1rem' bg='white' mb='.625rem' >
                {/* Term */}
                <Flex paddingX='2rem' flex='25%'>
                    <Textarea mt='1rem' fontSize='2xl' variant='unstyled' isReadOnly resize='none'>先生</Textarea>
                </Flex>
                {/* Definition */}
                <Flex paddingX='2rem' flex='50%' borderLeft='solid #EDF2F7 .20rem '>
                    <Textarea mt='1rem' variant='unstyled' isReadOnly resize='none'> xiānsheng (mister; husband; teacher) xiānsheng (mister; husband; teacher)xiānsheng (mister; husband; teacher)xiānsheng (mister; husband; teacher) </Textarea>
                </Flex>
                {/* Triple Icon Buttons */}
                <Flex mt='1rem' >
                    <IconButton _hover={{ color: '#ffcd1f' }} mr='.25rem' variant='ghost' icon={<AiFillStar size='1.5rem' />} />
                    <IconButton _hover={{ color: '#ffcd1f' }} mr='.25rem' variant='ghost' icon={<FiVolume2 size='1.5rem' />} />
                    <IconButton _hover={{ color: '#ffcd1f' }} mr='.25rem' variant='ghost' icon={<BiPencil size='1.5rem' />} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SingleFlashCard
