'use client';

import { useState, useEffect } from 'react';

interface CardAddProps {
    nomeBtn: string;
}

export default function CardAdd(props: CardAddProps) {
    const [visto, setVisto] = useState(false);
    const [data, setData] = useState<any[]>([]);

    function aparecer() {
        setVisto(!visto);
    }

    async function fetchData() {
        try {
            const response = await fetch('/api/gettest');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Formulário enviado');
        aparecer(); // Fecha o formulário após envio (se necessário)
    }

    const alteracoes = visto ? "absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-40 z-10 flex items-center justify-center" : "hidden";

    return (
        <div className="bg-violet-300 text-center w-full">
            <button onClick={aparecer}>
                {props.nomeBtn}
            </button>
            <form
                className={alteracoes}
                onSubmit={handleSubmit}
            >
                <div className="h-[448px] w-screen max-w-md bg-red-500 z-40 flex flex-col justify-between p-4">
                    <div>
                        <p>Nome da Obra:</p>
                        <input
                            className="p-1 h-12 bg-orange-500"
                            type="text"
                            name="obra"
                            placeholder="texto"
                            required
                        />
                    </div>
                    <div>
                        <p>Descrição:</p>
                        <input
                            className="p-1 h-12 bg-emerald-500"
                            type="text"
                            name="descricao"
                            placeholder="texto"
                            required
                        />
                    </div>
                    <div>
                        {/* Exibir dados obtidos */}
                        {data.map((item, index) => (
                            <div key={index}>{JSON.stringify(item)}</div>
                        ))}
                    </div>
                    <div className="">
                        <button
                            className="p-2"
                            type="button"
                            onClick={aparecer}
                        >
                            Cancelar
                        </button>
                        <button
                            className="p-2"
                            type="submit"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
