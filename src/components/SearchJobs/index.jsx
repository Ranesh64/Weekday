"use client";

import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { data } from "@utils/jsonData";
import { Box, Container, Grid } from "@mui/material";

const SearchJobs = () => {
  const [cardData, setCardData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const startIndex = (page - 1) * 10;
    const newData = data.slice(startIndex, startIndex + 10);
    setCardData([...cardData, ...newData]);
    setHasMore(newData.length > 0);
    setPage(page + 1);
  };

  useEffect(() => {
    const element = document.getElementById("target");
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore) {
          fetchData();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [cardData, hasMore]);

  return (
    <Container>
      <Grid container spacing={3}>
        {cardData?.map((card) => {
          return (
            <Grid item key={card?.jdUid}>
              <JobCard data={card} />
            </Grid>
          );
        })}
      </Grid>
      <div id="target"></div>
    </Container>
  );
};

export default SearchJobs;
