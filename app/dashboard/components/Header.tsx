import {ModeToggle} from "@/components/ModeToggle";


export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Kullanıcı Adı</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Çıkış Yap
        </button>
        <ModeToggle/>
      </div>
    </header>
  );
}