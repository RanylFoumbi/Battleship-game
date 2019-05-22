var view ={
    
         displayMessage :function(msg){
             messageArea.innerHTML = msg;                                  
        },
        
         displayShip :function(shipposition){
             document.getElementById(shipposition).setAttribute("class","hit");
        },
        
        displayMiss :function(missposition){
            document.getElementById(missposition).setAttribute("class","miss");

        }

};

var model={

Grid: {
    "A0": 0, "A1": 1, "A2": 2, "A3": 3, "A4": 4, "A5": 5, "A6": 6,
    "B0": 10, "B1": 11, "B2": 12, "B3": 13, "B4": 14, "B5": 15, "B6": 16,
    "C0": 20, "C1": 21, "C2": 22, "C3": 23, "C4": 24, "C5": 25, "C6": 26,
    "D0": 30, "D1": 31, "D2": 32, "D3": 33, "D4": 34, "D5": 35, "D6": 36,
    "E0": 40, "E1": 41, "E2": 42, "E3": 43, "E4": 44, "E5": 45, "E6": 46,
    "F0": 50, "F1": 51, "F2": 52, "F3": 53, "F4": 54, "F5": 55, "F6": 56,
    "G0": 60, "G1": 61, "G2": 62, "G3": 63, "G4": 64, "G5": 65, "G6": 66
},


        WinShips:{"A0":0,"C1":21,"D4":34,"F0":50,"D2":32,"E3":43,"E4":44, "F5":55,"G1":61,"G2":62,"A3":3, "B6":16}




};


var octopus= {

guessEntry : function (userInputFieldFire) {

    if (model.Grid[userInputFieldFire] === void 0) {

        alert("Enter a require value!");

    }else {

        if (model.Grid[userInputFieldFire] == model.WinShips.A0 ||
            model.Grid[userInputFieldFire] == model.WinShips.C1 ||
            model.Grid[userInputFieldFire] == model.WinShips.F0 ||
            model.Grid[userInputFieldFire] == model.WinShips.B6 ||
            model.Grid[userInputFieldFire] == model.WinShips.D2 ||
            model.Grid[userInputFieldFire] == model.WinShips.E3 ||
            model.Grid[userInputFieldFire] == model.WinShips.E4 ||
            model.Grid[userInputFieldFire] == model.WinShips.F5 ||
            model.Grid[userInputFieldFire] == model.WinShips.G1 ||
            model.Grid[userInputFieldFire] == model.WinShips.G2 ||
            model.Grid[userInputFieldFire] == model.WinShips.A3)
        {
            view.displayShip(model.WinShips[userInputFieldFire]);
            view.displayMessage("You hit!");

        }else{

            view.displayMiss(model.Grid[userInputFieldFire]);
            view.displayMessage("You missed !");
        }


    }
    for(var items in model.WinShips)
    {
        if(model.WinShips[items] === 10){

            alert("YOU SANK ALL SHIPS");

    }
}
}

};
function guess()
{
    var userInputFieldFire = document.getElementById('guessInput');
    octopus.guessEntry(userInputFieldFire.value);
}


