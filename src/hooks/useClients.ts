import { useEffect, useState } from "react"
import ColectionClient from "../backend/db/ColectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableorForm from "./useTableorForm"

export default function useClients() {
    const repo: ClientRepository = new ColectionClient()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  const { tableVisible, displayTable, displayForm } = useTableorForm()

  useEffect(getClients, [])

  function getClients() {
    repo.get().then(clients => {
      setClients(clients)
      displayTable()
    })
  }

  function clientSelected(client: Client) {
    setClient(client)
    displayForm()
  }

  async function clientExcluded(client: Client) {
    await repo.delete(client)
    getClients()
  }

  function newClient() {
    setClient(Client.empty)
    console.log(displayForm)
    displayForm()
  }

  async function clientToSave(client: Client) {
    await repo.save(client)
    getClients()
  }

  return {
    newClient,
    clientToSave,
    clientExcluded,
    clientSelected,
    getClients,
    client,
    clients,
    displayTable, 
    tableVisible
  }
}