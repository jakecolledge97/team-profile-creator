//creates a skeleton to create column divs
class Skeleton {
    constructor(elements){
        this.elements = elements
    }
    createDiv(){
        const htmlElements = this.elements
        return `<div class="column is-3-desktop is-6-tablet is-12-mobile">
            <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">${htmlElements[0]}</p>
                      <p class="subtitle is-6">${htmlElements[2]}</p>
                    </div>
                  </div>
                  <div class="content">
                    <a href="${htmlElements[4]}">${htmlElements[0]}</a>.
                    <br>
                  </div>
                </div>
            </div>
        </div>
        `
    }
    createHtmlPage(){
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Test</title>
</head>
<body>
    <div class="columns is-multiline">
        ${this.elements}
    </div>
</body>
</html>`
    }
}
module.exports = Skeleton;