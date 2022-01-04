import data from "./statecity.json" assert { type: "json" };

export default class StateCity {
    constructor(elState, elCity, idState=0, idCity=0) {
        this.elState = elState;
        this.elCity  = elCity;
        this.idState = -1;
        this.idCity  = -1;
        this.states  = data.states;
        this.cities  = data.cities;
             
        elState.addEventListener('change', () => {          
            this.setState(this.elState.value)
        })

        elCity.addEventListener('change', () => {          
            this.setCity(this.elCity.value)
        })

        this.fetchState()
        this.setState(idState)
        this.setCity(idCity)        
    }

    showState(r) {   
        this.resetState();
        r.forEach(i => {
            this.elState.options[this.elState.options.length] = new Option(i.name, i.id);
        });
    }

    showCity(r) {   
        this.resetCity();
        r.forEach(i => {
            this.elCity.options[this.elCity.options.length] = new Option(i.name, i.id);
        });  
    }

    setState(v) {
        if (v != this.idState) {
            this.elState.value = v
            this.validState()
            if (this.elState.value == '') {
                this.elState.value = 0
                this.idState = 0 
            }   
            this.idState = v
            this.fetchCity(this.idState);
        }
    }

    setCity(v) {
        if (v != this.idCity) {
            this.elCity.value = v
            this.validCity()
            if (this.elCity.value == '') {              
                this.elCity.value = 0
                this.idCity = 0;
            }
        }           
    }

    validState() {
        this.elState.classList.remove("is-valid");
        this.elState.classList.remove("is-invalid");
        if (this.elState.value == '') { 
            this.elState.classList.add("is-invalid") 
        } else {
            if (this.elState.value > 0) {
                this.elState.classList.add("is-valid")
            }
        }
    }

    validCity() {
        this.elCity.classList.remove("is-valid");
        this.elCity.classList.remove("is-invalid");
        if (this.elCity.value == '') { 
            this.elCity.classList.add("is-invalid") 
        } else {
            if (this.elCity.value > 0) {
                this.elCity.classList.add("is-valid")
            }
        }
    }

    resetState = () => {
        this.elState.innerHTML = "<option value='0' disabled selected>Selecione...</option>"
        this.elState.value = 0
        this.validState();
    }

    resetCity = () => {
        this.elCity.innerHTML = "<option value='0' disabled selected>Selecione...</option>";
        this.elCity.value = 0
        this.validCity();
    }

    sort = (j) => {
        const r = j.sort((a,b) => {
            if (a.name > b.name) {return 1;}
            if (a.name < b.name) {return -1;}
            return 0;
        })
        return r
    }

    fetchState() { 
        const j = this.sort(this.states)    
        this.showState(j)
    }

    fetchCity(state_id) {   
        if (state_id == 0) {
            this.idCity = 0
            this.resetCity()          
        } else {
            const j = this.cities.filter((v) => { return v.state_id == state_id })
            this.showCity(this.sort(j))           
        }              
    }
}


