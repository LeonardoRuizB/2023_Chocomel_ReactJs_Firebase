import React from "react";
import AddProductForm from "./AddProduct";

export default function ControlPanel() {

    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        window.location.href = '/login';
    };

    return (
        <>
            <title>Chocomel | Painel de Controle</title>

            <AddProductForm />
            
            <div>
                <h2>Painel de Controle</h2>
                <button onClick={handleLogout}>Sair</button>
            </div>


        </>
    );
}