// Cart.js
import dataJson from "../material/data.json";
import { useDispatch } from "react-redux";
import { add } from "../redux/actions/actionCreator";
import bag from "../material/bag.svg";

export default function Cart() {
  const dispatch = useDispatch();
  // const totalAmount = useSelector((state) => state.count);
  const handleAdd = (price) => {
    console.log(price);
    dispatch(add(price));
  };

  return (
    <div className="cart-container">
      {/* <h2>Total Amount: ${totalAmount}</h2> */}
      {dataJson.map((item, index) => (
        <div className="cart-card" key={index}>
          <img
            src={item.src}
            alt={item.name}
            style={{ width: "200px", height: "200px", borderRadius: "10px" }}
          />
          <p> {item.type}</p>
          <p>{item.name}</p>
          <p> {item.stars}</p>
          {item.offPrice ? (
            <span>
              <p className="price">${item.price} </p>
              <p className="">${item.offPrice} </p>
              <button
                className="btn btn-btn btn-success"
                onClick={() => {
                  handleAdd(Number(item.offPrice));
                }}
              >
                {" "}
                <img src={bag} alt="" />
              </button>
            </span>
          ) : (
            <span>
              <p> ${item.price}</p>
              <button
                className="btn btn-btn btn-success"
                onClick={() => {
                  handleAdd(Number(item.price));
                }}
              >
                {" "}
                <img src={bag} alt="" className="bag-icon" />
              </button>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
