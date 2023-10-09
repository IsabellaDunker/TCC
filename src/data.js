import React, { useState, useEffect} from 'react'
import axios from 'axios';

function Data() {

    const baseUrl = "https://localhost:7092/api/user"

    const [data, setData] = useState([]);

    const index = async() => {
        await axios.get(baseUrl)
        .then(response => {
            setData(response.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        index();
    })

  return (
    <div>
      <table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Email</th>
						<th>Senha</th>
						<th>Papel</th>
					</tr>
				</thead>
				<tbody>
					{data.map(user => (
							<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.password}</td>
									<td>{user.place}</td>
							</tr>
					))}
				</tbody>
			</table>
    </div>
  )
}

export default Data
