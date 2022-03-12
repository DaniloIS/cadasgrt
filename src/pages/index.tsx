import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carol', 23, '3'),
    new Client('Pedro', 34, '4'),
    new Client('Danilo', 23, '5'),
    new Client('Diego', 25, '6')
  ]

  function clientSelected(client: Client) {

  }

  function clientExcluded(client: Client) {

  }

  function clientToSave(client: Client) {

  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

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
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button color='green' className='mb-4' onClick={() => setVisible('form')}>Novo Cliente</Button>
            </div>
            <Table 
              clients={clients} 
              clientSelected={clientSelected} 
              clientExcluded={clientExcluded} 
            />
          </>
        ) : (
          <Form client={clients[0]} cancel={() => setVisible('table')} />
        )}
        
      </Layout>
    </div>
  )
}
