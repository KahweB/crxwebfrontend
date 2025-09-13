"use client"
import axios from "axios"
import { useEffect, useState } from "react"

interface CrxDevice {
  id: number
  macId: string
  name: string
  createdAt: string
}

interface DeviceDetailProps {
  deviceId: string
}

export default function DeviceDetail({ deviceId }: DeviceDetailProps) {
  const [device, setDevice] = useState<CrxDevice | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const res = await axios.get(`http://localhost:5068/api/crxdevices/${deviceId}`)
        setDevice(res.data)
      } catch (error: any) {
        if (error.response?.status === 404) {
          setError("Cihaz bulunamadı")
        } else {
          setError("Bir hata oluştu")
          console.error("Bir hata oluştu:", error)
        }
      }
    }
    fetchDevice()
  }, [deviceId])

  if (error) return <p className="p-10 text-red-500">{error}</p>
  if (!device) return <p className="p-10">Yükleniyor...</p>

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-5">{device.name} Detayları</h1>
      <p><strong>ID:</strong> {device.id}</p>
      <p><strong>Mac ID:</strong> {device.macId}</p>
      <p><strong>Eklenme:</strong> {new Date(device.createdAt).toLocaleString()}</p>
    </div>
  )
}