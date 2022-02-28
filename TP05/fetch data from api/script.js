async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let data = await getUsers();
    console.log(data);
    let html = '';
    data.forEach(e => {
        let htmlSegment = `<div class="box">
                            <img src="${e.thumbnailUrl}" >
                            <h2>${e.title}</h2>
                            <h2>Album Id: ${e.albumId} riel</h2>
                            <h2>Category: ${e.albumId}</h2>
                            <a href="url">See</a>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();

