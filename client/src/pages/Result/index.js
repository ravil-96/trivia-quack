import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Result = () => {
    const { id } = useParams()
    useEffect(() => {
        async function getResults() {
          try {
            let { data } = await axios.get(`http://localhost:3000/games/${id}/results`);
            console.log(data)
          } catch (err) {
            console.warn(err);
          }
        }
        getResults();
      }, []);

  return (
    <main id="result" className="container">
      <h1>Result</h1>
    </main>
  );
};

export default Result;