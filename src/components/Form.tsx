import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    onChangeClient?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {

    const id = props.client?.id ?? null

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input label='Código' type='text' value={id} readOnly className='mb-4' />
            ) : false}

            <Input label='Nome' type='text' value={name} onChange={setName} className='mb-4' />

            <Input label='Idade' type='number' value={age} onChange={setAge} />

            <div className='flex justify-end mt-7'>
                
                <Button color='blue' className='mr-2'
                    onClick={() => props.onChangeClient?.(new Client(name, age, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>

            </div>
        </div>
    )
}