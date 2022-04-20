const charactersAPI = new APIHandler()


window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', function(event) {
        let text = ""


        charactersAPI
            .getFullList()
            .then(({ data }) => {
                data.forEach(elm => {
                    text += "<div class='character-info'>"
                    text += "<div class='name'>" + elm.name + "</div>"
                    text += "<div class='occupation'>" + elm.occupation + "</div>"
                    text += "<div class='cartoon'>" + elm.cartoon + "</div>"
                    text += "<div class='weapon'>" + elm.weapon + "</div>"
                    text += "</div>"
                    document.querySelector('.characters-container').innerHTML = text

                });

            })
            .catch(err => console.log(err, 'no existe'))
    });

    document.getElementById('fetch-one').addEventListener('click', function(event) {

        const myValue = document.querySelector("div.operation input[name='character-id']").value
        charactersAPI
            .getOneRegister(myValue)
            .then(({ data }) => {
                document.querySelector(".name").innerHTML = data.name
                document.querySelector(".occupation").innerHTML = data.occupation
                document.querySelector(".cartoon").innerHTML = data.cartoon
                document.querySelector(".weapon").innerHTML = data.weapon
            })
            .catch(err => console.log(err, 'no existe'))
    });

    document.getElementById('delete-one').addEventListener('click', function(event) {

        const del = document.querySelector("div.operation.delete input[name='character-id-delete']").value

        charactersAPI
            .deleteOneRegister(del)
    });

    document.getElementById('edit-character-form').addEventListener('submit', function(event) {
        event.preventDefault()
        const idInfo = document.querySelector("#edit-character-form div.field input[name='chr-id']").value
        const nameInfo = document.querySelector("#edit-character-form div.field input[name='name']").value
        const occupationInfo = document.querySelector("#edit-character-form div.field input[name='occupation']").value
        const weaponInfo = document.querySelector("#edit-character-form div.field input[name='weapon']").value
        const cartoonInfo = document.querySelector("#edit-character-form div.field input[name='cartoon']").checked
        info = {
            id: idInfo,
            name: nameInfo,
            occupation: occupationInfo,
            weapon: weaponInfo,
            cartoon: cartoonInfo
        }
        console.log(info)
        charactersAPI
            .updateOneRegister(info)
    });

    document.getElementById('new-character-form').addEventListener('submit', function(event) {
        event.preventDefault()

        const nameInfo = document.querySelector("#new-character-form div.field input[name='name']").value
        const occupationInfo = document.querySelector("#new-character-form div.field input[name='occupation']").value
        const weaponInfo = document.querySelector("#new-character-form div.field input[name='weapon']").value
        const cartoonInfo = document.querySelector("#new-character-form div.field input[name='cartoon']").checked

        info = {
            name: nameInfo,
            occupation: occupationInfo,
            weapon: weaponInfo,
            cartoon: cartoonInfo
        }
        console.log(info)

        charactersAPI
            .createOneRegister(info)
    });
});