import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"

const Home = () => {
    const checkOutHandler = async(amount) => {
        const {data: {key}} =  await axios.get("http://localhost:4000/api/getKey")

        const {data : {order}} = await axios.post("http://localhost:4000/checkout" , {
            amount
        })
        // console.log(data)
        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Pranjal Jaiswal",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4000/paymentVerification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
            razor.open()
        
        // Define your checkout handler logic here
    }
   

    const cardProps = {
        amount: 5000,
        img: "https://unsplash.com/photos/macbook-pro-on-top-of-brown-table-1SAnrIxw5OY",
        checkOutHandler: checkOutHandler
    }
    const cardProps1 = {
        amount: 4000,
        img: "https://unsplash.com/photos/macbook-pro-on-top-of-brown-table-1SAnrIxw5OY",
        checkOutHandler: checkOutHandler
    }

    return (
        <Box>
            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column" , "row"]}>
                <Card {...cardProps} />
                <Card {...cardProps1} />
                <Card {...cardProps1} />
                <Card {...cardProps1} />
                <Card {...cardProps1} />
                <Card {...cardProps1} />

            </Stack>
        </Box>
    )
}

export default Home
