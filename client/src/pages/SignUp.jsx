import { useForm } from 'react-hook-form';

export default function SignUp() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    return <h1>Sign up</h1>;
}
