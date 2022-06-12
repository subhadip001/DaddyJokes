const button = document.querySelector("#btn")
const ul = document.querySelector("#list")
const para = document.querySelector("#para")
const loader = document.querySelector("#loader")
const emoji = document.querySelector("#emoji")



const rotateEmoji = () => {
    emoji.classList.add("emoji")
}
const stopRotate = () => {
    emoji.classList.remove("emoji")
}




const displayLoading = () => {
    loader.classList.add("loading")
    setTimeout(() => {
        loader.classList.remove("loading")
    }, 5000);
}
const hideLoading = () => {
    loader.classList.remove("loading")
}



const createJoke = async () => {
    
    try{
        const config = {headers : {Accept : "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/" , config)
        const joke = res.data.joke;
        return joke;
        
    }
    catch(e){
        return ("Internet Connection Not Available :(")
    }
    
    
}

const addJoke = async (e) => {
    e.preventDefault()
    displayLoading()
    rotateEmoji()
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
    hideLoading()
    stopRotate()


}
button.addEventListener('click' , addJoke)