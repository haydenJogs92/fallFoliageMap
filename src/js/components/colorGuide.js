import React from "react";


export default class ColorGuide extends React.Component
{



  render()
  {
    var arrColors = this.props.mapColors;
    var guide = arrColors.map( data  => {
      var opacity = this.props.mapOpacityState == "on" ? '0.5' : '1';
      var color = {opacity:opacity,backgroundColor: data.color};

      return ( <div  key={data.color} className="colorBlockRow">
                <div style={color} className="colorBlock"></div>
                {data.label}
              </div> )
    });

    return (
      <div className="textLeft">
      <strong>Fall Color Guide</strong>
      {guide}
      </div>
    )
  }
}
