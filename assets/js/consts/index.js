
import { images } from './images.js'
import animations from './animations.js'
import species from './species.js'
import partners from './partners.js'
import community from './community.js'
import videos from './videos.js'



const sections =
    [{ name: 'Game Play Video', link: '#game-play-video', overlay: images.main.overlay },
    { name: 'Cantina Metaverse', link: '#cantina-metaverse', overlay: images.cantina.overlay },
    { name: 'Species', link: '#species', overlay: images.species.overlay },
    { name: '3d Variations', link: '#3d-variations',  overlay: images.species.overlay  },
    { name: 'PVE', link: '#pve', overlay: images.pve.overlay },
    { name: 'PVP', link: '#pvp', overlay: images.pvp.overlay },
    { name: 'Scholarships', link: '#scholarships', overlay: images.scholarships.overlay },
    { name: 'Apes', link: '#apes', overlay: images.apes.overlay },
    { name: 'Partners', link: '#partners', overlay: images.partners.overlay },
    ]


const pageImages = [images.main.bg, images.cantina.bg, images.species.bg, images.variations.bg, images.pve.bg, images.pvp.bg, images.scholarships.bg, images.apes.bg, images.partners.bg]



const pagesIndexes = { main: 0, cantina: 1, species: 2, variations: 3, pve: 4, pvp: 5, scholarships: 6, apes: 7, partners: 8 }
const pageLoaderAnimationTime = 4000
const bodyPartsInterval = 10000


export {  sections,videos,  images, pageImages, animations, species, pagesIndexes, pageLoaderAnimationTime, bodyPartsInterval, partners, community };
