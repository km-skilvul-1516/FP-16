import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import PhoneDropdown from '../components/PhoneDropdown'
import Form from '../components/Form'
import ChartBar from '../components/ChartBar'
import MobileButton from '../components/MobileButton'

const Register4 = () => {
    return (
        <div>
            <div className="px-8 pt-12">
                <ChartBar />
                <div className="pt-5">
                    <div className="text-xs mb-1">Tahap 2</div>
                    <div className="text-lg font-bold">Verifikasi Akun</div>
                </div>
                <div className="p-12">
                    <img src="after-register.svg" alt="" />
                </div>
                <div className="font-bold text-sm">
                    Pendaftaranmu hampir selesai
                </div>
                <div className="mt-2 text-sm">
                    Ayo lengkapi profilmu agar dapat mengakses seluruh fitur yang tersedia pada website MS Wellbeing 
                </div>
                <div className="pt-12 w-full">
                    <Button title="Lanjut" />
                </div>
            </div>
        </div>
    )
}

export default Register4
