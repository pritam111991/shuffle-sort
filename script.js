(() => {
    let container = document.getElementById("main");
    const shuffle = () => {
        const elementsArray = getElementsAsList();
        removeChildren(elementsArray);
        shuffleList(elementsArray);
        addChildren(elementsArray);
    }

    const createChildren = (num) => {
        for (let i = 1; i <= num; i++) {
            const elem = document.createElement('div');
            elem.setAttribute('id', i);
            elem.setAttribute('class', 'shuffleMe' + ' color' + i);
            elem.innerText = i;
            container.appendChild(elem);
        }
    }

    const sort = () => {
        const elementsArray = getElementsAsList();
        removeChildren(elementsArray);
        elementsArray.sort((a, b) => { return a.id - b.id });
        addChildren(elementsArray);
    }

    const getElementsAsList = () => {
        const items = container.getElementsByClassName('shuffleMe')
        const elementsArray = Array.prototype.slice.call(items);
        return elementsArray;
    }
    const removeChildren = (elementsArray) => {
        elementsArray.forEach((element) => {
            container.removeChild(element);
        });
    }

    const addChildren = (elementsArray) => {
        elementsArray.forEach((element) => {
            container.appendChild(element);
        });
    }

    const shuffleList = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    document.onload = () => { createChildren(9) };

    document.onload();

    const shuffleBtn = document.querySelector("#shufflebtn");
    shuffleBtn.addEventListener('click', () => {
        shuffle();
    });
    const sortBtn = document.querySelector("#sortbtn");
    sortBtn.addEventListener('click', () => {
        sort();
    });
})()


