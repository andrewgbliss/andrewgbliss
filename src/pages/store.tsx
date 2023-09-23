import React, { useEffect, useState } from "react";
import axios from "axios";

const EtsyStore = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace YOUR_API_KEY and YOUR_SHOP_ID with actual values
    axios
      .get(
        `https://openapi.etsy.com/v2/shops/YOUR_SHOP_ID/listings/active?api_key=YOUR_API_KEY`
      )
      .then((response) => {
        setItems(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Etsy data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Etsy Store</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {items.map(
            (item: {
              listing_id: string;
              title: string;
              MainImage: { url_170x135: string };
              description: string;
              price: string;
            }) => (
              <div key={item.listing_id}>
                <h2>{item.title}</h2>
                <img src={item.MainImage.url_170x135} alt={item.title} />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default EtsyStore;
