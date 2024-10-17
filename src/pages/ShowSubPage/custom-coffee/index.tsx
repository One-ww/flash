import classNames from "classnames";
import React, { useState } from "react";

import styles from "./index.scss";

const CustomCoffee: React.FC = () => {
  const coffeeOptions = [
    "Black",
    "Flat White",
    "Latte",
    "Cappuccino",
    "Americano",
    "Espresso",
    "Doppio",
    "Cortado",
    "Macchiato",
    "Mocha",
    "Affogato",
    "Con Panna",
    "Irish",
    "Cafe Au Lait",
    "Black",
    "Flat White",
    "Latte",
    "Cappuccino",
    "Americano",
    "Espresso",
    "Doppio",
    "Cortado",
    "Macchiato",
    "Mocha",
    "Affogato",
    "Con Panna",
    "Irish",
    "Cafe Au Lait",
    "Black",
    "Flat White",
    "Latte",
    "Cappuccino",
    "Americano",
    "Espresso",
    "Doppio",
    "Cortado",
  ];

  const contentsOptions = [
    "gelato",
    "milk foam",
    "cream",
    "steamed milk",
    "milk",
    "chocolate",
    "sugar",
    "whiskey",
    "water",
    "coffee",
    "espresso",
  ];

  const [selectedOption, setSelectedOption] = useState("Latte");

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.customCoffeeContainer}>
      {/* options */}
      <div className={styles.options}>
        {coffeeOptions.map((option, index) => (
          <div key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </div>
        ))}
      </div>
      {/* wrapper */}
      <div className={styles.wrapper}>
        <div className={styles.shadow} />
        <div className={styles.title}>{selectedOption}</div>
        <div
          className={classNames(
            styles.cup,
            styles[selectedOption.toLowerCase().replace(/\s/g, "-")]
          )}
        >
          <div className={styles.contents}>
            {contentsOptions.map((item, index) => {
              if (index !== contentsOptions.length - 1) {
                return (
                  <div
                    key={index}
                    className={styles[item.toLowerCase().replace(/\s/g, "-")]}
                  >
                    {item}
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className={styles[item.toLowerCase().replace(/\s/g, "-")]}
                  >
                    <span>(2)&nbsp;</span> {item}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCoffee;
