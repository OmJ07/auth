import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
  return (
    <Container
    py={"16"}
    minH="90vh"
    >
     <form action="">
         <Heading children="Update Profile" my="16" textAlign={["center","left"]} textTransform="uppercase"/>
         <VStack spacing={"8"}>
         <Input 
                 value={name} 
                 onChange={(e)=>setName(e.target.value)} 
                 type="text"
                 placeholder='New Name'
                 focusBorderColor='yellow.500'
         />
              <Input 
                 value={email} 
                 onChange={(e)=>setEmail(e.target.value)} 
                 type="email"
                 placeholder='New Email'
                 focusBorderColor='yellow.500'
         />
         <Button w="full" type="submit" colorScheme={"yellow"} >Update</Button>
         </VStack>
     </form>
 
    </Container>
  )
}

export default UpdateProfile
