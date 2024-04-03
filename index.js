const addTodoInput = undefined /* 1 Remove undefined and write the code to locate add-todo-input-field*/
const addTodoButton = undefined /* 2 Remove undefined and write the code to locate add-todo-input-button*/

addTodoButton.addEventListener('click', () => {
    if (addTodoInput.value?.length) {
        // 3
        // Write code for question 3 below

        /*
        * IMPLEMENT THE LOGIC FOR ADDING TODOS
        * Utilise this below template to speed up the process
        *
        * <div class="task incomplete">
            <span class="task-checkbox"></span>
            <p class="task-name">${addTodoInput.value}</p>
        </div>
        * */

        // Write code for question 3 above
        addTodoInput.value = ''
        addsTodoEventListener()
    }
})

const addsTodoEventListener = () => {
    // 4
    // Write code for question 4 below
    /*
    * IMPLEMENT THE LOGIC FOR REMOVING TODOS
    * */

    // Write code for question 4 above

}
