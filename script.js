const collapseNavbar = () => {
    const navbarElem = document.querySelector("#navbar")
    const collapseBtnElem = document.querySelector("#collapseBtn")
    const isNavbarCollapsed = navbarElem.classList.contains("collapsed-navbar") ? true : false
    
    if(isNavbarCollapsed) {
        collapseBtnElem.className = "collapse"
        navbarElem.className = "navbar"
    } else {
        navbarElem.className = "collapsed-navbar"
        collapseBtnElem.className = "discollapse"
    }
}