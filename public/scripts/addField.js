document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');
    
    fields.forEach(function(fields){
        fields.value = "";
    })
    
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}