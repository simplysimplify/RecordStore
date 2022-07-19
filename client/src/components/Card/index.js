import React from 'react'

export default function Card({obj}) {
    return (
        <div>
            <h3>Artist: {obj.artist}</h3>
            <p>album: {obj.title}</p>
            <p>Release Year: {obj.year}</p>
        </div>
    )
}
