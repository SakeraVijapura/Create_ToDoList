const elementInput = document.getElementById("input");
// const textI = document.getElementById("textI");
// const textII = document.getElementById("textII");
// const textIII = document.getElementById("textIII");
// const displayGroupI = document.getElementById("displayGroupI");
// const displayGroupII = document.getElementById("displayGroupII");
// const displayGroupIII = document.getElementById("displayGroupIII");
const wrapper = document.getElementById("wrapper");
const noDataFound = document.getElementById("data");


function addText() {

    if (elementInput.value && elementInput.value != "") {
        noDataFound.style.display = 'none';
        wrapper.style.display = 'block';

        const parentDiv = document.createElement('div');
        parentDiv.className = 'list-item';

        const deleteIcon = document.createElement('img');
        deleteIcon.src = './deletecon.svg';
        deleteIcon.className = 'trash';
        deleteIcon.addEventListener('click', function () {
            deleteItem(parentDiv, wrapper)
        });

        const text = document.createElement('p');
        text.className = 'text';

        wrapper.appendChild(parentDiv);
        parentDiv.appendChild(deleteIcon);
        parentDiv.appendChild(text);

        text.innerHTML = elementInput.value;

    }

    else {
        window.alert("Please enter some words...");
    }
}


function deleteItem(parentDiv, wrapper) {


    parentDiv.remove();

    if (wrapper.children.length == 0) {
        noDataFound.style.display = 'block';
    }
}

