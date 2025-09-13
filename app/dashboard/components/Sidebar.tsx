'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 ml-15">CrxWeb</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={`block p-2 rounded ${pathname === '/dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/devices"
              className={`block p-2 rounded ${pathname === '/dashboard/devices' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              Cihazlar
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className={`block p-2 rounded ${pathname === '/dashboard/settings' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              Ayarlar
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/devices/newdevice"
              className={`block p-2 rounded ${pathname === '/dashboard/devices/newdevice' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              Cihaz Ekle
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}