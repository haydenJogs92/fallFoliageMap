
import data from './bulk-elev-query'

/*
Retreive Coords and elevation data
*/
export function getMapData()
{
  /*
  PLEASE NOTE:
  If we dont' want our api exposed on the web, then we need to write an ajax call that will get us the same cabin information
  */
  return function(dispatch)
  {    
    dispatch({type:"FETCH_MAP_DATA", payload: data});
  }

}


export function updateFallState( fallState )
{
  return function(dispatch)
  {
    dispatch({type:"UPDATE_FALL_STATE", payload: fallState});
  }
}


export function updateMapState( event )
{
  return function(dispatch)
  {
    dispatch({type:"UPDATE_MAP_STATE", payload: event});
  }
}



export function updateOpacityState( opacityState )
{
  return function(dispatch)
  {
    dispatch({type:"UPDATE_OPACITY_STATE", payload: opacityState});
  }
}
