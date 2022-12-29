const block = document.getElementById('container')

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            block.innerHTML += `
            <div class = "block1">
                <img src="pics/${element.img}" align = "left" class="type_pic" width="300">
                Name - ${element.name}<br>
                Description - ${element.description}<br>
                Link - ${element.link}
            </div>
            `
            console.log(element)
        });
    })
