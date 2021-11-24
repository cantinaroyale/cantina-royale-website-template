
import { images } from './images.js'
import animations from './animations.js'
import species from './species.js'

const TRANSITION_DURATION = 1.3;


const sections =
    [{ name: 'Game Play Video', link: '/#game-play-video', overlay: images.main.overlay },
    { name: 'Cantina Metaverse', link: '#cantina-metaverse', overlay: images.cantina.overlay },
    { name: 'Species', link: '#species', overlay: images.species.overlay },
    { name: '3d Variations', link: '#3d-variations' },
    { name: 'PVE', link: '#pve', overlay: images.pve.overlay },
    { name: 'PVP', link: '#pvp', overlay: images.pvp.overlay },
    { name: 'Scholarships', link: '#scholarships', overlay: images.scholarships.overlay }]


const pageImages = [images.main.bg, images.cantina.bg, images.species.bg, images.species.bg, images.pve.bg, images.pvp.bg, images.scholarships.bg]
const pagesIndexes = { main: 0, cantina: 1, species: 2, variations: 3, pve: 4, pvp: 5, scholarships: 6 }
const pageLoaderAnimationTime = 4000
const bodyPartsInterval = 10000

export { TRANSITION_DURATION, sections, images, pageImages, animations, species, pagesIndexes, pageLoaderAnimationTime, bodyPartsInterval };
