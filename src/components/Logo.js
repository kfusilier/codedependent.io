import React from 'react'

const logo = ({
  style = {
    "font-family": `Open Sans, sans-serif`,
    fill: "black"
  }
}) => (
  <div>
    <svg>
      <text style={style} x="0" y="15">Co<tspan fill="red">(</tspan>de<tspan fill="red">)</tspan>pendent</text>
    </svg>
  </div>
)

export default logo
