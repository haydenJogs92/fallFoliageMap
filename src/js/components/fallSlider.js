import React from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

//using rc slider
//https://react-component.github.io/slider/examples/marks.html


  const markerStyle = {wordSpacing: '9999999px',fontWeight:'bold'};
  const marks = {
  0: { style: markerStyle, label: 'Early Sept', value: 'earlySept' },
  1: { style: markerStyle, label: 'Late Sept', value: 'lateSept' },
  2: { style: markerStyle,label: 'Early Oct', value: 'earlyOct'  },
  3: { style: markerStyle,label: 'Mid Oct' , value: 'midOct'  },
  4: { style: markerStyle,label: 'Late Oct', value: 'lateOct' },
  5: { style: markerStyle,label: 'Early Nov', value: 'earlyNov' },
  6: { style: markerStyle,label: 'Late Nov', value: 'lateNov' },
};


export default class FallSlider extends React.Component
{


  handleFallChange = ( key ) => {
    this.props.handleFallChange( marks[key].value )
  }

  handleMapOpacityChange = ( event ) => {
    this.props.handleMapOpacityChange(event.target.value)
  }

  render()
  {
      return (
        <div>
          <Slider
            className="sliderStyle"
            min={0}
            marks={marks}
            step={1}
            max={Object.keys( marks ).length - 1 }
            included={true}
            defaultValue={0}
            onAfterChange={this.handleFallChange}  />
            <div className="opactiyControlStyle">
              <form onChange={this.handleMapOpacityChange}>
                <div>
                 <label>
                   <input type="radio" value="on" checked={this.props.mapOpacityState === "on" } />
                   View Landmarks
                 </label>
               </div>
               <div>
                 <label>
                   <input type="radio" value="off" checked={this.props.mapOpacityState === "off" } />
                   View Fall Forecast
                 </label>
               </div>
              </form>
            </div>

        </div>
      )
    }
  }
