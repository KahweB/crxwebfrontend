import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
        <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <p className="mb-2 tracking-[-.01em]">
            CrxWeb Ana Sayfa
          </p>
          <p className="tracking-[-.01em]">
            Login Register Test
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button asChild variant="outline">
            <Link href={"/login"}>Giriş</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={"/register"}>Kayıt</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={"/dataView"}>Grafik</Link>
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       Footer
      </footer>
    </div>
  );
}
