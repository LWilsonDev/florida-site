import React from "react"
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps"

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 29.029852, lng: -81.328664 }}
    >
      <Marker position={{ lat: 29.029852, lng: -81.328664 }} />
    </GoogleMap>
  ))
)

export default MyMapComponent
