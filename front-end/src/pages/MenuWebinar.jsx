import React from 'react'
import NotifButton from '../components/NotifButton'
import WebinarCard from '../components/WebinarCard'

const MenuWebinar = () => {
    return (
        <div>
            <div className="pt-24 pb-6 px-4">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Layanan Kami</div>
                        <div className="text-2xl font-bold">Webinar</div>
                    </div>
                    <NotifButton />
                </div>
                <div className="pt-8">
                    <div className="font-bold text-sm pb-3">Webinar yang akan datang</div>
                    <div className="flex flex-col gap-y-3">
                        <WebinarCard
                            title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                            picnarsum1="small-avatar.svg"
                            picnarsum2="small-avatar.svg"
                            picnarsum3="small-avatar.svg"
                            day="Kamis" 
                            date="14 Oct 2021"
                            quota="18"
                            price="Rp. 150.000"
                        />
                        <WebinarCard
                            title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                            picnarsum1="small-avatar.svg"
                            picnarsum2="small-avatar.svg"
                            picnarsum3="small-avatar.svg"
                            day="Kamis" 
                            date="14 Oct 2021"
                            quota="18"
                            price="Rp. 150.000"
                        />
                        <WebinarCard
                            title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                            picnarsum1="small-avatar.svg"
                            picnarsum2="small-avatar.svg"
                            picnarsum3="small-avatar.svg"
                            day="Kamis" 
                            date="14 Oct 2021"
                            quota="18"
                            price="Rp. 150.000"
                        />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default MenuWebinar
