import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, Input, Button, Text, Box, Flex, Heading, Stack, FormErrorMessage } from '@chakra-ui/react';
import toast from 'react-hot-toast';

// Local imports
import { API_BASE_URL } from '../util.js';
import { useUser } from '../context/UserContext.jsx';

export default function SignIn() {
    const navigate = useNavigate();
    const { updateUser } = useUser();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const doSubmit = async (values) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (res.status === 200) {
                toast.success('Sign in successful.');
                updateUser(data);
                navigate('/profile');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong.');
        }
    };
}
