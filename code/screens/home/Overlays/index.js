import React from 'react'
import { images } from '../../../../assets/js/consts'
import { Overlay } from '../../../common'

function Overlays() {
    return (
        <>
            <Overlay id='main' src={images.main.overlay} />
            <Overlay id='cantina' src={images.cantina.overlay} />
            <Overlay id='species' src={images.species.overlay} />
            <Overlay id='variations' src={images.variations.overlay} />
            <Overlay id='pve' src={images.pve.overlay} />
            <Overlay id='pvp' src={images.pvp.overlay} />
            <Overlay id='scholarships' src={images.scholarships.overlay} />
            <Overlay id='apes' src={images.apes.overlay} />
        </>
    )
}

export default Overlays
