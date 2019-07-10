import React from 'react'

const logo = ({
  style = {
    "fontFamily": `Open Sans, sans-serif`,
    "fill": "black",
    "fontSize": "60px",
    // "width": "100%"
  },
  svgStyle = {
    "width": "100%",
    "height": "100px"
  }
}) => (
  <div>
    <svg style={svgStyle}>
      <text style={style} x="0" y="50">Co<tspan fill="red">(</tspan>de<tspan fill="red">)</tspan>pendent</text>
    </svg>
  </div>
)

export default logo
