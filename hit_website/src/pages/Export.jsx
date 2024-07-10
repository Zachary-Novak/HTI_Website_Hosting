import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { CSVLink } from 'react-csv';

const Survey = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'survey'));
      const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const headers = data.length > 0 
    ? ['siteVersion', ...Object.keys(data[0]).filter(key => key !== 'id' && key !== 'siteVersion')]
    : [];

  return (
    <Container>
      <h1>Data Viewer</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {headers.map(header => (
                <td key={`${item.id}-${header}`}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <CSVLink
        data={data}
        headers={headers}
        filename={'data.csv'}
        className="btn btn-primary"
        target="_blank"
      >
        Export to CSV
      </CSVLink>
    </Container>
  );
};

export default Survey;