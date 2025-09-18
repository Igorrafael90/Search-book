function Searchbook() {
    const API = "AIzaSyDJIQOGvuN5bMVvQQtsKxnialRIzAYVyOg"
    const Livro = window.document.getElementById("searchbook").value.trim()
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(Livro)}&key=${API}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const container = window.document.getElementById("results")
            container.innerHTML = ""

            if (!data.items) {
                container.innerHTML = "<p>Nenhum livro encontrado<p>"
                return
            }

            data.items.forEach(item => {
                const volume = item.volumeInfo
                const title = volume.title || "Sem título"
                const author = volume.authors ? volume.authors.join(", ") : "Autor desconhecido"
                const thumbnail = volume.imageLinks.thumbnail ? volume.imageLinks.thumbnail : ""
                const description = volume.description || "Sem descrição"

                const bookDiv = window.document.createElement("div")
                bookDiv.classList.add("book-card")
                bookDiv.innerHTML = `
                <div class="info1">
                    ${thumbnail ? `<img src="${thumbnail}" alt="${title}">` : ""}
                    <div class="info2">
                        <h2>${title}</h3>
                        <p><strong>Autor: ${author}</strong></p>
                    </div>
                </div>
                <p class="description">${description}</p>
                `

                container.appendChild(bookDiv)

            })
        }).catch(error => {
            console.error(error)
        })
}

function Searchauthor() {
    const API = "AIzaSyDJIQOGvuN5bMVvQQtsKxnialRIzAYVyOg"
    const Autor = window.document.getElementById("searchauthor").value.trim()
    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(Autor)}&key=${API}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const container = window.document.getElementById("results")
            container.innerHTML = ""

            if (!data.items) {
                container.innerHTML = "<p>Nenhum livro do autor encontrado<p>"
                return
            }

            data.items.forEach(item => {
                const volume = item.volumeInfo
                const title = volume.title || "Sem título"
                const author = volume.author ? volume.author.joins(", ") : ""
                const thumbnail = volume.imageLinks.thumbnail ? volume.imageLinks.thumbnail : ""
                const description = volume.description || "Sem descrição"

                const bookDiv = window.document.createElement("div")
                bookDiv.classList.add("book-card")
                bookDiv.innerHTML = `
                <div class="info1">
                    ${thumbnail ? `<img src="${thumbnail}" alt="${title}">` : ""}
                    <div class="info2">
                        <h2>${title}</h3>
                        <p><strong>Autor: ${author}</strong></p>
                    </div>
                </div>
                <p class="description">${description}</p>
                `

                container.appendChild(bookDiv)
            })
        }).catch(error => {
            console.error(error)
        })
}