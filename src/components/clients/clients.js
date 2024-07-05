import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import { AddClient, ClientsContainer, ShowAddClientForm } from './clientsStyles'
import ClientsTables from './clientsTable'
import { getAllClients } from '../../api/auth/getAllClients'

const Clients = ({setUpdateClientData, setGetClientData, clientLoading, setClientLoading, analytics, analyticsLoading, isAdmin, setAddClientData}) => {
  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const resp = await getAllClients();
        setAllClients(resp?.users);
        setClientLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchClients();
  }, [clientLoading]); 

  return (
    <>
    <ClientsContainer>
        <Cards 
          analytics={analytics}
          analyticsLoading={analyticsLoading}
        />
        <AddClient
        onClick={() => {
          setAddClientData(true);
          setUpdateClientData(true);
        }}>
          + add {isAdmin === "true" ? 'Client' : 'Coach'}
        </AddClient>
        <ClientsTables allClients={allClients} clientLoading={clientLoading} setClientLoading={setClientLoading} setUpdateClientData={setUpdateClientData} setGetClientData={setGetClientData} isAdmin={isAdmin}/>
    </ClientsContainer>
    </>
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