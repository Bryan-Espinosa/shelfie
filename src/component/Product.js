import React from "react";

export default function Product(props) {
  console.log(props, "product props");
  return (
    <div>
      <div>{props.item.name}</div>
      <div>{props.item.price}</div>
      <img src={props.item.img} alt="none" />
    </div>
  );
}
