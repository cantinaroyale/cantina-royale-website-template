
import { images } from './images.js'
import animations from './animations.js'
import species from './species.js'

const TRANSITION_DURATION = 1.3;
const sections = [{ name: 'Game Play Video', link: '/#game-play-video' }, { name: 'Cantina Metaverse', link: '#cantina-metaverse' }, { name: 'Species', link: '#species' },
{ name: '3d Variations', link: '#3d-variations' }, { name: 'PVE', link: '#pve' }, { name: 'PVP', link: '#pvp' }]
const pageImages = [images.main.bg, images.cantina.bg, images.species.bg, images.species.bg, images.pve.bg, images.pvp.bg]
const pagesIndexes = { main: 0, cantina: 1, species: 2, variations: 3, pve: 4, pvp: 5 }

export { TRANSITION_DURATION, sections, images, pageImages, animations, species , pagesIndexes};
