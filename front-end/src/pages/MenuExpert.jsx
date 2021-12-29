import React from 'react'
import ExpertCard from '../components/ExpertCard'
import NotifButton from '../components/NotifButton'

const MenuExpert = () => {
    return (
        <div>
            <div className="px-6 pt-24">
                <div className="flex justify-between pb-12">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Lainnya</div>
                        <div className="text-2xl font-bold">Profil Ahli</div>
                    </div>
                    <NotifButton />
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="grid grid-cols-3 gap-x-4">
                        <ExpertCard 
                            pic="rosdiana.jpg"
                            name="Rosdiana Setyaningrum, MPsi, MHPEd, Psikolog"
                            role="Dirut & Pendiri Bersama MS School & Wellbeing Center"
                        />
                        <ExpertCard 
                            pic="dianda.jpg"
                            name="Dianda Azani, SPsi, MPsi, Psikolog"
                            role="Psikolog"
                        />
                        <ExpertCard 
                            pic="alva.jpg"
                            name="Alva Paramitha, SPsi, MPsi, BFRP"
                            role="Psikolog"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <ExpertCard 
                            pic="mario.jpg"
                            name="Mario Carl Joseph, SPsi, MPsi, Psikolog"
                            role="Psikolog"
                        />
                        <ExpertCard 
                            pic="ongen.jpg"
                            name="Ongen Cristian Joel, SPd"
                            role="Psikolog"
                        />
                        <ExpertCard 
                            pic="veronica.jpg"
                            name="Veronica Clarissa, SPsi, MPsi, Psikolog"
                            role="Psikolog"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <ExpertCard 
                            pic="sarilani.jpg"
                            name="Sarilani Wirawan, SPsi, SE, MPSi"
                            role="Psikolog"
                        />
                        <ExpertCard 
                            pic="greg.jpg"
                            name="Greg Jakaria, S.E"
                            role="Terapis"
                        />
                        <ExpertCard 
                            pic="panega.jpg"
                            name="Arlingga Panega"
                            role="Pelatih Komunikasi"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <ExpertCard 
                            pic="irna.jpg"
                            name="Irna Silawaty, S.Psi, M.Psi, Psikolog"
                            role="Psikolog"
                        />
                        <ExpertCard 
                            pic="elsa.jpg"
                            name="Elsa Safira Pangaribuan, S.H., SpN"
                            role="Pelatih Yoga"
                        />
                        <ExpertCard 
                            pic="kezia.jpg"
                            name="Kezia Santoso, BSc"
                            role="Psikolog"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuExpert

