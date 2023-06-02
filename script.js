const content = document.getElementById('content')

async function getAnimes() {
    const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto&sfw")
    const result = await response.json()

    result.data.forEach((anime) => {
        if(anime && anime.title) {
            let animeData = `
            <div class="anime">
                <h2>${anime.title}</h2>
                <p>${anime.synopsis}</p>
            </div>
            `
            content.innerHTML += animeData
        }
    })
}
  
getAnimes()