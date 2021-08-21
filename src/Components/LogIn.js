import {
    Flex, Image, Text, Box, Link, Button, Input, FormControl,
    FormLabel,
    FormHelperText,
} from "@chakra-ui/react"

import QuizletLogo from '../assets/Quizlet_Logo1.svg'
import CloneLogo from '../assets/Quizlet_Logo2.svg'
import Illustration from '../assets/illustration.png'
import login_Yellow_Mark from '../assets/login_Yellow_Mark.svg'
import { FcGoogle, FaMask } from 'react-icons/all';
import { useState } from "react";

import socialMediaAuth from '../service/auth'
import { googleProvider } from "../service/authMethod"


const LogIn = (props) => {
    const [submitBtn, setSubmitBtn] = useState(true);

    const buttonChangeHandler = () => {
        setSubmitBtn(false);
    }

    const handleLoginHandler = async (provider) => {
        const userObject = await socialMediaAuth(provider)
        if (userObject.displayName !== undefined) {
            console.log("DATA SENT TO PARENT!");
            props.userFoundHandler(userObject);
        }
    }

    return (
        // Whole Login Page
        <Flex >

            {/* Login Page : Left */}
            <Flex direction='column' flex='1' maxW='60rem' >
                <Box>
                    {/* Logo */}
                    <Flex p='1rem' mr='1rem' h='3.5rem'>
                        <Image mr='10px' src={QuizletLogo} alt='quizlet logo' />
                        <Image w='5rem' src={CloneLogo} alt='clone logo' />
                    </Flex>
                </Box>

                <Flex direction='column' m='15rem 1rem'  >
                    <Image src={Illustration} alt='login illustration' />
                    <Text> <Link isExternal href='https://icons8.com/' color='secondary'>Illustration from icons8</Link></Text>
                </Flex>
            </Flex>

            {/* Login Page: Right */}
            <Flex flex='1.5' direction='column' align='center' maxW='60rem' m='auto' mt='5rem'>
                {/* Sign (up/in) Link */}
                <Flex w='70%' justify='flex-start' >
                    <Link fontSize='2rem' pr='1rem'> Sign up</Link>
                    <Flex direction='column'>
                        <Link fontSize='2rem'> Log in</Link>
                        <Link>
                            <Image ml='.8rem' src={login_Yellow_Mark}></Image>
                        </Link>
                    </Flex>
                </Flex>
                {/* Log in Quick Buttons */}
                <Flex w='70%' direction='column'>
                    <Button h='5rem' size='lg' onClick={() => handleLoginHandler(googleProvider)} mt='3rem' mb='2rem' iconSpacing='10rem' pr='14rem' leftIcon={<FcGoogle size='2.5rem' />} colorScheme='facebook' variant='outline'>
                        Log in With Google
                    </Button>
                    <Button h='5rem' size='lg' mb='2rem' iconSpacing='10rem' pr='13.4rem' leftIcon={<FaMask size='2.5rem' />} colorScheme='facebook' variant='outline'>
                        Log in Anonymously
                    </Button>
                </Flex>
                {/* Log in Form */}
                <Flex w='70%' >
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input mb='1rem' placeholder='  login is not accepted at this time' isDisabled borderBottom='4px solid black' variant='unstyled' type="email" />
                        <FormLabel>Password</FormLabel>
                        <Input borderBottom='4px solid black' variant='unstyled' type="Password" />
                        <Flex justify='flex-end'>
                            <FormHelperText mb='1rem'> <Link color='secondary'>Forgot?</Link></FormHelperText>
                        </Flex >
                        {
                            submitBtn ?
                                <Button w='100%' onClick={buttonChangeHandler} color='white' bg='secondary'>Log In</Button>
                                :
                                <Button w='100%' color='white' bg='secondary' isLoading loadingText='Logging in' />
                        }
                        <Flex justify='space-between'>
                            <FormHelperText >Remember to log out on shared devices</FormHelperText>
                            <FormHelperText>
                                <Link color='secondary'>Use magic link instead</Link>
                            </FormHelperText>
                        </Flex>
                    </FormControl>
                </Flex>
            </Flex>
        </Flex >

    )
}

export default LogIn
