import { useState, useEffect } from "react";
import "animate.css";
import { fetchData } from "./Api.js";
import shoppingCart from "./assets/shoppingCart.svg";
import Shopping from "./assets/Shopping.svg";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [maximum, setMaximum] = useState(Number(80));
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = (item, qty) => {
    const existingItem = cartItems.find((_item) => _item.id === item.id);

    if (existingItem) {
      // Tambahkan quantity
      setCartItems(
        cartItems.map((_item) =>
          _item.id === item.id
            ? { ..._item, quantity: _item.quantity + qty }
            : _item
        )
      );
    } else {
      // Tambahkan item baru
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  // api confirugation
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
      setData(data);
    };

    fetchDataAsync();
  }, []);

  //button range
  const handleButtonClick = () => {
    const targetDiv = document.getElementById("contentDiv");
    if (targetDiv) {
      setIsDivVisible(!isDivVisible);
      targetDiv.style.display = isDivVisible ? "none" : "block";
    }
  };

  //filter data product
  const filteredData = data.filter((item) => item.price <= maximum);

  return (
    <section className="bg-[#ffffec]">
      {/*  Navbar Product */}
      <nav className="flex justify-around pt-6 mb-12 w-12/12   ">
        <div className=" w-6/12 justify-start">
          <button
            onClick={() => navigate("/")}
            className="font-luckiest text-3xl text-[#597E52] hover:text-[#4a963b]"
          >
            CYkir SHOP
          </button>
        </div>
        <div className="flex justify-end w-6/1">
          <button onClick={handleButtonClick} className="px-3">
            <img src={Shopping} alt="" />
          </button>

          {/* menu Cart */}

          <div className="w-[155px] h-10 bg-[#597E52] text-start  rounded-lg self-center flex justify-between auto ">
            <span className="h-10 w-5 bg-white rounded mx-2 shadow m-auto text-center ">
              <p className="text-center py-2 font-mono font-semibold">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </p>
            </span>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="m-auto"
            >
              <span className="font-source text-white text-center font-bold pr-5">
                Rp.{" "}
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(3)}
              </span>
            </button>

            {/* menu dropdown */}

            {isCartOpen && (
              <div
                className={`absolute top-12 right-0 w-[200px] bg-white z-10 rounded-lg shadow-lg ${
                  isCartOpen ? "block" : "hidden"
                }`}
              >
                {cartItems.map((item, index) => (
                  <div key={item.id} className="p-4 border-b">
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: Rp. {(item.price * item.quantity).toFixed(3)}</p>
                  </div>
                ))}
                <div className="p-4">
                  <p className="font-source font-bold text-lg">
                    Total: Rp.{" "}
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(3)}
                    .-
                  </p>
                </div>
                <button
                  className="w-full rounded-lg drop-shadow bg-[#597E52] p-3"
                  onClick={() => {
                    // Implementasi untuk checkout
                    console.log("Checkout: ", cartItems);
                  }}
                >
                  <button className="text-xl text-white font-source font-bold ">
                    Checkout
                  </button>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/*  Input Range */}
      <div id="contentDiv" className="hidden">
        <div className="flex w-full m-auto justify-center animate__animated animate__fadeIn">
          <input
            className="w-12"
            type="number"
            placeholder="Masukkan nilai maksimum"
            value={maximum}
            onChange={(e) => setMaximum(e.target.value)}
          />
          <input
            className="w-8/12"
            type="range"
            min="0"
            max="200"
            placeholder="Masukkan nilai maksimum"
            value={maximum}
            onChange={(e) => setMaximum(e.target.value)}
          />
        </div>
      </div>

      {/* Data Product */}
      <div className="flex justify-center flex-wrap align-content-center  w-10/12 m-auto  ">
        {filteredData.map((item, index) => (
          <div
            key={item.id}
            className={`m-5 animate__animated ${
              index % 2 === 0 ? `animate__fadeInLeft` : `animate__fadeinRight`
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="grid h-[470px] w-[263px]  bg-[#F1E4C3] rounded-lg drop-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="h-{262px} w-[264px]  bg-white drop-shadow rounded-lg"
              />
              <h3 className="font-source px-4 mt-5 uppercase font-bold text-center">
                {item.name}
              </h3>
              <p className="text-xs px-4 mt-3 text-justify">
                {item.description}
              </p>

              <div className=" w-[263px] h-[2px] bg-[#C6A969] mt-3"></div>
              <div className="grid grid-cols-2 w-[263px] content-end mt-2  ">
                <p className="font-source font-bold text-[#597E52] text-xl  pl-3 pb-3">
                  Rp{Number(item.price).toFixed(3)}.-
                </p>
                <button onClick={() => updateCartItems(item, 1)}>
                  <img
                    src={shoppingCart}
                    alt="ShopingCart"
                    className=" pl-20 pb-3"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
