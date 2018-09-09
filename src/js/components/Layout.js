import React from "react"
import { connect } from "react-redux"

import { getMapData, updateFallState, updateMapState, updateOpacityState } from '../actions/mapActions';


//inport components to use in the view
import GoogleMap from './googleMap';
import FallSlider from './fallSlider';
import ColorGuide from './colorGuide';


//import css for the layout
import '../../css/layout.css';




/* Link data from the store to the layout, data is made available as this.props  */
@connect((store) => {
  return {
    mapData: store.data.mapData,
    fallState: store.data.fallState,
    mapZoom: store.data.mapZoom,
    mapCenter: store.data.mapCenter,
    mapOpacityState: store.data.mapOpacityState,
    mapColors: store.data.mapColors
  };
})


export default class Layout extends React.Component {

  //on mount - get cabin data and cabin urls once the view is ready
  componentWillMount()
  {
    this.props.dispatch( getMapData() );
  }




  handleFallChange = ( fallState ) => {
    if ( fallState != this.props.fallState )
    {
        this.props.dispatch( updateFallState( fallState ) )
    }
  }

  handleMapOpacityChange = ( opacityState ) => {
    this.props.dispatch( updateOpacityState( opacityState ) )
  }

  handleMapChange = ( event ) => {
    this.props.dispatch( updateMapState( event ) )
  }



  render()
  {
      return (
        <div className="pageContent">
          <h1 className="headerH1">GSMNP Fall Foliage Map</h1>
          <p>Use this interactive map to find peak fall colors in the Great Smoky Mountains National Park.</p>
          <GoogleMap
            mapData={this.props.mapData}
            fallState={this.props.fallState}
            onMapChange={  ( event ) => { this.handleMapChange(  event ) } }
            mapZoom={ this.props.mapZoom }
            mapCenter={ this.props.mapCenter }
            mapOpacityState={this.props.mapOpacityState}
            mapColors={this.props.mapColors}
            />
          <div className="pageControls">
            <FallSlider
              fallState={this.props.fallState}
              handleFallChange={  (fallState) => { this.handleFallChange( fallState ) }}
              handleMapOpacityChange={ (opacityState) => { this.handleMapOpacityChange( opacityState ) } }
              mapOpacityState={this.props.mapOpacityState}
            />
            <ColorGuide
              mapOpacityState={this.props.mapOpacityState}
              mapColors={this.props.mapColors}
              />
          </div>
        </div>
      )

  }
}
