import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (
        <div className = "cards animate__animated animate__bounce">
            <img src = {url} alt = {title} />
            <p>{title}</p>
        </div>
    )
}
