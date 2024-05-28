'use client'
 
import { useRouter } from 'next/navigation'
import { Button } from "@chakra-ui/react";
export default function SignOut() {
    const router = useRouter()
  return (
    <Button
      onClick={ () => {
        router.push('/admin/signout')
      }}
    >
      Sign Out
    </Button>
  );
}
