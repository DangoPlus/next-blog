"use client";
import { Link } from "@chakra-ui/next-js";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <div>
        <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
          Home
        </Link>
      </div>
    </div>
  );
}
