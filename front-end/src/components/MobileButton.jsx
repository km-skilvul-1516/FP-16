import React from 'react'

const MobileButton = (props) => {
    return (
        <div>
            <div className="py-4 px-6 rounded-lg bg-button">
                <div className="flex">
                    <img className="mr-6" src={props.pic} alt=""></img>
                    <div className="flex flex-col">
                        <div className="text-sm font-semibold">
                            {props.title}
                        </div>
                        <div className="mt-1 text-xxs text-gray-600">
                            {props.desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileButton
