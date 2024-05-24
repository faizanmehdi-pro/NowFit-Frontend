import React from 'react'
import Cards from '../Cards/Cards'
import { AddClient, ClientsContainer } from './clientsStyles'
import ClientsTables from './clientsTable'

const Clients = () => {
  return (
    <ClientsContainer>
        <Cards />
        {/* <AddClient>+ Add Client</AddClient> */}
        <ClientsTables />
    </ClientsContainer>
  )
}

export default Clients

// import React, {useState} from 'react'
// import Cards from '../Cards/Cards'
// import { AddClient, ClientsContainer, ShowAddClientForm } from './clientsStyles'
// import ClientsTables from './clientsTable'

// const Clients = () => {
//   const [showAddClientForm, setShowAddClientForm] = useState(false)
//   return (
//     <>
//       <ClientsContainer showAddClientForm={showAddClientForm}>
//         <Cards />
//         <AddClient onClick={() => setShowAddClientForm(true)}>
//           + Add Client
//         </AddClient>
//         <ClientsTables />
//       </ClientsContainer>
//     <ShowAddClientForm showAddClientForm={showAddClientForm}>
//       <AddClient onClick={() => setShowAddClientForm(false)}>
//         Client
//       </AddClient>
//     </ShowAddClientForm>
//   </>
//   )
// }

// export default Clients