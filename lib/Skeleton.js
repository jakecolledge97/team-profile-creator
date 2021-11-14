//creates a skeleton to create column divs
class Skeleton {
    constructor(elements){
        this.elements = elements
    }
    createDiv(){
        const htmlElements = this.elements
        return `<div class="column is-3-desktop is-6-tablet is-12-mobile m-2">
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
    createHtmlPage(object){
        let htmlString = "";
        for(let i = 0; i < object.length; i++){
            console.log(object[i])
            htmlString += object[i]
        }
        console.log(htmlString)
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
<div class="block py-6 has-background-danger">
  <div class="columns my-6">
    <div class="column is-12 has-text-centered">
      <h1 class="title has-text-white">The Team.</h1>
    </div>
  </div>
</div>
  <div class="columns is-multiline p-4">
    ${htmlString}
  </div>
</body>
</html>`
    }
}
module.exports = Skeleton;