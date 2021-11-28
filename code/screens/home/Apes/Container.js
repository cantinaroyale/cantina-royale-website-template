import React from 'react'
import { animations } from '../../../../assets/js/consts'
import { Frame, Spinner } from '../../../common'
function Container({ smallApe, coinsImg, id = ''}) {
    return (
        <div className={`ape-container`} id={id}>
            <figure className={`ape-figure ape-figure-bottom-small selected  delay-1`} />
            <figure className={`ape-figure ape-figure-bottom-big selected  delay-2`} />
            <figure className='ape-figure ape-figure-top-small selected  delay-3' />
            <figure className='ape-figure ape-figure-top-big  selected delay-4' />
            <img src={smallApe} className='ape-small-ape selected  delay-5' />
            <Frame className='ape-model'>
                <Spinner id={`${id}-loader`} />
                <div
                    style={{ width: 230, height: 300, opacity: 0 }}
                    id={`${id}-model`}
                ></div>
            </Frame>
            <Frame className='ape-coins selected  delay-6'>
                <img src={coinsImg} />
            </Frame>
        </div>
    )
}

export default Container
