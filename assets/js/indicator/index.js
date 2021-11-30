const addEvents = () => {
    const sections = document.querySelectorAll('.indicator-section')
    const sectionsText = document.querySelectorAll('.indicator-section-btn')
    const indicator = document.querySelector('.indicator')
    sections.forEach(section => {
        const hash = section.getAttribute('data-link')
        section.addEventListener('click', () => {
            if(!sketch.isRunning){
                window.location.replace(hash)
            }
        })
    })
  
}


const changeActiveSection = (activeElemIndex) =>  {
    const  indicatorSections = document.querySelectorAll('.indicator-section')
        indicatorSections.forEach((section, index) => {
        section.id = index === activeElemIndex ? 'selected-section' : section.id = ''
    })
}

const indicator = {
    addEvents,
    changeActiveSection
}

export default indicator