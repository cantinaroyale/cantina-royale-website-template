const addEvents = () => {
    const sections = document.querySelectorAll('.indicator-section')
    const sectionsText = document.querySelectorAll('.indicator-section-btn')
    const indicator = document.querySelector('.indicator')
    // indicator.addEventListener('mouseenter', () => {
    //     sectionsText.forEach(section => {
    //         section.style.display = 'block'
    //     })
    // })
    // indicator.addEventListener('mouseleave', () => {
    //     sectionsText.forEach(section => {
    //         section.style.display = 'none'
    //     })
    // })
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