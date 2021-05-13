import { useState } from 'react';

export default function ShopperInfo({ name, cpf, setName, setCpf }) {
    return (
        <div className="shopper-info">
            <div className="name">
                <label>Nome do Comprador:</label>
                <input
                    value={name}
                    placeholder="Digite seu nome..."
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                ></input>
            </div>
            <div className="cpf">
                <label>CPF do Comprador:</label>
                <input
                    value={cpf}
                    placeholder="Digite seu CPF..."
                    onChange={(e) => {
                        setCpf(e.target.value);
                    }}
                ></input>
            </div>
        </div>
    );
}
