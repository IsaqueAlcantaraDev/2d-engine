export class defaultObject {
    constructor(position, width, height){
        this.position = position ? position : {x: 0, y: 0}
        this.width = width ? width : 60
        this.height = height ? height : 60
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