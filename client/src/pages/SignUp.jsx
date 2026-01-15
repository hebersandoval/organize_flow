import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormControl, Input, Button, Text, Box, Flex, Heading, Stack, FormErrorMessage } from '@chakra-ui/react';
import toast from 'react-hot-toast';

// Local imports
import { API_BASE_URL } from '../util.js';
import { useUser } from '../context/UserContext.jsx';

export default function SignUp() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const { updateUser } = useUser();

    const doSubmit = async (values) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (res.status === 200) {
                toast.success("Sign up succesful. You're now logged in.");
                updateUser(data);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Something went wrong.');
        }
    };

    return (
        <Box p="3" maxW="lg" mx="auto">
            <Heading as="h1" textAlign="center" fontSize="3xl" fontWeight="semibold" my="7">
                Create an account
            </Heading>

            {/* Form details */}
            <form onSubmit={handleSubmit(doSubmit)}>
                <Stack gap="4">
                    <FormControl isInvalid={errors.username}>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Username"
                            {...register('username', { required: 'Username is required' })}
                        />
                        <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: 'Email is required' })}
                        />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </FormControl>

                    <Button type="submit" isLoading={isSubmitting} colorScheme="teal" textTransform="uppercase">
                        Sign up
                    </Button>
                </Stack>
            </form>

            <Flex gap="2" mt="5">
                <Text>Have an account?</Text>
                <Link to={'/signin'}>
                    <Text as="span" color="blue.400">
                        Sign in
                    </Text>
                </Link>
            </Flex>
        </Box>
    );
}
