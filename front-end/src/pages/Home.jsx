import React from 'react'
import MobileAvatar from '../components/MobileAvatar'
import MobileButton from '../components/MobileButton'

const Home = (props) => {
    return (
        <div>
            <div className="pt-24 pb-6 px-8">
                <div className="text-sm mb-1">Halo Salman</div>
                <div className="text-2xl font-bold">apa yang bisa kami lakukan untukmu hari ini?</div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Lihat Informasi</div>
                        <MobileAvatar 
                            pic="avatar.png"
                            title="Salman Setiawan"
                            desc="Mahasiswa"
                        />
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Layanan Kami</div>
                        <MobileButton 
                            pic="konseling.svg"
                            title="Konsultasi dan Pemeriksaan Psikologis"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="konseling.svg"
                            title="Pusat Dyslexia"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="konseling.svg"
                            title="Pusat Ketergantungan Gadget"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="konseling.svg"
                            title="Brain Training"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="konseling.svg"
                            title="Pelatihan & Coaching Murid"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="konseling.svg"
                            title="Recruitment dan Training Guru Pendamping"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="konseling.svg"
                            title="Kelas untuk Anak Berkebutuhan Khusus"
                            desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                        />
                        <MobileButton 
                            pic="webinar.svg"
                            title="Parenting Workshop & Seminars"
                            desc="mengikuti kegiatan webinar bertajuk kesehatan mental bersama narasumber ahli dan terpercaya."
                        />
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Lainnya</div>
                        <MobileButton 
                            pic="tes.svg"
                            title="tes kesehatan"
                            desc="lakukan tes bersama kami agar anda mengetahui kondisi dari kesehatan mental anda saat ini."
                        />
                        <MobileButton 
                            pic="blog.svg"
                            title="blog"
                            desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                        />
                        <MobileButton 
                            pic="ahli.svg"
                            title="profil ahli"
                            desc="cek informasi mengenai para ahli yang bekerja pada kami."
                        />
                        <MobileButton 
                            pic="info.svg"
                            title="tentang kami"
                            desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                        />
                        <MobileButton 
                            pic="kolab.svg"
                            title="kolaborasi"
                            desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
                        />
                        <MobileButton 
                            pic="feedback.svg"
                            title="feedback"
                            desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
                        />
                        <MobileButton 
                            pic="tos.svg"
                            title="syarat dan ketentuan"
                            desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
                        />
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home
