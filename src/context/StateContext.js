import React, { createContext, useContext, useState } from "react";

// create context
const StateContext = createContext();

// define base url
const baseUrl = "https://customsearch.googleapis.com/customsearch/v1";

// AIzaSyA3sp8gizPLnqwRt6emY6_JOTjMUd372TE
// ID: f01f5bfd57eaf496f

// const API_KEY = "AIzaSyAUtAzb2Bf9bllH9RujGVC27I4n2TtYgEM";
// const SEARCH_ENGINE_KEY = "f01f5bfd57eaf496f";

const API_KEY = "AIzaSyCrdQwqRENdfKkIy0L59cySBd5-AWDSV_U";
const SEARCH_ENGINE_KEY = "738f18d9a734f409f";

// create context provider
export const StateContextProvider = ({ children }) => {
  // define `state` for data
  const [results, setResults] = useState([]);
  // define `state` for page load
  const [loading, setLoading] = useState(false);
  // define `state` for query term
  const [searchTerm, setSearchTerm] = useState("hello");

  // fetch data from api
  const getResults = async (url) => {
    // set loading `state` to true while fetching data
    setLoading(true);

    // fetch and store the data
    console.log(url);
    console.log(`${baseUrl}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}${url}`);
    // `${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${searchTerm}`;

    const res = await fetch(
      `${baseUrl}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}${url}`,
      {
        method: "GET",
      }
    );

    // const res = await fetch(`${baseUrl}${url}`);

    const data = await res.json();
    console.log("our data...");
    console.log(data);

    // store data in `state`
    setResults(data);

    // set loading `state` to false after data is fetched
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

// export context
export const useStateContext = () => useContext(StateContext);
