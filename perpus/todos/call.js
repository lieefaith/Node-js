


const {todos,storeTodo,updateById,deleteById,questionDataWithValidation } = require('./todos')
const update = require('./updateTodos')


const mainMenu = async () => {
    let running = true;
    

    while (running) {
        console.log("\nTodo Application");
        console.log("1. Display Todos");
        console.log("2. Add a Todo");
        console.log("3. Update a Todo");
        console.log("4. Delete a Todo");
        console.log("5. Exit");

        const choice = await questionDataWithValidation('Enter your choice: ');

        switch (choice) {
            case '1':
                todos();
                break;
            case '2':
                await storeTodo();
                break;
            case '3':
    
                // Implement getUpdateData to collect necessary data for update
                const updateData = await update();
                updateById(updateData);
                break;
            case '4':
                const deleteId = await questionDataWithValidation('Enter ID of Todo to delete: ');
                deleteById(deleteId);
                break;
            case '5':
            case 'exit':
            case 'EXIT' : 

                running = false;
                break;
            default:
                console.log('Invalid choice, please try again.');
        }

        await new Promise(resolve => setTimeout(resolve, 500));
    }

    process.exit(); // Close readline here, after the loop ends
};

mainMenu()