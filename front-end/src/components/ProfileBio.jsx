import React from 'react'

const ProfileBio = (props) => {
    return (
        <div>
            <div className="py-4 px-6 rounded-lg bg-button">
                <div className="flex flex-col">
                    <div className="flex-flex-col">
                        <div className="text-xs text-gray-600">
                            Jenis Kelamin
                        </div>
                        <div className="mt-0.5 text-sm font-bold">
                            {props.kelamin}
                        </div>
                    </div>
                    <div className="flex-flex-col pt-3">
                        <div className="text-xs text-gray-600">
                            Profesi
                        </div>
                        <div className="mt-0.5 text-sm font-bold">
                            {props.profesi}
                        </div>
                    </div>
                    <div className="flex-flex-col pt-3">
                        <div className="text-xs text-gray-600">
                            Tanggal Lahir
                        </div>
                        <div className="mt-0.5 text-sm font-bold">
                            {props.tanggal}
                        </div>
                    </div>
                    <div className="flex-flex-col pt-3">
                        <div className="text-xs text-gray-600">
                            Kota Asal
                        </div>
                        <div className="mt-0.5 text-sm font-bold">
                            {props.kota}
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default ProfileBio
