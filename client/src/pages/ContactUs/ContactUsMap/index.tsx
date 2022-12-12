import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ContactUsMapBox } from "./index.styled";

const ContactUsMap = () => {
  return (
    <ContactUsMapBox id="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </ContactUsMapBox>
  );
};

export default ContactUsMap;
