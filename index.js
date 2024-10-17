







async function fetchWizard() {
    try{
        let wizardName = document.getElementById("wizardName").value;
        if (wizardName!=undefined){
            wizardName = wizardName[0].toUpperCase() + wizardName.slice(1);
            console.log(wizardName);
        } 

        const result = await fetch("https://potterapi-fedeperin.vercel.app/en/characters");
        const wizardInfo = await result.json();

        for (let i=0; i<25; i++){
            let wizard = wizardInfo[i];
            if (wizard.nickname==wizardName){
                console.log(wizard);
            };
        }
    }
    catch(error) {
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

