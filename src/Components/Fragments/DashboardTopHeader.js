import { Flex, Avatar, Heading } from "@chakra-ui/react"

const DashboardTopHeader = ({ currentUser }) => {
    return (
        <>
            {/* Dashboard Page Header (Avatar + Name)*/}
            <Flex maxW='80rem' margin='0 auto' mt='5.5rem' mb='2rem' align='center'>
                <Avatar mr='2rem' size='lg' src={currentUser.photoURL} />
                <Heading size='lg' color='gray.700'>{currentUser.displayName}</Heading>
            </Flex>
        </>
    )
}

export default DashboardTopHeader
