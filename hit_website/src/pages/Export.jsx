import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { CSVLink } from 'react-csv';

const Export = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'newsurvey'));
      const fetchedData = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          timestamp: docData.timestamp ? docData.timestamp.toDate().toLocaleString() : ''
        };
      });
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const headers =  ['siteVersion', "timestamp", "isSmallScreen", "time", "misclickCount", "answers"]

  return (
    <Container>
      <h1>Survey Data</h1>
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
                <td key={`${item.id}-${header}`}>
                  {header === 'timestamp' ? item[header] : JSON.stringify(item[header])}
                </td>
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

export default Export;