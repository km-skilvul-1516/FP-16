import React from 'react'
import MobileAvatar from '../components/MobileAvatar'
import MobileButton from '../components/MobileButton'
import NotifButton from '../components/NotifButton'
import ProfileBio from '../components/ProfileBio'

const Profile = () => {
    return (
        <div>
            <div className="pt-24 pb-6 px-8">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Profil</div>
                        <div className="text-2xl font-bold">Salman Setiawan</div>
                    </div>
                    <NotifButton />
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="flex justify-between items-end">
                        <div className="font-bold text-sm">Biodata</div>
                            <div className="text-xxs text-blue-600">Ubah biodata disini</div>
                        </div>
                        <ProfileBio
                            kelamin="Laki-Laki"
                            profesi="Mahasiswa"
                            tanggal="16 Oktober 2000"
                            kota="Balikpapan"
                        />
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Akun</div>
                        <MobileButton 
                            pic="konseling.svg"
                            title="Layanan yang diambil"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="webinar.svg"
                            title="Webinar yang diikuti"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="blog.svg"
                            title="Blog yang disukai"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Pengaturan</div>
                        <MobileButton 
                            pic="blog.svg"
                            title="Ganti Email"
                            desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                        />
                        <MobileButton 
                            pic="ahli.svg"
                            title="Ganti Nomor Telepon"
                            desc="cek informasi mengenai para ahli yang bekerja pada kami."
                        />
                        <MobileButton 
                            pic="info.svg"
                            title="Ganti Kata Sandi"
                            desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                        />
                        <MobileButton 
                            pic="kolab.svg"
                            title="Keluar"
                            desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
                        />
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Profile
