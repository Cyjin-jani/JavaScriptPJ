// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let PendingList = [];
let finishedList = [];

const delPending = (id) => {
    //console.log("pdIndex", pdIndex);
    let elem = document.querySelector(`.pdI${id}`);
    elem.parentNode.removeChild(elem);
    //remove From localStorage
    removeLS("PENDING", id);
}

const endPending = (keyword, id) => {
    //remove From Pending
    delPending(id);
    //remove From localStorage
    removeLS("PENDING", id);
    //add To Finished
    addToFinished(keyword, id);

}

const delFinished = (id) => {

    //remove from Display
    let elem = document.querySelector(`.endI${id}`);
    elem.parentNode.removeChild(elem);

    //remove from localStorage
    removeLS("FINISHED", id);
}

const backPending = (id, keyword) => {

    //remove from Finished Display and LS
    delFinished(id)

    //add to Pending Display and LS
    addToPending(id, keyword)

}

const removeLS = (type, id) => {
    const localData = JSON.parse(localStorage.getItem(type));
    
    for (let i = 0; i < localData.length; i++) {
        if(id === localData[i].id) {
            localData.splice(i, 1); //for localStorage
            if (type === "PENDING") {
                PendingList.splice(i, 1); //for array data
            } else {
                finishedList.splice(i, 1);
            }
        }
    }
    localStorage.setItem(type, JSON.stringify(localData));
}

const addToFinished = (keyword, id) => {
    
    const finishList = document.querySelector('.done');
    finishList.innerHTML += `<li class="endI${id}">${keyword} <button onClick="delFinished(${id})"> DEL </button> <button onClick="backPending(${id}, '${keyword}')"> BACK </button> </li>`;
    
    //add to array
    finishedList.push({id: id, text: keyword});

    //add to LS
    localStorage.setItem("FINISHED", JSON.stringify(finishedList));

}

const addToPending = (id, keyword) => {
    
    const list = document.querySelector('.toDo');
    let localData = {
        id: Math.floor(Math.random()*Date.now()),
        text: keyword,
    }
    
    if(id) {
        localData.id = id;
    }

    list.innerHTML += `<li class="pdI${localData.id}">${keyword} <button onClick="delPending(${localData.id})"> DEL </button> <button onClick="endPending('${keyword}', ${localData.id})"> DONE </button> </li>`;
    
    PendingList.push(localData);
    
    //save at localstorage
    localStorage.setItem('PENDING', JSON.stringify(PendingList));
    

    //clean input text
    document.querySelector('input').value = "";
}

const addTask = () => {
    if(window.event.keyCode === 13){
        const keyword = document.querySelector('input').value;
        addToPending(id = 0, keyword);
    }
}


function init() {
    const pendingDatas = JSON.parse(localStorage.getItem('PENDING'));
    const finishedDatas = JSON.parse(localStorage.getItem('FINISHED'));

    if(pendingDatas) {
        pendingDatas.map((data) => {
            addToPending(data.id, data.text);
        })
    }
    if(finishedDatas) {
        finishedDatas.map((item) => {
            addToFinished(item.text, item.id);
        })
    }
}

init();