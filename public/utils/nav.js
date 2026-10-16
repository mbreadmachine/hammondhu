const navs = {
    "home": "/",
    "desi": "/desiauto",
    "music": "/music",
    "pics": "/pics"
}

function page(name) {
    let hammond = new Audio("/Hammond.m4a")
    hammond.play()
    hammond.addEventListener("ended", () => {
        navigation.navigate(navs[name])
    })
}