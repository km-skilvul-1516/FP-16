import React from 'react'
import Button from '../components/Button'
import ChartBar from '../components/ChartBar'

const ExampleHealthTest = () => {
    return (
        <div>
            <div className="p-8">
                <ChartBar />
                <div className="pt-6 mb-1 text-sm">
                    Soal 1
                </div>
                <div className="font-bold text-xl">
                    Saya merasa bahwa saya menggunakan banyak energi untuk cemas
                </div>
                <div className="pt-8 grid grid-cols-2 gap-x-4">
                    <Button 
                        title="Tidak Pernah"
                    />
                    <Button 
                        title="Kadang-kadang"
                    />
                </div>
                <div className="pt-4 grid grid-cols-2 gap-x-4">
                    <Button 
                        title="Hampir Sering"
                    />
                    <Button 
                        title="Selalu"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExampleHealthTest
