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
      defaultCenter={{ lat: 28.25057, lng: -81.65223 }}
    >
      <Marker position={{ lat: 28.25057, lng: -81.65223 }} />
    </GoogleMap>
  ))
)

export default MyMapComponent
