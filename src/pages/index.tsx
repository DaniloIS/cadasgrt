
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import useClients from '../hooks/useClients';

export default function Home() {

  const { clientToSave, newClient, clientExcluded, clientSelected, client, clients, tableVisible, displayTable } = useClients()

  return (
    <div className={`
      flex 
      h-screen 
      justify-center 
      items-center 
      bg-gradient-to-r to-blue-500 from-purple-500 
      text-white
    `}>
      <Layout title='Cadastro Simples'>
        {tableVisible ? (
          <>
            <div className='flex justify-end'>
              <Button color='green' className='mb-4' onClick={newClient}>Novo Cliente</Button>
            </div>
            <Table 
              clients={clients} 
              clientSelected={clientSelected} 
              clientExcluded={clientExcluded} 
            />
          </>
        ) : (
          <Form client={client} onChangeClient={clientToSave} cancel={() => displayTable} />
        )}
        
      </Layout>
    </div>
  )
}
