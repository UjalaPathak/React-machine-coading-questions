import React, { useEffect, useState } from "react";
import "./searchInput.css";
function SearchBar() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [cache, setCache] = useState({});

  const getAPi = async () => {
    console.log("api");
    const value = await fetch(
      "https://dummyjson.com/recipes/search?q=" + search,
    );
    const data = await value.json();
    setData(data?.recipes);
    setCache((prev) => ({
      ...prev,
      [search]: data?.recipes,
    }));
    setShow(true);
  };

  console.log("cache", cache);
  useEffect(() => {
    if (!search) return;
    if (cache[search]) {
      setData(cache[search]);
      return;
    }
    let timeid;
    timeid = setTimeout(() => {
      getAPi();
    }, 1000);
    return () => {
      clearTimeout(timeid);
    };
  }, [search]);

  console.log("activeIndex", activeIndex);

  const handleActiveIndex = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : prev));
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div>
      SearchBar
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ width: "300px", padding: "5px" }}
          onKeyDown={handleActiveIndex}
        />
      </div>
      {show ? (
        <div
          style={{
            width: "300px",
            maxHeight: "500px",
            border: "1px solid",
            padding: "5px",
            overflow: "scroll",
          }}
        >
          {data &&
            data?.map((value, index) => (
              <p
                className={index == activeIndex ? "showIndex" : ""}
                key={index}
              >
                {value.name}
              </p>
            ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
