import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useStateContext } from "../context/StateContext";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, getResults, searchTerm, loading } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      getResults(`&q=${searchTerm}`);
    }
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {results?.items?.map((item) => (
        <div key={item.link} className="container">
          {location.pathname === "/search" && (
            <div className="container">
              <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
                <p className="text-sm">{item.displayLink}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {item.title}
                  </p>
                </a>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {item.snippet}
                </p>
              </div>
            </div>
          )}

          {location.pathname === "/images" && (
            <div className="container-img">
              <div className="row">
                <div className="col-md-12">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item?.pagemap?.cse_image?.length > 0 &&
                      item?.pagemap?.cse_image[0]?.src && (
                        <img
                          src={item?.pagemap?.cse_image[0]?.src}
                          className="img-thumbnail"
                          alt="thumbnail"
                          width="100%"
                        />
                      )}
                  </a>
                </div>
              </div>
            </div>
          )}

          {location.pathname === "/news" && (
            <div className="container">
              <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {item.displayLink}
                  </p>
                </a>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {item.snippet}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
