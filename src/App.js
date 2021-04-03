import React, { useEffect, useState } from "react";
import axios from 'axios';

import Car from './components/Car';

export default function App() {
  const useHeroku = true;
  const [data, setData] = useState([]);

  useEffect(async () => {
    const url = useHeroku ? 'https://asphalt9.herokuapp.com/api/cars' : 'http://localhost:5000/api/cars';
    const result = await axios(url);

    setData(result.data);
  }, []);

  console.log(data);
  return (
    <>
      <h1>Asphalt9 Cars</h1>
      {data.map((carStats, i) => (
        <Car carStats={carStats} />
      ))}
    </>
  );
}
