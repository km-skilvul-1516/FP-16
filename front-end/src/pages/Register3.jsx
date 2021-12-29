import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import PhoneDropdown from '../components/PhoneDropdown'
import Form from '../components/Form'
import ChartBar from '../components/ChartBar'
import MobileButton from '../components/MobileButton'

const Register2 = () => {
    return (
        <div>
            <div className="px-8 pt-12">
                <ChartBar />
                <div className="pt-5">
                    <div className="text-xs mb-1">Tahap 2</div>
                    <div className="text-lg font-bold">Verifikasi Akun</div>
                </div>
                <div className="pt-12 flex flex-col gap-y-4">
                    <MobileButton
                        pic="message-icon.svg"
                        title="via Pesan"
                        desc="+62 882-4210-1485"
                    />
                    <MobileButton
                        pic="mail-icon.svg"
                        title="via Email"
                        desc="salmansetiawan88@gmail.com"
                    />
                </div>
                <div className="pt-8 w-full">
                    <Button title="Daftar" />
                </div>
            </div>
        </div>
    )
}

export default Register2
