// const controller = require("../server/controller")

const pickBtn = document.getElementById("pickBtn")
const optionsBtn = document.getElementById("optionsBtn")
const deleteBTN = document.querySelector(".delete")
const optionContainer = document.querySelector('#option-container')
const listContainer = document.querySelector('#list-container')
const form = document.querySelector('form')
const userInput = document.querySelector('#addOpt')
const addBtn = document.querySelector('#addBtn')
// const saveBtn = document.querySelector(".save")
const option = document.getElementById("tonight")
const listBtn = document.getElementById("listBtn")
// const { userDB } = require('../server/controller')

form.style.display = "none";

const getOption = () => {
    axios.get("http://localhost:4000/api/option/")
        .then(res => {
            const data = res.data;
            // console.log(data);
            displayOption(data)

    });
};

pickBtn.addEventListener('click', getOption)


const createDisplay = (list) => {
    let newList = list.map((x,i) => `<div class="disp"><p id='${i}' class = 'text'>${x}</p> <p class="delete" onclick="deleteOption(${i})">Delete</p></div>`)
    console.log(newList)
    optionContainer.innerHTML = ""
    optionContainer.innerHTML = newList.join('')
    
}

const displayOption = (food) => {
    let display =  `<span id='food' class = 'text'>${food}</span> <button class="save" onclick="saveOption(food.innerHTML)">Save</button>`
    option.innerHTML = ""
    option.innerHTML = display
}

const createDisplay2 = (list) => {
    let newList = list.map((x,i) => `<div class="disp"><p id='${i}' class = 'text'>${x}</p> <p class="delete" onclick="deleteListItem(${i})">Delete</p></div>`)
    console.log(newList)
    listContainer.innerHTML = ""
    listContainer.innerHTML = newList.join('')
}

const addOption = () => {
    const userValue = userInput.value;
    // console.log(userValue);
    axios.post("http://localhost:4000/api/option/", {userValue})
    .then
        alert('New option added!')
        createDisplay(data)

}

addBtn.addEventListener('click', addOption)



const deleteOption = id => {
    axios.delete(`http://localhost:4000/api/option/${id}`)
    .then (res => {
        alert('Option deleted!');
        createDisplay(res.data)
    })
}

// deleteBTN.addEventListener('click', deleteFortune)

const saveOption = id => {
    axios.put(`http://localhost:4000/api/option/${id}`)
        .then(res => {
            // createDisplay(res.data)
            // console.log(res.data)
            alert(`${res.data} has been saved!`);
                  
        
    });
};

// saveBtn.addEventListener('click', saveOption)


const getAllOptions = () => {
    axios.get("http://localhost:4000/api/options/")
        .then(res => {
            let data = res.data;
            if (optionsBtn.className == "show") {
                createDisplay(data)
                form.style.display = "block";
                optionsBtn.className = "";
            } else {
                optionContainer.innerHTML = ""
                optionsBtn.className = "show";
                form.style.display = "none";
            }

        
    });
};

optionsBtn.addEventListener('click', getAllOptions)

const getList = () => {
    axios.get("http://localhost:4000/api/list/")
        .then(res => {
            let data = res.data;
            if (listBtn.className == "show") {
                createDisplay2(data)
                listBtn.className = "";
            } else {
                listContainer.innerHTML = ""
                listBtn.className = "show";
            }
                        
    });
};

listBtn.addEventListener('click', getList)

const deleteListItem = id => {
    axios.delete(`http://localhost:4000/api/list/${id}`)
    .then (res => {
        alert('Item deleted!');
        createDisplay2(res.data)
    })
}

const getDinners = () => {
    axios.get("http://localhost:4000/api/dinners/")
        .then(res => {
            const data = res;
            // userDB.push(...data)
            console.log(data);

    });

    
};




getDinners()