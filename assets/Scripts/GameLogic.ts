import { _decorator, Component, Node, Prefab, Label } from 'cc';
const { ccclass, property } = _decorator;

const TILE_SIZE = 32;
const FIELD_HEIGHT = 4;
const FIELD_WIDTH = 4;

enum TileType{
    TT_COVERED,
    TT_UNCOVERED
};

enum GameState{
    GS_INIT,
    GS_PLAYING,
    GS_END,
}

class Tile{
    private _isCovered:boolean = true;
    public tileSprite:Node;
    public position:{row:number, column:number}

    onMouseClick(){
        if(this._isCovered){
            this._isCovered = false;
            //this.tileSprite.opacity = 0;
        }
    }
}

class Gem{
    public position:{row:number, column:number}
    public height:number;
    public width:number;
    private _isCovered:boolean = true;
    private _field:Node;

    constructor({position:{row, column}, height, width, field}){
        this._field = field;
    }

    checkCover(){
        this._isCovered = this._field.checkCover(this);
    }
}

class GemSmall extends Gem{

}

class GemMedium extends Gem{

}

class GemLarge extends Gem{

}

@ccclass('GameLogic')
export class GameLogic extends Component {

    @property({type: Prefab})
    public tilePrefab: Prefab|null = null;

    // references to startMenu node
    @property({ type: Node})
    public startMenu:Node|null = null;

    //references to pickaxes node.
    @property({type: Label})
    public pickAxesCounterLabel: Label|null = null;

    //references to timer node.
    @property({type: Label})
    public timerCounterLabel: Label|null = null;

    private field:Tile[][];

    start() {    }

    update(deltaTime: number) {
        
    }

    init(){
        //show the start menu
        if(this.startMenu){
            this.startMenu.active = true;
        }
        //generate the map
        this.generateField();
    }

    onQuitButtonClicked(){
        this.setCurrentState(GameState.GS_INIT);
    }

    onStartButtonClicked(){
        this.setCurrentState(GameState.GS_PLAYING);
    }

    generateField(fieldHeight:number = FIELD_HEIGHT, fieldWidth:number = FIELD_WIDTH, gemsArray:Gem[]){
        
    }

    setCurrentState(value:GameState){
        switch(value){
            case GameState.GS_INIT:
                this.init();
                break;
            case GameState.GS_PLAYING:
                if(this.startMenu){
                    this.startMenu.active = false;
                }
                //this.pickAxesCounterLabel.string = '100';
                // reset steps counter to 0
                /*if(this.stepsLabel){
                    this.stepsLabel.string = '0';
                }*/
                break;
            case GameState.GS_END:
                break;
        }
        
    }
}


