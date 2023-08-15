import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button, Heading, Text } from '@chakra-ui/react';

// import { ViewIcon, ViewOffIcon } from 'chakra-ui/icons';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'}>
			<Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'} textAlign={'center'}>
						Sign up
					</Heading>
					<Text fontSize={'lg'} color={'gray.500'}>
						to enjoy all of our cool features ✌️
					</Text>
				</Stack>
				<Box rounded={'lg'} bg={'#323438'} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id="name" isRequired>
							<FormLabel>Full Name</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="username" isRequired>
							<FormLabel>Username</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input type={showPassword ? 'text' : 'password'} />
								<InputRightElement h={'full'}>
									<Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}></Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Stack spacing={10} pt={2}>
							<Button
								bg={'yellow.400'}
								color={'gray.700'}
								_hover={{
									bg: 'yellow.500',
								}}
								mt={5}
							>
								Sign up
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={'center'}>
								Already a user? <Link className="text-yellow-300" to="/login">Login</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Register;
