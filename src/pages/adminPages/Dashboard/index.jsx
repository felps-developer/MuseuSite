import styled from "styled-components";
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Chart } from 'primereact/chart';
import GraficoVisitanteTotal from "../../../components/graficos/graficoVisitanteTotal";
import GraficoVisitanteEstados from "../../../components/graficos/graficoVisitanteEstados";
import GraficoVisitanteCidades from "../../../components/graficos/numeroVisitanteCidade";
import GraficoVisitanteGenero from "../../../components/graficos/numeroPorGenero";
        

const DashContainer = styled.main`
// height: calc(100vh - 70px);
// padding: 26px 100px;
overflow: auto;
// & .grafico{
//     gap: 26px;
//     & .graficos{
//         padding: 16px;
//         &:nth-child(odd){
//             width: calc(100% - 276px);
//         }
//         &:nth-child(even){
//             width: 250px;
//             // height: 250px;
//         }    
//     }
// }
`;

const Dashboard = () => {
    
    return (
        <>
            <DashContainer className="surface-100 h-30 w-30 p-6">
                <h1 className="flex justify-content-end mb-4">
                    <Button
                        label="Baixar PDF"
                        className=""
                    />
                </h1>
                <div className="grafico flex flex-wrap gap-5 justify-content-center">
                    <div className="graficos surface-200 border-round-lg p-4 w-5 ">
                        <h6 className="text-sm font-bold m-0 mb-5 text-400 uppercase">Total de visitas por mês</h6>
                        <GraficoVisitanteTotal/>
                    </div>
                    <div className="graficos surface-200  border-round-lg p-4 w-5 ">
                        <h6 className="text-sm font-bold m-0 mb-5 text-400 uppercase">Número de visitantes por cidade</h6>
                        <GraficoVisitanteCidades/>
                    </div>
                    <div className="graficos surface-200  border-round-lg p-4 w-5 ">
                        <h6 className="text-sm font-bold m-0 mb-5 text-400 uppercase">Estados com mais visitantes</h6>
                        <GraficoVisitanteEstados/>
                    </div>
                    <div className="graficos surface-200 border-round-lg p-4 w-5 ">
                        <h6 className="text-sm font-bold m-0 mb-5 text-400 uppercase">Visitantes por gênero</h6>
                        <GraficoVisitanteGenero />
                    </div>
                </div>

            </DashContainer>
        </>
    );
}

export default Dashboard
