import React, { useRef, useEffect, useState } from "react";
import "./searchInput.css";

function SearchBar() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const data = async () => {
    if (cache[value]) {
      console.log("cache", cache[value]);
      setResults(cache[value]);
      return;
    }
    const returnedvalue = await fetch(
      "https://dummyjson.com/recipes/search?q=" + value,
    );
    const data = await returnedvalue.json();
    setResults(data?.recipes);
    setCache((prev) => ({ ...prev, [value]: data?.recipes }));
  };

  useEffect(() => {
    let timeId;
    if (!value) return;
    timeId = setTimeout(() => {
      data();
    }, 500);
    return () => {
      clearTimeout(timeId); // ✅ clears previous timer
    };
  }, [value]);

  const handleKeyDown = (e) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    }

    if (e.key === "Enter") {
      if (activeIndex >= 0) {
        setValue(results[activeIndex].name);
        setShowResults(false);
        setActiveIndex(-1);
      }
    }
  };

  return (
    <div>
      <h1>AutoComplete SearchBar</h1>
      <div>
        <input
          className="search-input"
          value={value}
          onChange={(e) => handleChange(e)}
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
          onKeyDown={handleKeyDown}
        />

        {showResults && (
          <div className="result-container">
            {results.map((value, index) => (
              <span
                className="result"
                key={value.id}
                style={{
                  backgroundColor: index === activeIndex ? "#eee" : "white",
                }}
                onMouseDown={(e) => e.preventDefault()} // 🔥 prevents blur
                onClick={() => {
                  setValue(value.name); // ✅ set input value
                  setShowResults(false); // ✅ close dropdown
                }}
              >
                {value.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
