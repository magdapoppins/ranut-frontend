import { LatLngTuple, icon } from "leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const turku: LatLngTuple = [60.45, 22.25];

const mapboxAttribution =
  "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>";

const ranuRatings = [
  {
    name: "Mantun Grilli",
    lat: 60.44778922674664,
    lng: 22.270466677605995,
    rating: 4.5,
    description: "Historical grill in the heart of Turku",
  },
];

const ranuMarker = icon({
  iconUrl: "/ranu-full-of-ranus.png",
  iconSize: [41 * 1.07, 41],
  iconAnchor: [(41 * 1.07) / 2, 41],
  popupAnchor: [1, -34],
});

const Map = () => (
  <MapContainer
    style={{ height: "100vh", width: "100vw" }}
    center={turku}
    zoom={14}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution={mapboxAttribution}
      url={`https://api.mapbox.com/styles/v1/at1as/cl3a79jtu001s14pepm5b8eo4/tiles/256/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
    />
    {ranuRatings.map((rating) => (
      <Marker
        key={rating.name}
        icon={ranuMarker}
        position={[rating.lat, rating.lng]}
      >
        <Popup>
          <div>
            <h3>{rating.name}</h3>
            <p>{rating.description}</p>
            <p>Rating: {rating.rating}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
