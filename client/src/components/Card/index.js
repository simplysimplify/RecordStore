import React from 'react'

export default function Card({obj}) {
    return (
        <div>
            <h3>Artist: {obj.artistName}</h3>
            <p>album: {obj.album}</p>
            <p>topHits: {obj.topHits}</p>
            <p>lastTour: {obj.lastTour}</p>
        </div>
    )
}
