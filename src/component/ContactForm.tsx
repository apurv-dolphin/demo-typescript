import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { contact } from "../redux/action/action";
import Header from "./Header";

export default function ContactForm() {
  const [formData, SetFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    SetFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: {
    [x: string]: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    console.log("__form", formData);
    dispatch(contact(formData));
    SetFormData({
      firstname: "",
      lastname: "",
      email: "",
      contactno: "",
    });
  };
  return (
    <>
      <Header
        filter={""}
        handleSearch={function (e: any): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Box
        w={["full", "md"]}
        p={[8, 10]}
        mt={[10, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "black"]}
        borderRadius={10}
        boxShadow="dark-lg"
        rounded="md"
        bgImage="url('https://p4.wallpaperbetter.com/wallpaper/9/519/764/mountains-best-for-desktop-background-wallpaper-preview.jpg')"
      >
        <Box color="#fff">
         <Box>
         <Image
            boxSize="50px"
            src="https://cdn-icons-png.flaticon.com/512/88/88450.png"
            alt="contact form"
            backgroundColor={"#fff"}
          />
         </Box>
          <VStack spacing={1} align={["flex-start", "center"]} w="full">
            <Heading>Contact Form</Heading>
            <Text>Please Fill this form</Text>
          </VStack>
        </Box>
        <div style={{ marginTop: "15px" }}>
          <Box color="#fff">
            <FormControl>
              <Box mb={4}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstname"
                  borderColor="#fff"
                  onChange={handleChange}
                />
                <FormHelperText color="#fff">
                  write your first name.
                </FormHelperText>
              </Box>
              <Box mb={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastname"
                  borderColor="#fff"
                  onChange={handleChange}
                />
                <FormHelperText color="#fff">
                  write your first name.
                </FormHelperText>
              </Box>
              <Box mb={4}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  borderColor="#fff"
                  onChange={handleChange}
                />
                <FormHelperText color="#fff">
                  We'll never share your email.
                </FormHelperText>
              </Box>
              <Box mb={4}>
                <FormLabel>Contact No.</FormLabel>
                <Input
                  type="text"
                  name="contactno"
                  borderColor="#fff"
                  onChange={handleChange}
                />
                <FormHelperText color="#fff">
                  write a contact number.
                </FormHelperText>
              </Box>
              <Flex align="center" justify="center">
                <Box mb={4}>
                  <Button colorScheme="teal" size="md" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Box>
              </Flex>
            </FormControl>
          </Box>
        </div>
      </Box>
    </>
  );
}
