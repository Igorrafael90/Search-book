function Search() {
    const API = ""
    const Livro = window.document.getElementById("searchbook").value.trim()
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(Livro)}&key=${API}`

    fetch(url)
    .then(res => res.json())
        .then(data => {
            const container = window.document.getElementById("results")
            container.innerHTML = ""

            if(!data.items) {
                container.innerHTML = "<p>Nenhum livro encontrado<p>"
                return
            }

            data.items.forEach(item => {
                const volume = item.volumeInfo
                const title = volume.title || "Sem título"
                const author = volume.authors ? volume.authors.join(", ") : "Autor desconhecido"
                const thumbnail = volume.imageLinks.thumbnail ? volume.imageLinks.thumbnail : ""
                const description = item.description || "Sem descrição"

                const bookDiv = window.document.createElement("div")
                bookDiv.innerHTML = `
                ${thumbnail ? `<img src="${thumbnail}" alt="${title}">` : ""}
                <h3>${title}</h3>
                <p><strong>Autor:${author}</strong></p>
                <p>${description}</p>
                `

                container.appendChild(bookDiv)

            })
    }).catch(error => {
        console.error(error)
    })
}