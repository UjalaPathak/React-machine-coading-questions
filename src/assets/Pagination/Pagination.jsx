import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setPages] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const res = await data.json();
    setProducts(res.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!products || !Array.isArray(products)) return null;
  const PAGE_SIZE = 10;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePagination = (n) => {
    setPages(n);
  };

  const handlePrevValue = () => {
    setPages((prev) => prev - 1);
  };

  const handleNextValue = () => {
    setPages((prev) => prev + 1);
  };

  return (
    <>
      <h2 className="heading">Pagination for the Products</h2>
      <div className="container">
        {products?.slice(start, end)?.map((item) => {
          return (
            <div className="product-style" key={item.id}>
              <img
                className="product-image"
                src={item?.thumbnail}
                alt={item?.title}
              />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>

      <div className="pagination-container">
        <div>
          <button
            disabled={currentPage === 0}
            className="page-number"
            onClick={() => handlePrevValue()}
          >
            ◀️
          </button>
          {[...Array(noOfPages).keys()].map((n) => (
            <span
              className={`page-number ${n === currentPage && "active"}`}
              key={n}
              onClick={() => handlePagination(n)}
            >
              {n}
            </span>
          ))}
          <button
            disabled={currentPage === noOfPages - 1}
            className="page-number"
            onClick={() => handleNextValue()}
          >
            ▶️
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
