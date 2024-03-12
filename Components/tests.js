import React from "react";
import Box from "./Box";
import styles from "./box.module.css";

function Tests(props) {
  let tests = [];

  props.group.slice(1).map((jsonString) => {
    tests.push([
      JSON.parse(jsonString).parameter_name,
      JSON.parse(jsonString).is_highlighted ? "Y" : "N",
      JSON.parse(jsonString).lower_bound,
      JSON.parse(jsonString).upper_bound,
      JSON.parse(jsonString).parameter_value,
      JSON.parse(jsonString).unit,
    ]);
  });
  return (
    <>
      <div className={styles.box}>
        <h3>{props.group[0]}</h3>
        {tests.map((e, index) => {
          return <Box key={index} value={e}></Box>;
        })}

        {/* <h3>{data[0]}</h3>
    {Object.values(dataArray).test_method} */}
      </div>
    </>
  );
}

export default Tests;
