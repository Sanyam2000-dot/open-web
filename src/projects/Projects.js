import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  const fetch = async () => {
    const fetchResult = await axios.get(
      "https://api.github.com/users/upes-open/repos"
    );
    var fetchData = fetchResult.data;
    console.log(fetchData);
    console.log(fetchData[0].name);
    // fetchData = Object.keys(fetchData);

    setData(fetchData);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      {data.map((result) => (
        <h1>{result.name}</h1>
      ))}
    </div>
  );
};

export default Projects;
