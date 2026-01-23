import { Link as RouterLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Flex, Box, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';

// Local imports
import { useUser } from '../context/UserContext';
import { API_BASE_URL } from '../util.js';

export default function NavBar() {
    const { user, updateUser } = useUser();
    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/signout`, {
                credentials: 'include',
            });

            const data = await res.json();

            toast.success(data.message);

            updateUser(null);

            navigate('/');
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <Box as="nav" bg="red.50">
            <Flex minWidth="max-content" alignItems="center" p="12px" maxW="7xl" m="0 auto">
                <Box p="2">
                    <Link as={RouterLink} fontSize="lg" fontWeight="bold" to="/">
                        Organize Flow
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    {user ? (
                        <Menu>
                            <MenuButton>
                                <Image boxSize="40px" borderRadius="full" src={user.avatar} alt={user.username} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={RouterLink} to="/profile">
                                    Profile
                                </MenuItem>
                                <MenuItem as={RouterLink} to="/tasks">
                                    Tasks
                                </MenuItem>
                                <MenuItem onClick={handleSignout}>Sign out</MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <Link as={RouterLink} to="/signin">
                            Sign in
                        </Link>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}
