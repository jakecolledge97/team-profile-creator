//creates a skeleton to create column divs
class Skeleton {
    constructor(elements){
        this.elements = elements
    }
    createDiv(){
        return `<div class=column>${this.elements}</div>`
    }
}
module.exports = Skeleton;