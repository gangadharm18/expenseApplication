
const api = '/expense';

let table = document.querySelector('#table')

function handleFormSubmit(event) {
    event.preventDefault();

    const type = event.target.type.value;
    const amount = event.target.amount.value;
    const category = event.target.category.value;
    const description = event.target.description.value;

    if (!amount ||
        !description
    ) {
        alert("fill all ");
        return;
    }

    const expdetails = {

        type,
        amount,
        category,
        description
    }

    axios.post(`${api}/addexpense`, expdetails).then((res) => {
        alert("success")

        const expenses = res.data;

        let row = document.createElement('tr');
        row.innerHTML = `<td>${expenses.category}</td>
            <td>${expenses.amount}</td>
            <td>${expenses.type}</td>
            <td>${expenses.description}</td>
            <td><button id="delete">delete</button></td>`

        table.appendChild(row)
        let deleteBtn = row.querySelector('#delete');
        deleteBtn.addEventListener('click', () => {
            axios.delete(`${api}/${expenses.id}`).then(()=>{
               row.remove(); 
            }).catch(err=>{
                console.error(err);
                
            })
           
        });
    })
}
//

