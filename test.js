var k

function setup(){

createCanvas(400,600)
k= new Key(0,width/4)

}


function draw(){

background(0);
k.show();
k.update();

} 


class Key {
    constructor(position_, size_) {
        let y, x, _width, _height;
        y = position_;
        x = 0;
        _width = size_;
        _height = _width + (width / 4);

        this.show = ()=> {
            fill(255);
            rect(x, y, _width, _height);
        };

        this.update=()=>{
         y=y+5;
        }
    }
}
