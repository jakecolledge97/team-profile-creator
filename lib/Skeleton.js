//creates a skeleton to create column divs
class Skeleton {
    constructor(elements){
        this.elements = elements
    }
    createDiv(){
        const htmlElements = this.elements
        console.log(htmlElements)
        return `
        <div class="column is-3-desktop is-6-tablet is-12-mobile">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a href="${htmlElements[4]}">${htmlElements[0]}</a>.
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
        <div class="column is-3-desktop is-6-tablet is-12-mobile">
            <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
              
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
        </div>
        ${this.elements}
    </div>
</body>
</html>`
    }
}
module.exports = Skeleton;