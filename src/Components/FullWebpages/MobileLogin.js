import {
    Flex, Image, Text, Button
} from "@chakra-ui/react"

import Illustration from '../../assets/illustration.png'
import Logo1 from '../../assets/Quizlet_Logo1.svg'
import Logo2 from '../../assets/Quizlet_Logo2.svg'

const MobileLogin = () => {
    return (
        // Screen Display for Mobile Users
        <Flex direction='column' justify='space-between' align='center'>
            <Flex p='2rem'>
                <Image mr='10px' htmlHeight='100px' htmlWidth='100px' src={Logo1} alt='logo 1' />
                <Image htmlHeight='100px' htmlWidth='100px' src={Logo2} alt='logo 2' />
            </Flex>
            <Image align='center' m='1rem' src={Illustration} alt='login illustration' />
            <Text mb='1rem' > This website is not mobile friendly</Text>
            <Button colorScheme='facebook' variant='outline'>Click me for the APP!</Button>
            <Text mb='1rem' > The App is coming soon.</Text>
        </Flex>
    )
}

export default MobileLogin
