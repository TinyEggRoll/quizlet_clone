import {
    Flex, Image, Text, Box, Link, Button, Input, FormControl,
    FormLabel,
    FormHelperText,
} from "@chakra-ui/react"
import Illustration from '../assets/illustration.png'
import Logo from '../assets/Quizlet_Logo.svg'
import Logo2 from '../assets/Quizlet_Logo2.svg'
import { useState } from "react";


const LogIn2 = () => {
    const [submitBtn, setSubmitBtn] = useState(true);

    const buttonChangeHandler = () => {
        setSubmitBtn(false);
    }

    return (
        <Flex height='100vh'>


            {/* Login Page : Left */}
            <Flex direction='column' flex='1' justify='space-between'>
                <Flex p='2rem'>
                    <Image mr='10px' htmlHeight='100px' htmlWidth='100px' src={Logo} alt='logo 1' />
                    <Image htmlHeight='100px' htmlWidth='100px' src={Logo2} alt='logo 2' />
                </Flex>
                <Image align='center' src={Illustration} alt='login illustration 2' />
            </Flex>

            <Flex flex='1' direction='column' align='center'>
                <Text>Stuff</Text>
                <Flex w='80%'>
                    <Button w='100%' variant='outline'>click me!</Button>

                </Flex>
                <Button w='80%' variant='outline'>click me!</Button>
            </Flex>

        </Flex>
    )
}

export default LogIn2
