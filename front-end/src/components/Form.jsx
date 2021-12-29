import React from 'react'

const Form = () => {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <input
                        className="text-gray-900 appearance-none block w-full bg-gray-100 border border-gray-100 rounded py-2 px-2 my-2 text-sm leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                        placeholder="johndoe@mail.com"
                    />
                </div>
            </div>
        </div>
    )
}

export default Form
