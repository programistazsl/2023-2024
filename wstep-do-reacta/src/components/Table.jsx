const TableRow= ({id,firstName,secondName,age}) =>{
        return (
            <tr>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{secondName}</td>
                <td>{age}</td>
                <td>{age>=18 ? "True" : "False"}</td>
            </tr>)}

function Table({data}){
    return (
    <table>
        <thead>
        <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>age>18</th>
        </tr>
        </thead>
        <tbody>
        {data.map((row)=><TableRow {...row} firstName={"Arek"}/>)}
        </tbody>
    </table>
    )
}
export default Table;