import { useEffect, useState } from "react";
import { client } from "../../../client";

const Products = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("foods =", foods);

  // Get all food products
  const getAllFoods = async (type = "food", limit = 10, skip = 0) => {
    try {
      const data = await client.getEntries({
        content_type: type,
        limit: limit,
        skip: skip,
      });
      setFoods(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Display data on browser
  useEffect(() => {
    getAllFoods("food", 3, 0);

    return () => {};
  }, []);

  return (
    <section>
      <h1>List of products</h1>

      {foods &&
        foods.map((food) => {
          const {
            fields: {
              title,
              description,
              foodId,
              image: {
                fields: {
                  file: { url },
                },
              },
            },
          } = food;
          return (
            <article key={foodId}>
              <figure>
                <img src={url} alt="" />
              </figure>
              <h3> {title} </h3>
              <p> {description} </p>
            </article>
          );
        })}
    </section>
  );
};

export default Products;
