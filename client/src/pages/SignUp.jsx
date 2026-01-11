import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormControl, Input, Button, Text, Box, Flex, Heading, Stack, FormErrorMessage } from '@chakra-ui/react';

export default function SignUp() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <Box p="3" maxW="lg" mx="auto">
            <Heading as="h1" textAlign="center" fontSize="3xl" fontWeight="semibold" my="7">
                Create an account
            </Heading>

            <form>{/* form details */}</form>

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
