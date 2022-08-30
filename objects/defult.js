export class defaultObject {
    constructor(position){
        this.position = position ? position : {x: 0, y: 0}
        this.width = 60 
        this.height = 60 
    }
    render(context) {
        context.fillRect(
            this.position.x, 
            this.position.y,
            this.width,
            this.height
        )
    }
}