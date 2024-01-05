import { Box, Heading, VStack , Text} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const {reference} = useParams()
  return (
    <Box>
        <VStack h="100vh" justifyContent={"center"}>
            <Heading textTransform={"uppercase"}>Order Successfull</Heading>
            <Text>
                Reference No. {reference}
            </Text>   
        </VStack>
    </Box>
  )
}

export default PaymentSuccess