

async function fetchWizard() {
    try{
        let wizardName = document.getElementById("wizardName").value; //getting input from the user

        // if the input is not blank, make the nickname first letter uppercase (because thats how they are mentioned in API objects)
        if (wizardName!=undefined){
            wizardName = wizardName[0].toUpperCase() + wizardName.slice(1);
        } 

        const result = await fetch("https://potterapi-fedeperin.vercel.app/en/characters"); //fetch API
        const wizardInfo = await result.json(); //convert into JSON

        /*following if loop iterates over each object(wizard) and 
        if the nickname which the user typed in corresponds to any of them, display
        some info about this wizard */

        for (let i=0; i<25; i++){ 
            let wizard = wizardInfo[i];
            if (wizard.nickname==wizardName){

                document.getElementById("template").style.display = "grid"; //show the block where everyhting will be displayed

                document.getElementById("item-1").textContent=`Full name: ${wizard.fullName}`;
                document.getElementById("item-2").textContent=`Date of birth: ${wizard.birthdate}`;
                document.getElementById("item-4").textContent=`Hogwarts House: ${wizard.hogwartsHouse}`;
                document.getElementById("item-5").textContent=`Actor: ${wizard.interpretedBy}`;

                const wizardImage = document.getElementById("wizardImage");
                wizardImage.src = wizard.image;
                wizardImage.style.display = "block";

                //a little style change

                if (wizard.hogwartsHouse == "Gryffindor"){
                    document.getElementById("template").style.background = "darkred";
                }
                if (wizard.hogwartsHouse == "Ravenclaw"){
                    document.getElementById("template").style.background = "darkblue";
                }
                if (wizard.hogwartsHouse == "Slytherin"){
                    document.getElementById("template").style.background = "darkgreen";
                }
                if (wizard.hogwartsHouse == "Hufflepuff"){
                    document.getElementById("template").style.background = "darkgoldenrod";
                }
            };
        }

        //clear input field
        document.getElementById("wizardName").value = "";
    }
    catch(error) { //error handling
        console.error(error);
    }
}


// functions for an input field
function focusFunction(event){
    let border = event.target;
    border.style.borderColor = "brown";
    border.style.borderWidth = "0.2em";
}
function blurFunction(event){
    let border = event.target;
    border.style.borderColor = "black";
    border.style.borderWidth = "0.1em";
}

