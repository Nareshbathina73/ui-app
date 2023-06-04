import React, { useState, useEffect } from "react";
import PropertyList from "./cards/PropertList";
import Pagination from "./pagination/Pagination";
import SortableDropdown from "./templates/SortableDropdown";
import { CircularProgress, Grid } from "@mui/material";

const Container: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const pageSize = 12;
  const url = "api/data";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}?page=${currentPage}&perPage=${pageSize}`
        );
        const responseData = await response.json();
        setResponse(responseData);
        setIsLoading(false);
      } catch (error) {
        setError("");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sortedData = (data: any) => {
    const newResponse = { ...response };
    newResponse.data = data;
    setResponse(newResponse);
  };

  const getSortedData = () => {
    return response.data;
  }

  if(isLoading)
    return <CircularProgress />
  
  if(error)
    return <div>There is a problem in loading the data</div>  

  return (
    <>
      {response !== null ? (
        <>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              container
              justifyContent="flex-end"
              marginTop="0.5rem"
            >
            <SortableDropdown getData={getSortedData} onSorted={sortedData} />
            </Grid>
          </Grid>
          <PropertyList
            response={response.data}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={response.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : null}
    </>
  );
};

export default Container;
