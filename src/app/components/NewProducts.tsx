import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/laminator.jpg",
    title: "Laminating Machine",
    desc: "Stationary Tool For Lamination",
    rating: 4,
    price: "50,000/=",
  },
  {
    img: "/Epson L3220.jpg",
    title: "Epson Printer L3220",
    desc: "A Best Printer for Stationeries",
    rating: 5,
    price: "600,000/=",
  },
  {
    img: "/notebook.jpg",
    title: "Notebook",
    desc: "hand notebook for personal uses",
    rating: 3,
    price: "10,000/=",
  },
  {
    img: "/calculate.jpg",
    title: "Scientific Calculator",
    desc: "Students Scientific Calculator",
    rating: 4,
    price: "20,000/=",
  },
  {
    img: "/board chalks.jpg",
    title: "Board Chalks",
    desc: "A box at the best price",
    rating: 3,
    price: "5,000",
  },
  {
    img: "/ruler.jpg",
    title: "Ruler",
    desc: "A dozen of rulers at best price",
    rating: 4,
    price: "4000",
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
