import React, { useState, useEffect, useCallback } from "react";
import classes from "./App.module.css";
import Pagination from "./components/Pagination/Pagination";
import TableComp from "./components/TableComp/Table";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const api = axios.create({
  baseURL: "https://api.punkapi.com/v2/beers",
  responseType: "json",
  headers: { "Content-Type": "application/json" },
});

function App() {
  const [loading, setLoading] = useState(false);
  const [beersData, setBeersData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize] = useState(10);
  const [errorFound, setErrorFound] = useState(false);

  const callGetBeers = useCallback(() => {
    async function getBeers() {
      try {
        const response = await api.get(`?page=${pageNo}&per_page=${pageSize}`);
        setBeersData(response?.data);
      } catch (error) {
        // console.error('error -> ', error);
        setErrorFound(true);
      } finally {
        setLoading(false);
      }
    }
    getBeers();
  }, [pageNo, pageSize]);

  useEffect(() => {
    callGetBeers();
  }, [callGetBeers]);

  if (errorFound) {
    return (
      <div className={classes.error}>Something Went Wrong. Please Retry</div>
    );
  }
  return (
    <Container className="App">
      <Row className={classes.head}>Beers Table</Row>
      <Row className={classes.paginate}>
        <Pagination pageNo={pageNo} setPageNo={setPageNo} />
      </Row>
      <Row>
        {loading ? <div>Loading...</div> : <TableComp data={beersData} />}
      </Row>
      <Row className={classes.paginate}>
        <Pagination pageNo={pageNo} setPageNo={setPageNo} />
      </Row>
    </Container>
  );
}

export default App;
