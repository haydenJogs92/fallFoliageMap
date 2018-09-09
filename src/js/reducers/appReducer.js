
//the reducer consumes actions and returns the new app state everytime data is altered


//const noChange = '#006E6D';
/*
const noChange = '#84a87d';
const patchy = '#fecc5c';
const partial = '#fd8d3c';
const prePeak = '#F1EA7F';
const peak =  '#f03b20';
const pastPeak = '#bd0026';
*/


export default function reducer(state={
    mapData: [],
    fallState: "earlySept",
    //allFallStates: ["earlySept","lateSept","earlyOct","midOct","lateOct","earlyNov","lateNov"],
    mapZoom: 10,
    mapCenter:{lat: 35.63223826603904,  lng: -83.50330810546876},
    mapOpacityState: "on",
    mapColors: [
          {color:'#84a87d', label: 'No Change'},
          {color:'#ffffb2', label: 'Patchy Color'},
          {color:'#fd8d3c', label: 'Partial Color'},
          {color:'#f03b20', label: 'Pre Peak'},
          {color:'#bd0026', label: 'Peak Color'},
          {color:'#993404', label: 'Past Peak'},
      ]
  }, action) {

    switch (action.type) {



      case "FETCH_MAP_DATA":
      {
        return {
          ...state,
          mapData: action.payload
        }
      }


      case "UPDATE_FALL_STATE":
      {
        return {
          ...state,
          fallState: action.payload
        }
      }

      case "UPDATE_OPACITY_STATE":
      {
        return {
          ...state,
          mapOpacityState: action.payload
        }
      }

      case "UPDATE_MAP_STATE":
      {
        return {
          ...state,
          mapZoom: action.payload.zoom,
          mapCenter: { lat: action.payload.center.lat, lng: action.payload.center.lng }
        }
      }





    }

    return state
}
