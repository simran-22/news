import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsHeading from "./NewsHeading";

const NewsList = () => {
  let { query } = useParams();
  const [newsData, setNewsData] = useState([]);
  const URL = `https://newsapi.org/v2/everything?q=${query}&from=2024-06-16&to=2024-06-16&sortBy=publishedAt&apiKey=80298051532e4c26b8c809a8c3ee6bf3`;
  useEffect(() => {
    axios.get(URL).then((r) => {
      console.log(r.data.articles);
      setNewsData(r.data.articles);
    });
  }, []);

  return (
    <>
      <NewsHeading />

      <div className="max-w-5xl mx-auto">
        <h1>{query}</h1>
        {newsData?.map((item, i) => {
          return (
            <div key={i}>
              {item.title}
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsList;
