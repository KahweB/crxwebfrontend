"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface DataPoint {
  id: number;
  value: number;
  time: string;
}

export default function HomePage() {
  const [data, setData] = useState<DataPoint[]>([]);

  // API'den veri çek
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5068/api/getlastsix");
      const json = await res.json();

      if (Array.isArray(json)) {
        
        const formatted:DataPoint[] = json.map((item) => ({
          id: Number(item.id),
          value: Number(item.data),
          time: `${item.tarih} ${item.saat}`,
        }));

        setData([...formatted].reverse());
        
      }
    } catch (error) {
      console.error("API hatası:", error);
    }
  };

  
  useEffect(() => {
    fetchData(); 
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-xl font-bold mb-5">Son 6 Test Verisi</h1>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        
      </div>
    </div>
  );
}
