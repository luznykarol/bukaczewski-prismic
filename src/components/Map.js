import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import LazyLoad from "react-lazyload";

const MapComponent = () => {
  return (
    // <LazyLoad>
    //   <GoogleMap
    //     defaultCenter={{ lat: 52.21966400002641, lng: 20.98528072729993 }}
    //     defaultZoom={8}></GoogleMap>
    // </LazyLoad>
    // <LazyLoad>
    <GoogleMap
      defaultCenter={{ lat: 52.21966400002641, lng: 20.98528072729993 }}
      defaultZoom={8}></GoogleMap>
    // </LazyLoad>
  );
};

export default withScriptjs(withGoogleMap(MapComponent));
