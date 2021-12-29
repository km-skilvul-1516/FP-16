import React from 'react'
import BlogCard from '../components/BlogCard'
import KategoriBlog from '../components/KategoriBlog'
import NotifButton from '../components/NotifButton'

const MenuBlog = () => {
    return (
        <div>
            <div className="pt-24 pb-6 px-8">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Lainnya</div>
                        <div className="text-2xl font-bold">Blog</div>
                    </div>
                    <NotifButton />
                </div>
                <div className="pt-8">
                    <div className="font-bold text-sm pb-3">Kategori</div>
                    <div className="flex gap-x-3">
                        <KategoriBlog title="Semua" />
                        <KategoriBlog title="Kesehatan Mental" />
                    </div>
                </div>
                <div className="pt-8">
                    <div className="font-bold text-sm pb-3">Hasil</div>
                    <div className="flex flex-col gap-y-3">
                        <BlogCard 
                            pic="exampleblog.png"
                            title="Dampak overthinking bisa berakibat fatal"
                            desc="Terdapat masalah dengan Rumah Tanggamu? Bingung untuk mencari solusi bersama pasangan? Konsultasikan masalahmu bersama psikolog kami."
                        />
                        <BlogCard 
                            pic="exampleblog.png"
                            title="Dampak overthinking bisa berakibat fatal"
                            desc="Terdapat masalah dengan Rumah Tanggamu? Bingung untuk mencari solusi bersama pasangan? Konsultasikan masalahmu bersama psikolog kami."
                        />
                        <BlogCard 
                            pic="exampleblog.png"
                            title="Dampak overthinking bisa berakibat fatal"
                            desc="Terdapat masalah dengan Rumah Tanggamu? Bingung untuk mencari solusi bersama pasangan? Konsultasikan masalahmu bersama psikolog kami."
                        />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default MenuBlog
