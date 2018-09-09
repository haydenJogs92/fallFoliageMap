/*

now useing this one

https://github.com/istarkov/google-map-react

example of how to implement
https://github.com/google-map-react/google-map-react/issues/122

var Spinner = require('react-spinkit');
<Spinner name="ball-scale-ripple" />
 */


 import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

export default class GoogleMap extends Component {


  handleMapClick = ({x, y, lat, lng, event}) => {
    //console.log(lat + ", " + lng);
  }


  getSquareColor = ( data ) => {
    var noChange = this.props.mapColors[0].color;
    var patchy = this.props.mapColors[1].color;
    var partial = this.props.mapColors[2].color;
    var prePeak = this.props.mapColors[3].color;
    var peak = this.props.mapColors[4].color;
    var pastPeak = this.props.mapColors[5].color;

    var color = '';
    switch( this.props.fallState )
    {
      case "earlySept":
        switch ( true )
        {
          case data.ElevFt > 5000:
           color = noChange;
          break;
          case data.ElevFt > 4000:
           color = noChange;
          break;
          case data.ElevFt > 3000:
           color = noChange;
          break;
          case data.ElevFt > 2000:
           color = noChange;
          break;
          case data.ElevFt > 1000:
           color = noChange;
          break;
           case data.ElevFt < 1000:
           color = noChange;
            break;
        }
        break;
        case "lateSept":
          switch ( true )
          {
            case data.ElevFt > 5000:
             color = partial;
            break;
            case data.ElevFt > 4000:
             color = patchy;
            break;
            case data.ElevFt > 3000:
             color = noChange;
            break;
            case data.ElevFt > 2000:
             color = noChange;
            break;
            case data.ElevFt > 1000:
             color = noChange;
            break;
             case data.ElevFt < 1000:
             color = noChange;
              break;
          }
          break;
         case "earlyOct":
         switch ( true )
         {
           case data.ElevFt > 5000:
            color = peak;
           break;
           case data.ElevFt > 4000:
            color = partial;
           break;
           case data.ElevFt > 3000:
            color = partial;
           break;
           case data.ElevFt > 2000:
            color = patchy;
           break;
           case data.ElevFt > 1000:
            color = noChange;
           break;
            case data.ElevFt < 1000:
            color = noChange;
             break;
         }
         break;
         case "midOct":
         switch ( true )
         {
           case data.ElevFt > 5000:
            color = pastPeak;
           break;
           case data.ElevFt > 4000:
            color = peak;
           break;
           case data.ElevFt > 3000:
            color = prePeak;
           break;
           case data.ElevFt > 2000:
            color = partial;
           break;
           case data.ElevFt > 1000:
            color = patchy;
           break;
            case data.ElevFt < 1000:
            color = noChange;
             break;
         }
         break;
         case "lateOct":
         switch ( true )
         {
           case data.ElevFt > 5000:
            color = pastPeak;
           break;
           case data.ElevFt > 4000:
            color = pastPeak;
           break;
           case data.ElevFt > 3000:
            color = peak;
           break;
           case data.ElevFt > 2000:
            color = prePeak;
           break;
           case data.ElevFt > 1000:
            color = partial;
           break;
            case data.ElevFt < 1000:
            color = patchy;
             break;
         }
         break;
         case "earlyNov":
         switch ( true )
         {
           case data.ElevFt > 5000:
            color = pastPeak;
           break;
           case data.ElevFt > 4000:
            color = pastPeak;
           break;
           case data.ElevFt > 3000:
            color = pastPeak;
           break;
           case data.ElevFt > 2000:
            color = peak;
           break;
           case data.ElevFt > 1000:
            color = peak;
           break;
            case data.ElevFt < 1000:
            color = partial;
             break;
         }
         break;
         case "lateNov":
         switch ( true )
         {
           case data.ElevFt > 5000:
            color = pastPeak;
           break;
           case data.ElevFt > 4000:
            color = pastPeak;
           break;
           case data.ElevFt > 3000:
            color = pastPeak;
           break;
           case data.ElevFt > 2000:
            color = pastPeak;
           break;
           case data.ElevFt > 1000:
            color = pastPeak;
           break;
            case data.ElevFt < 1000:
            color = pastPeak;
             break;
         }
         break;
      }
    return color;
  }



  render()
  {
    var dataPoints = this.props.mapData;
    if (this.props.mapData == null){
      dataPoints = new Array()
    }

    var opacity = this.props.mapOpacityState == "on" ? 0.5 : 1;
     var showSquares = ({map, maps}) => {
       //these values depend on what initial values used to create the map
       //magic numbers - depend on how I got the data
       var top = 35.77716
       var bottom = 35.44641
       var left = -83.97477
       var right = -83.02875
       var squareOne = 40; //number of squares on x,y axis, ex: 10 squares means 100 coordinates
     	 var squareTwo = 50; //number of squares on x,y axis, ex: 10 squares means 100 coordinates
       var latDiffUnit = ( top - bottom ) / squareOne;
       var longDiffUnit = ( left - right ) / squareTwo;

       var rectangles = dataPoints.map( (data, index ) => {
           //create the bounds of a square around a coordinate point
           var north = data.Lat + latDiffUnit / 2;
           var south = data.Lat - latDiffUnit / 2;
           var east  = data.Lon - longDiffUnit / 2
           var west  = data.Lon + longDiffUnit / 2;
           var color = this.getSquareColor( data );

           return new google.maps.Rectangle({
           strokeColor: '#FF0000',
           strokeOpacity: 0.8,
           strokeWeight: .01,
           fillColor: color,
           fillOpacity: opacity,
           map: map,
           bounds: {
             north: north,
             south: south,
             east: east,
             west: west
           }
         });
       })
     }
     //quick and dirty way to force rerendering of google map to pick up fall state
     //https://github.com/google-map-react/google-map-react/issues/76
    return (
      <div className="mapSize">
        <GoogleMapReact
          key={this.props.fallState + this.props.mapOpacityState}
          defaultZoom={this.props.mapZoom}
          center={this.props.mapCenter}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={showSquares }
          onClick={this.handleMapClick}
          onChange={ ( event ) => { this.props.onMapChange( event ) } }
        >
        </GoogleMapReact>
      </div>
    );
  }
}
