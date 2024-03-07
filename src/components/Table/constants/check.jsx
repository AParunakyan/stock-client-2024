import React, { useState, useEffect } from 'react';
import DataTable from '../tableComponents/reqTable';

function JsonFetcher ({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error.message);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      {data ? <DataTable data={data} /> : <p>Загрузка данных...</p>}
    </div>
  );
};

export default JsonFetcher