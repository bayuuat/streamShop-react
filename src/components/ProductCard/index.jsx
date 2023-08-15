import { Card, CardBody, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ title, price, img, link }) => {
	const priceFormat = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(price));

	return (
		<Link href={`${link}`} _hover={{textDecoration: "none"}} isExternal>
			<Card maxW="lg" background={'#323438'} borderRadius={'lg'}>
				<CardBody padding={'0px'}>
					<Image
						src={img}
						alt={title}
						height={'250px'}
						width={'100%'}
						objectFit={'cover'}
						borderRadius="lg"
						borderBottomRadius={'none'}
					/>
					<Stack mt="1" spacing="1" padding={'3'}>
						<Text color="white" fontSize={'lg'} fontWeight={'medium'}>
							{title}
						</Text>
						<Text color="yellow.500" fontSize="md">
							{priceFormat}
						</Text>
					</Stack>
				</CardBody>
			</Card>
		</Link>
	);
};

export default ProductCard;
