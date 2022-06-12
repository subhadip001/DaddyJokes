const button = document.querySelector("#btn")
const ul = document.querySelector("#list")
const para = document.querySelector("#para")


const createJoke = async () => {
    try{
        const config = {headers : {Accept : "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/" , config)
        const joke = res.data.joke;
        return joke;
    }
    catch(e){
        return ("SORRY NO JOKES AVAILABLE AT THIS MOMENT :(")
    }
    
}

const addJoke = async (e) => {
    e.preventDefault()
    const newJoke = await createJoke()
    // const newLI = document.createElement('li');
    // newLI.append(newJoke)
    // ul.append(newLI)
    para.style.backgroundColor = "rgb(248, 238, 255)";
    para.innerHTML = newJoke;
    // setTimeout(() => {
    //     para.innerHTML = "";
    //     para.style.backgroundColor = ""
    // }, 10000);
}
button.addEventListener('click' , addJoke)