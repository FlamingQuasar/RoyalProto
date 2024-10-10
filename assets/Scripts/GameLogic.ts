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

    generateField(){

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


