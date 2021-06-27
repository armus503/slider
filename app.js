const slider = document.querySelectorAll('.slide')

for (const slide of slider) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slider.forEach((slide) => {
        slide.classList.remove('active')
    })
}