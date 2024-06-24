"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const toast = useToast();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    console.log(formData);

    try {
      // 假设 signIn 是一个已经定义的异步登录函数, 这里需要你根据自己的应用实现或导入
      await signIn("credentials", formData, { redirectTo: "/admin/dashboard" });
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "Unable to sign in with provided credentials.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} maxWidth="500px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" />
        </FormControl>
        <FormControl id="password" isRequired marginTop="4">
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" />
        </FormControl>
        <Button marginTop="4" width="full" colorScheme="blue" type="submit">
          Sign In
        </Button>
      </form>
    </Box>
  );
}
