import styles from './Map.module.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react';
import { useCities } from '../contexts/CitiesContext'
import { useMap, useMapEvents } from 'react-leaflet';
import { useGeolocation } from '../contexts/useGeolocation';
import Button from './Button'

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams] = useSearchParams();
  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation();

  const mapLat = searchParams.get('lat')
  const mapLng = searchParams.get('lng')

  useEffect(function () {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng])

  useEffect(function () {
    if(geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
  }, [geolocationPosition])

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <Button 
      type='position' 
      onClick={getPosition}
      >
        { isLoadingPosition ? 'loading...' : 'User your position'}
      </Button>}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
          <Popup>
            <span>{city.emoji}</span> <span>{city.cityName}</span>
          </Popup>
        </Marker>)}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>

    </div>
  )
}

function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}

export default Map;
