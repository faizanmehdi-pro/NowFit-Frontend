import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import { AddClient, ClientsContainer, ShowAddClientForm } from './clientsStyles'
import ClientsTables from './clientsTable'
import { getAllClients } from '../../api/auth/getAllClients'
import { getCommissionClients } from '../../api/getCommisionClients'
import { getCoaches } from '../../api/getCoaches'
import CoachessTables from './cloachesTable'

const Clients = ({setUpdateClientData, setGetClientData, clientLoading, setClientLoading, analytics, analyticsLoading, isAdmin, setAddClientData}) => {
  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        if(isAdmin === "false"){
        const resp = await getCommissionClients();
        setAllClients(resp?.contacts);
        setClientLoading(false);
        }else{
          const resp = await getCoaches();
          setAllClients(resp?.users);
          setClientLoading(false);
        }
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
          isAdmin={isAdmin}
        />
        <AddClient
        onClick={() => {
          setAddClientData(true);
          setUpdateClientData(true);
        }}>
          + Add {isAdmin === "false" ? 'Client' : 'Coach'}
        </AddClient>
        <>
          {isAdmin === "false" ? (
            <ClientsTables allClients={allClients} clientLoading={clientLoading} setClientLoading={setClientLoading} setUpdateClientData={setUpdateClientData} setGetClientData={setGetClientData} isAdmin={isAdmin}/>
            ) : (
            <CoachessTables allClients={allClients} clientLoading={clientLoading} setClientLoading={setClientLoading} setUpdateClientData={setUpdateClientData} setGetClientData={setGetClientData} isAdmin={isAdmin}/>
            )
          }
        </>
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