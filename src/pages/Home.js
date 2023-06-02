import React, { useEffect } from "react";
import { useContext } from "react";
import { dataContext } from "../context/Context";
import Card from "../components/Card";

export default function Home() {
  const data = useContext(dataContext);

  useEffect(() => {
    data && console.log(data);
  }, [data]);

  return (
    <div>
      <div className="content-section">
        <div className="card-container">
          {data.data &&
            data.data.map((item, index) => {
              return (
                <Card
                  image={item.show.image.medium}
                  name={item.show.name}
                  key={index}
                  index={index}
                  score={item.score}
                  genre={item.show.genres[0]}
                  runtime={item.show.runtime}
                ></Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
