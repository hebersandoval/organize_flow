import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Button, Text, Link, Flex, Stack, Image } from '@chakra-ui/react';

// Local imports
import productiveSvg from '/productive.svg';
export default function Home() {
    return (
        <Flex direction={{ base: 'colum', md: 'row' }} gap={6} p={14} maxW="6-xl" mx="auto">
            <Stack flex="1" alignSelf="center">
                <Heading as="h1" fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="bold" color="gray.700">
                    Make your{' '}
                    <Text as="span" color="gray.500">
                        perfect
                    </Text>
                    <br />
                    day
                </Heading>

                <Box color="gray.500" pt="8">
                    Organize Flow will help you manage your day and to-do list.
                    <br />
                    We have a wide range of feautres to help you get things done.
                </Box>

                <Link as={RouterLink} to={'/profile'} fontWeight="bold" color="blue.400">
                    Let's get started...
                </Link>
            </Stack>

            <Box flex="1">
                <Image src={productiveSvg} maxWidth="400px" alt="Orgainzing illustration" />
            </Box>
        </Flex>
    );
}
