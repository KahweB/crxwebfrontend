import React from 'react'
import { Input } from "@/components/ui/input"



const LoginPage = () => {
  return (
    <div className=' className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"'>
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="">
                <p>Giriş</p>
            </div>
            <div>
                <Input type='username' placeholder='kullanıcı adı'></Input>
            </div>
             <div>
                <Input type='password' placeholder='şifre'></Input>
            </div>
            
        </div>
        
    </div>
  )
}

export default LoginPage