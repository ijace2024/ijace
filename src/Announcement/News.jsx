import React, { useEffect, useState } from "react";

import Api from "../Pdfs/Api";

const News = () => {
  const [info, setInfo] = useState({ information: "" });

  const fetchData = async () => {
    try {
      // ✅ Use singular "announcement" to match your Spring Boot mapping
      const { data } = await Api.get("/announcement/1");
      setInfo(data);
      // console.log("Fetched announcement:", data);
    } catch (e) {
      if (e.response) {
        console.error(
          `Error fetching news: ${e.response.status} - ${JSON.stringify(
            e.response.data
          )}`
        );
      } else {
        console.error("Error fetching news:", e.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   
    <>
      {/* <h3 className="text-black text-center text-xl font-bold">ANNOUNCEMENT</h3> */}
      <marquee
        className="text-black text-center mt-2 text-lg marquee"
        direction="left"
      >
        <img src="/new_blink.gif" alt="logo" className="inline-block mr-2" />
        {info.information || "No announcement available"}
      </marquee>
    </>
  );
};

export default News;