
let $ = document;


const input = $.getElementById('input')

const colors = $.querySelectorAll('.color-box')

const eraserBrn = $.querySelector('.erase')

const addBtn = $.querySelector('.add')

const notesSec = $.querySelector('.notes')

const NotesDiv = $.querySelectorAll('.note')
console.log(NotesDiv);


colors.forEach(function (colorBox) {
    colorBox.addEventListener('click' , function colorChanger(colorbox) {
        let bgColor = event.target.style.backgroundColor 
        input.style.backgroundColor = bgColor
        
    } )
    
})


eraserBrn.addEventListener('click', function reset() {
    input.style.backgroundColor = "white"
    input.value = ''
})



addBtn.addEventListener('click', function task() {
    if (input.value) {
        NewTask()
    }

    input.value = ''
} )


input.addEventListener('keypress' ,function (event) {

    if (event.key === 'Enter') {
        task()
    }
})


function NewTask() {
    let noteDiv = $.createElement('div')
    noteDiv.className = "note"
    noteDiv.style.backgroundColor = input.style.backgroundColor
    noteDiv.addEventListener('dblclick' , function () {
        noteDiv.remove()
    })

    let noteText = $.createElement('p')
    noteText.className = "noteText"

    noteText.innerHTML = input.value


    noteDiv.append(noteText)

    notesSec.append(noteDiv)

}


function task() {
    if (input.value) {
        NewTask()
    }

    input.value = ''
}


