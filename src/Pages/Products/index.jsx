import React, { useEffect, useState } from "react";
import ProductsCss from "./style.module.css";
import Card from "../../Components/Card";

export default function Products() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch(" http://localhost:3001/ProductsData")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <>
      <div className={ProductsCss.container}>
        <img src="assets/plane.png" alt="plane" />
        <span>Our Feature Products</span>
        <div className={ProductsCss.products}>
          <ul className={ProductsCss.menu}>
            <li>All</li>
            <li>Skin Care</li>
            <li>Conditioner</li>
            <li>Foundation</li>
          </ul>
          <div className={ProductsCss.list}>
            {menu?.map((e, index) => (
              <div key={index} className={ProductsCss.product}>
                <Card
                  name={e.name}
                  detail={e.detail}
                  price={e.price}
                  img={e.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
