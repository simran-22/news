import news from "../assets/images/news.jpg";
// import modi from "../assets/images/modi.webp";
import { useState, useEffect } from "react";
import axios from "axios";

const URL =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-06-16&to=2024-06-16&sortBy=publishedAt&apiKey=80298051532e4c26b8c809a8c3ee6bf3";

const appledata =
  "https://newsapi.org/v2/everything?q=dog&from=2024-06-16&to=2024-06-16&sortBy=popularity&apiKey=80298051532e4c26b8c809a8c3ee6bf3";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [apleData, setApleData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((r) => {
      console.log(r.data.articles);
      setNewsData(r.data.articles);
    });
  }, []);

  useEffect(() => {
    axios.get(appledata).then((res) => {
      console.log(res.data.articles);
      setApleData(res.data.articles);
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-4 pt-4">
        <div className="rounded-lg overflow-hidden col-span-3   ">
          <a href="#">
            {" "}
            <img
              className="responsive-image w-full rounded-lg "
              src={news}
              alt=""
            />
          </a>
          <div className="grid grid-cols-2 gap-4 py-6">
            {apleData.slice(1, 21).map((item, i) => {
              return (
                <a key={i} href={item.url}>
                  <div key={item.id} className="flex justify-between gap-2">
                    <p className="text-blue-500 font-semibold text-md	">
                      {item.title}
                    </p>{" "}
                    <img
                      className="responsive-image w-48 rounded-md"
                      src={item.urlToImage}
                      alt={item.title}
                    />{" "}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 p-4 border rounded-lg ml-3">
          {" "}
          {newsData.slice(1, 5).map((item) => {
            return (
              <div key={item.id} className=" col-span-1 mb-4 ">
                <a href={item.url}>
                  <p className="text-blue-500 font-semibold text-md	">
                    {item.title}
                  </p>
                  <h3>{item.description}</h3>{" "}
                  <span className="text-black-500">{item.publishedAt}</span>
                  <img
                    className="responsive-image w-full rounded-md"
                    src={item.urlToImage}
                    alt={item.title}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
