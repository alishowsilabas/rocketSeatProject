function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('lightMode')
    
    // if (html.classList.contains('lightMode')) {
    //     html.classList.remove('lightMode')
    // } else {
    //     html.classList.add('lightMode')
    // }
}