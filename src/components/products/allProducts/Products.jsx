import { useEffect, useState } from "react";
import { clientProducts } from "../../../client";

const Products = () => {
  const [foods, setFoods] = useState([]);

  // Get all food products
  const getAllFoods = async (type = "food", limit = 10, skip = 0) => {
    try {
      const data = await clientProducts.getEntries({
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
              name,
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
              <h3> {name} </h3>
              <p> {description} </p>
            </article>
          );
        })}
    </section>
  );
};

export default Products;
