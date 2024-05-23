'use client'

import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState({});

  async function fetchHelloData() {
    try {
      const response = await fetch('/api/hello');
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
      }
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setData({ error: error.message });
    }
  }

  useEffect(() => {
    fetchHelloData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Data fetched: {JSON.stringify(data)}</p>
      <button onClick={fetchHelloData}>Fetch Data Again</button>
    </div>
  );
}