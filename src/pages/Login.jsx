import React from 'react';

import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Login = () => {
	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'}>
			<Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
					<Text fontSize={'lg'} color={'gray.500'}>
						to enjoy all of our cool ✌️
					</Text>
				</Stack>
				<Box rounded={'lg'} bg={'#323438'} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id="username">
							<FormLabel>Username</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" />
						</FormControl>
						<Button
							bg={'yellow.400'}
							color={'gray.700'}
							_hover={{
								bg: 'yellow.500',
							}}
              mt={5}
						>
							Sign in
						</Button>
            <Stack pt={6}>
							<Text align={'center'}>
								Already a user? <Link className="text-yellow-300" to="/register">Register</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Login;
