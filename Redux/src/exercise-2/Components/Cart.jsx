// import React from 'react'
const data = [
  {
    type: "Plants",
    name: "Boncellensis Secullant",
    stars: 3,
    price: "34.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  },
  {
    type: "Cactus",
    name: "Cleistocactus",
    stars: 2,
    price: "28.00",
    offPrice: "25.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Green Soil Lotus",
    stars: 4,
    price: "54.50",
    offPrice: "34.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Money Plant",
    stars: 5,
    price: "23.00",
    offPrice: "20.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Old Lady Cactus",
    stars: 3,
    price: "15.00",
    offPrice: "12.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Piorro Quisquam",
    stars: 3,
    price: "32.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Rattle Snake Tail",
    stars: 1,
    price: "45.00 ",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
  },
  {
    type: "Cactus",
    name: "Star Cacuts",
    stars: 2,
    price: "34.00",
    offPrice: "32.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
  },
];
// import Container from "react-bootstrap/Container";
export default function Cart() {
  return (
    <div className="cart-container">
      {data.map((item, index) => (
        <div className="cart-card" key={index}>
          <h3>{item.name}</h3>
          <p>Type: {item.type}</p>
          <p>Price: ${item.price}</p>
          {item.offPrice && <p>Discounted Price: ${item.offPrice}</p>}
          <img
            src={item.src}
            alt={item.name}
            style={{ width: "100px", height: "100px" }}
          />
          <p>Stars: {item.stars}</p>
        </div>
      ))}
    </div>
  );
}
