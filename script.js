class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        let newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((act) => act.id !== id)
    }
}
const repo = new Repository();

function createHtmlElement(activity){
    const {id, title, description, imgUrl} = activity;
    const titulo = document.createElement("h3")
    const parra = document.createElement("p")
    const imagen = document.createElement("img")
    titulo.innerHTML = title
    parra.innerHTML = description
    imagen.setAttribute("src",imgUrl)
    titulo.setAttribute("class","title")
    parra.setAttribute("class","description")
    imagen.setAttribute("class","img")
    const div = document.createElement("div")
    div.append(titulo, parra, imagen)
    div.setAttribute("class","card")
    div.setAttribute("id",id)
    return div
}

function convertActivities(){
    const container = document.getElementById("container")
    container.innerHTML = ""
    const activities = repo.getAllActivities();
    const convertedActivities = activities.map( (act) => createHtmlElement(act) )
    convertedActivities.forEach(element => {
        container.appendChild(element)
    })
}

function handleSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const imgUrl = document.getElementById("imgUrl");

    if (title.value === "" || description.value === "" || imgUrl.value === "") {
        alert("Completa todos los datos");
        return;
    }
    repo.createActivity(Date.now().toString(), title.value, description.value, imgUrl.value);
    convertActivities();
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);





















