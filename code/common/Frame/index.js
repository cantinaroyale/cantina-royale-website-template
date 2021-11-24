import React from 'react'



function Frame({children, id='', className=''}) {
    return (
        <div className={`frame ${className}`} id = {id}>
            <div className='frame-blur'></div>
            <div className='frame-inner'>
                <div className='frame-inner-content'>{children}</div>
            </div>
        </div>
    )
}

export default Frame
