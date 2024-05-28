'use client'
import { Link } from "@chakra-ui/next-js";
import React, { useEffect, useState } from "react";

function DashboardData() {
  const [data, setData] = useState({});

  async function fetchHelloData() {
    try {
      const response = await fetch("/api/hello");
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      const data = await response.json();
      setData(data);
    } catch (error:any) {
      console.error("Error fetching data:", error);
      setData({ error: error.message });
    }
  }

  useEffect(() => {
    fetchHelloData();
  }, []);

  return (
    <div>
      <p>Data fetched: {JSON.stringify(data)}</p>
      <button onClick={fetchHelloData}>Fetch Data Again</button>
      <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
        Home
      </Link>
    </div>
  );
}

export default DashboardData;