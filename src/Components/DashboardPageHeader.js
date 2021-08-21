import {
    Flex, Avatar, Heading
} from "@chakra-ui/react"

import StudySets from "./ViewOptions/StudySets"
import Folders from "./ViewOptions/Folders"

const DashboardPageHeader = () => {
    return (
        <>
            {/* Dashboard Page Header (Avatar + Name)*/}
            <Flex maxW='80rem' margin='0 auto' mt='6rem' mb='2rem' align='center'>
                <Avatar size='lg' />
                {/* src={props.userInfo.photoURL} */}
                <Heading size='lg' p='2rem' color='gray.700'></Heading>
                {/* {props.userInfo.displayName} */}
            </Flex>

            <StudySets />
            {/* <Folders /> */}
        </>
    )
}

export default DashboardPageHeader
