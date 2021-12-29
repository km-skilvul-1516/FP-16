import React from 'react'
import BlogButton from '../components/BlogButton'

const ExampleBlog = () => {
    return (
        <div>
            <img src="exampleblogopened.png" alt="" />
            <div className="px-4">
                <div className="pt-6 text-xl">
                    Dampak overthinking bisa berakibat fatal
                </div>
                <div className="pt-4 flex justify-between">
                    <div className="text-gray-500 text-xs">
                        Salman Setiawan
                    </div>
                    <div className="text-gray-500 text-xs">
                        Kamis, 6 Mei 2021
                    </div>
                </div>
                <div className="pt-6 text-gray-500 text-xs leading-relaxed">
                    Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
                </div>
                <div className="mt-3 text-gray-500 text-xs leading-relaxed">
                    Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
                </div>
                <div className="flex botbar pb-4 pr-4 gap-x-3">
                    <BlogButton 
                        pic="white-back.svg"
                    />
                    <BlogButton 
                        pic="like.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExampleBlog
