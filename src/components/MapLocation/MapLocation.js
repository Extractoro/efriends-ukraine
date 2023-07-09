import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Loading, Notify } from "notiflix";
import { useState } from "react";
import Footer from "../Footer/Footer";

const MapLocation = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const success = (pos) => {
    setLat(pos.coords.latitude);
    setLng(pos.coords.longitude);
  };

  const err = (err) => {
    if (err.code === 1) {
      Notify.failure("Дозвольте нам дізнатись ваше місцезнаходження");
    }
  };

  navigator.geolocation.watchPosition(success, err);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCSfNlS_Qcp9XxEPPA80xINhEtmpXbj_I4",
  });

  if (!isLoaded) return Loading.circle();

  return (
    <>
      {Loading.remove()}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "11px",
        }}
      >
        <GoogleMap
          zoom={12}
          center={{ lat, lng }}
          mapContainerStyle={{ height: "740px", width: "90%" }}
        >
          <MarkerF position={{ lat, lng }} />
        </GoogleMap>
      </div>
      <Footer />
    </>
  );
};

export default MapLocation;
