'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
export default function DeviceList() {
  const [devices, setDevices] = useState([
    { id: 1, name: 'cihaz1', status: 'Aktif' },
    { id: 2, name: 'cihaz2', status: 'Pasif' },
  ]);

  // Örnek API çağrısı (opsiyonel)
  // useEffect(() => {
  //   fetch('/api/devices')
  //     .then((res) => res.json())
  //     .then((data) => setDevices(data));
  // }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Cihaz Listesi</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">MacId</th>
            <th className="p-2 text-left">Cihaz Adı</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id} className="border-t">
              <td className="p-2">{device.id}</td>
              <td className="p-2">{device.name}</td>
              <td className="p-2"><Button>Göster</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}