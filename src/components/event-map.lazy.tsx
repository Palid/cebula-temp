import "leaflet/dist/leaflet.css"

import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import { Translations } from "@/i18n/translations"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"


export default function Map({ t }: {
  t: Translations
}) {
  return (
    <div className='h-screen max-h-[400px] pt-8 relative mx-auto max-w-3xl'>
      {/* @ts-expect-error dragging IS a valid prop. */}
      <MapContainer dragging={false} center={[51.104955057760804, 17.087378768775697]} zoom={40} scrollWheelZoom={false} className="h-full w-full">
        {/* @ts-expect-error attribution IS a valid prop. */}
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.104955057760804, 17.087378768775697]}>
          <Popup>
            {t.where.location}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
