import { useState } from "react";

import { FcGoogle, FaMask } from 'react-icons/all';

import { Flex, Image, Text, Box, Link, Button, Input, FormControl, FormLabel, FormHelperText, } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'

import QuizletLogo from '../../assets/Quizlet_Logo1.svg'
import CloneLogo from '../../assets/Quizlet_Logo2.svg'
import Illustration from '../../assets/illustration.png'
import login_Yellow_Mark from '../../assets/login_Yellow_Mark.svg'
import { useAuth } from '../../context/auth-context'


const LogIn = (props) => {
    const [submitBtn, setSubmitBtn] = useState(true);
    const { googleLogin, anonymousLogin } = useAuth()
    const history = useHistory()

    const buttonChangeHandler = () => {
        setSubmitBtn(false);
    }

    const googleLoginHandler = async () => {
        try {
            await googleLogin().then((currentUser) => {
                setTimeout(() => {
                    history.push('/' + currentUser.user.displayName.replace(/ /g, '') + '/view/sets')
                }, 500)
            })
        } catch {
            console.log('There is an error in GOOGLE LOGIN loginJS')
        }
    }

    const anonymousLoginHandler = async () => {
        try {
            await anonymousLogin().then((currentUser) => {
                setTimeout(() => {
                    history.push('/' + currentUser.user.uid + '/view/sets')
                }, 500)
            })
        } catch {
            console.log("There is an error in Anonymous login loginJS")
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
                    <Link fontSize='2rem' pr='2rem' color='gray.400'> Sign up</Link>
                    <Flex direction='column'>
                        <Link fontSize='2rem'> Log in</Link>
                        <Link>
                            <Image ml='.8rem' src={login_Yellow_Mark}></Image>
                        </Link>
                    </Flex>
                </Flex>
                {/* Log in Quick Buttons */}
                <Flex w='70%' direction='column'>
                    <Button onClick={googleLoginHandler} h='4.4rem' size='lg' mt='3rem' mb='2rem' iconSpacing='10rem' pr='14rem' leftIcon={<FcGoogle size='2.5rem' />} colorScheme='facebook' variant='outline'>
                        Log in With Google
                    </Button>
                    <Button onClick={anonymousLoginHandler} h='4.4rem' size='lg' mb='2rem' iconSpacing='10rem' pr='13.4rem' leftIcon={<FaMask size='2.5rem' />} colorScheme='facebook' variant='outline'>
                        Log in Anonymously
                    </Button>
                </Flex>
                {/* Log in Form */}
                <Flex w='70%' >
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input isDisabled pb='.5rem' mb='1rem' pl='.5rem' placeholder='Username and PW is not accepted. Please Use Google or Anonymous Login' borderBottom='4px solid black' variant='unstyled' type="email" />
                        <FormLabel>Password</FormLabel>
                        <Input pl='.5rem' pb='.5rem' borderBottom='4px solid black' variant='unstyled' type="password" />
                        <Flex justify='flex-end'>
                            <FormHelperText mb='1rem'> <Link color='secondary'>Forgot?</Link></FormHelperText>
                        </Flex >
                        {
                            submitBtn ?
                                <Button _hover={{ backgroundColor: '#28a7a7' }} w='100%' h='4.4rem' onClick={buttonChangeHandler} color='white' bg='secondary'>Log In</Button>
                                :
                                <Button w='100%' h='5rem' color='white' bg='secondary' isLoading loadingText='Logging in' />
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
