import React from 'react'

const BlogCard = (props) => {
    return (
        <div>
            <div className="rounded-lg bg-button">
                <img className='rounded-t-lg' src={props.pic} alt="" />
                <div className="flex flex-col p-4">
                    <div className="text-sm font-bold">
                        {props.title}
                    </div>
                    <div className="mt-1 text-xxs text-gray-600">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
