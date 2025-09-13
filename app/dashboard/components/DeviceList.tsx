'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface CrxDevice {
  id: number;
  userId: number;
  macId: string;
  name: string;
  createdAt: string;
}

export default function DeviceList() {
  const [devices,setDevices] = useState<CrxDevice[]>([]);
  const userId:number = 5;
  const router = useRouter();
  
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get(`http://localhost:5068/api/crxdevices/user/${userId}`);
        const data = res.data;
        if (Array.isArray(data) && data.length > 0){
          setDevices(data);
        } 
      } catch (error:any) {
        if (error.response && error.response.status === 404) {
          console.log("user e ait cihaz yok yeni cihaz ekleme sayfasina yonlendiriliyor.");
          router.push('/dashboard/devices/newdevice');
        }
      }
    };
    fetchDevices();
  }, [userId]);

// seçilen cihazın detay sayfasına yönlendir
  const handleSelect = (id: number) => {
    
    router.push(`/dashboard/devices/${id}`);
  };
 

  return (
  <div className="p-10">
      <h1 className="text-xl font-bold mb-5">Cihazlarım</h1>
      <ul className="space-y-2">
        {devices.map((device) => (
          <li key={device.id} className="border p-4 rounded shadow flex justify-between items-center">
            <div>
              <p><strong>Ad:</strong> {device.name}</p>
              <p><strong>Mac ID:</strong> {device.macId}</p>
              <p><strong>Eklenme:</strong> {new Date(device.createdAt).toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleSelect(device.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Seç
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}