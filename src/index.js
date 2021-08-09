import React from "react";
import ReactDOM from "react-dom";

function Box(props){
console.log(props)
const color = (color) => {
    if (color === "blue"){
      return "alert-primary"
    } else if (color === "red"){
      return "alert-danger"
    } else if (color === "orange"){
      return "alert-warning"
    }
  }

  return(
    <div className={`alert ${color(props.type)}`} role="alert" style={{display: props.hide ? "none" : "block"}}>
      This is a box - check it out!
    </div>
  )
}





// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
