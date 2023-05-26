// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`3c00100009090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090907070705050505070707050507070705050505050707070507070707070505050505050707070705050505050507070505050505050505050505050505050507050505050505050a0a0a0a0a0a0a0a04040404040a0a0a0404040a040404040404040404040404040404040404040404040404040404040207070a0a0a0a0a0a0a0a0a0a0a0a0404040404040a0a0a0505050a040404040404040404040404040404040404040404040404040404040404040404060505050505050506060605050505060605050505060605050606050506040406050506060606050505060606050505050506060505050506060505090909090909090909090909090909090909090909090909090909090909040409090909090909090909090909090909090909090909090909090909040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040a04040404040304040404040404040404040404040404040404030404040404040404040404040404040a0a0a0404040404040404040404030303040a040404040403030303030303040404040404080804040404040303040404040404040a0a040404040a0a040404040304040404040b0404040404040a04040404040404030404040404040404080804040804040404040404040a0a0a0a0a0a0a0a0a0a0a0404040404040304040404040b0404040404040a0404040404040403040404080404040404040404040804040404040a0a0404040a0a0a0a0404040404040404040403040404040b0b040a0404040a0404040a0a040a04040404040804080404040404040404080404040404040404040a0a0a0404040404040808080804040403040b0b0404040404040404040a0a0a0404040404040408080404080404040404040404040404040404040a0a0404040404040404040408080404040404040404040404040a0a0a0a080804040404040404080808040408040804080404040404040404040404040404040404040404040404040804040404040404040408040408080808080404040404080408080808080808080808080408080808040808080804040404080808080404040404040808040403010404040404040404040404040404040404040404080808040404040404040404040404040404040404040404040404040404040404040404040404`, img`
222222222222222222222222222222222222222222222222222222222222
............................................................
............................................................
............................................................
............................................................
222222222222222222222222222222..2222222222222222222222222222
............................................................
............................................................
.............................22.............................
...........................22..2............................
......................2.........2...........................
......................2.2........2..................2222...2
......................22..2...........................22....
............22.......222..2.2.2........................2....
.....2..22222.....2.22222222222.2222.2222....2222......22..2
.....................222....................................
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,sprites.dungeon.floorLight4,myTiles.tile1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,myTiles.tile2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.dungeon.floorLight5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖2":
            case "tile4":return tile4;
            case "我的貼圖3":
            case "tile5":return tile5;
            case "我的貼圖1":
            case "tile3":return tile3;
            case "我的貼圖4":
            case "tile6":return tile6;
            case "我的貼圖5":
            case "tile7":return tile7;
            case "我的貼圖6":
            case "tile8":return tile8;
            case "我的貼圖0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
