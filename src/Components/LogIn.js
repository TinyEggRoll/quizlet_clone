import {
    Flex, Image, Text, Box, Link, Button, Input, FormControl,
    FormLabel,
    FormHelperText,
} from "@chakra-ui/react"
import Illustration from '../assets/illustration.png'
import Logo from '../assets/Quizlet_Logo.svg'
import Logo2 from '../assets/Quizlet_Logo2.svg'
import login_Yellow_Mark from '../assets/login_Yellow_Mark.svg'
import { FcGoogle } from 'react-icons/all';
import { FaMask } from 'react-icons/all';
import { useState } from "react";
import socialMediaAuth from "../service/auth"
import { googleProvider } from "../config/authMethod"


const LogIn = () => {
    const [submitBtn, setSubmitBtn] = useState(true);

    const buttonChangeHandler = () => {
        setSubmitBtn(false);
    }

    const handleLoginHandler = async (provider) => {
        const res = await socialMediaAuth(provider)
        console.log(res);
    }

    return (
        // Left & Right Side Login Page
        <Flex height='100vh'>

            {/* Login Page : Left */}
            <Flex direction='column' flex='1'>
                <Box>
                    <Flex p='2rem'>
                        <Image mr='10px' htmlHeight='100px' htmlWidth='100px' src={Logo} alt='logo 1' />
                        <Image htmlHeight='100px' htmlWidth='100px' src={Logo2} alt='logo 2' />
                    </Flex>

                </Box>
                <Flex direction='column' h='100%' justify='center' align='center'>
                    <Image src={Illustration} alt='login illustration' />
                    <Text mb='1rem'> <Link isExternal href='https://icons8.com/' color='secondary'>Illustration from icons8</Link></Text>
                </Flex>
            </Flex>

            {/* Login Page: Right */}
            <Flex flex='1.5' direction='column' align='center' justifyContent='center' >
                {/* Log in/up Link */}
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
                    <Button onClick={() => handleLoginHandler(googleProvider)} mt='3rem' mb='2rem' iconSpacing='2rem' leftIcon={<FcGoogle />} colorScheme='facebook' variant='outline'>
                        Log in With Google
                    </Button>
                    <Button mb='2rem' iconSpacing='2rem' leftIcon={<FaMask />} colorScheme='facebook' variant='outline'>
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
