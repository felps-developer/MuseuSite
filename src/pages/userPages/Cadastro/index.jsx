import styled from "styled-components";
import { InputText } from "primereact/inputtext"
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { Controller, useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const CadastroContainer = styled.main``;

const Cadastro = () => {
    const [estadoOptions, setEstadoOptions] = useState([]);
    const [cidadeOptions, setCidadeOptions] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState(null);

    const genero = ["masculino", "feminino", "outros"]

    const { register, handleSubmit, reset, formState: { errors }, control, setValue } = useForm()

    const cadastro = (dados) => {
        console.log(dados)
    }



    // const fetchEstados = async (regionId) => {
    //     const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regionId}/estados`);
    //     const data = await response.json();
    //     return data.map(estado => ({
    //         label: estado.nome,
    //         value: estado.id
    //     }));
    // };




    // Função para buscar os estados
    const fetchEstados = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            const data = await response.json();
            const options = data.map(estado => ({
                label: estado.nome,
                value: estado.id
            }));
            setEstadoOptions(options);
        } catch (error) {
            console.error('Erro ao buscar estados:', error);
        }
    };

    const fetchCidades = async (estadoId) => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            const data = await response.json()
            const options = data.map(cidades => ({
                label: cidades.nome,
                value: cidades.value
            }))
            setCidadeOptions(options)
        } catch (error) {
            console.error('Erro ao buscar estados:', error)
        }
    }

    // Buscar estados ao montar o componente
    useEffect(() => {
        console.log("Selected Estado ID:")
        fetchEstados();

    }, []);

    useEffect(() => {
        
        if (selectedEstado) {
            fetchCidades(selectedEstado);
        }
    }, [selectedEstado]);




    return (
        <>
            <CadastroContainer className="max-h-screen flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit(cadastro)} className="w-3 border-round-lg m-8 surface-100">
                    <h2 className="block font-bold mb-5 text-center">Seja bem-vindo(a) visitante</h2>

                    <label htmlFor="nome" className="block text-sm font-bold uppercase mb-1">Nome do visitante</label>
                    <InputText
                        id="nome"
                        type="text"
                        className="w-full mb-1"
                        {...register("nome", { required: true })}
                        aria-invalid={errors.nome ? true : false}
                        invalid={errors.nome ? true : false}
                    />
                    {
                        errors.nome && (
                            <span className="text-red-500">Campo obrigatório</span>
                        )
                    }
                    <label htmlFor="cpf" className="block text-sm font-bold uppercase mb-1">Cpf</label>
                    <InputMask
                        id="cpf"
                        type="number"
                        mask="999.999.999-99"
                        placeholder="999.999.999-99"
                        className="w-full mb-1"
                        {...register("cpf", { required: true })}
                        aria-invalid={errors.cpf ? true : false}
                        invalid={errors.cpf ? true : false}
                    />
                    {
                        errors.cpf && (
                            <span className="text-red-500">Campo obrigatório</span>
                        )
                    }


                    <label htmlFor="profissao" className="block text-sm font-bold uppercase mb-1">Profissão</label>
                    <InputText
                        id="profissao"
                        type="text"
                        className="w-full mb-2"
                        {...register("profissao", { required: true })}
                        aria-invalid={errors.profissao ? true : false}
                        invalid={errors.profissao ? true : false}
                    />
                    {
                        errors.profissao && (
                            <span className="text-red-500">Campo obrigatório</span>
                        )
                    }

                    <div className="flex align-items-center mb-2">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="gener" className="text-sm font-bold uppercase ">Gênero</label>
                            <Controller
                                name="gener"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Dropdown
                                        id="gener"
                                        {...field}
                                        {...register("gener", { required: true })}
                                        aria-invalid={errors.gener ? true : false}
                                        invalid={errors.gener ? true : false}
                                        placeholder="Selecione seu Gênero"
                                        className="md:w-15rem"
                                        options={genero.map(g => ({ label: g, value: g }))}
                                        onChange={(e) => field.onChange(e.value)}
                                    />
                                )}
                            />
                            {
                                errors.gener && (
                                    <span className="text-red-500">Campo obrigatório</span>
                                )
                            }

                        </div>
                        <div className="flex flex-column gap-2">
                            <label htmlFor="idade" className="text-sm font-bold uppercase ">Idade</label>
                            <InputText
                                id="idade"
                                type="number"
                                className="w-full "
                                {...register("idade", { required: true })}
                                aria-invalid={errors.idade ? true : false}
                                invalid={errors.idade ? true : false}
                            />
                            {
                                errors.idade && (
                                    <span className="text-red-500">Campo obrigatório</span>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex align-items-center mb-3">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="estado" className="text-sm font-bold uppercase ">Estado</label>
                            <Controller
                                name="estado"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Dropdown
                                        id="estado"

                                        {...field}
                                        {...register("estado", { required: true })}
                                        aria-invalid={errors.estado ? true : false}
                                        invalid={errors.estado ? true : false}
                                        placeholder="Selecione seu Estado"
                                        className="md:w-15rem"
                                        options={estadoOptions}
                                        value={selectedEstado}
                                        onChange={(e) => {
                                            const estadoId = e.value;
                                            setSelectedEstado(estadoId);
                                            setValue('estado', estadoId);
                                            setValue('cidade', null)
                                        }}
                                    />
                                )}
                            />
                            {
                                errors.estado && (
                                    <span className="text-red-500">Campo obrigatório</span>
                                )
                            }
                        </div>
                        <div htmlFor="cidade" className="flex flex-column gap-2">
                            <label className="text-sm font-bold uppercase ">Cidade</label>
                            <Controller
                                name="cidade"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Dropdown
                                        id="cidade"

                                        {...field}
                                        {...register("cidade", { required: true })}
                                        aria-invalid={errors.cidade ? true : false}
                                        invalid={errors.cidade ? true : false}
                                        placeholder="Selecione sua Cidade"
                                        className="md:w-15rem"
                                        options={cidadeOptions}
                                        value={field.value}
                                        onChange={(e) => {
                                            field.onChange(e.value);

                                        }}
                                    />
                                )}
                            />
                            {
                                errors.cidade && (
                                    <span className="text-red-500">Campo obrigatório</span>
                                )
                            }
                        </div>
                    </div>
                    <Button
                        label="Cadastrar"
                        type="submit"
                        className="w-full"
                    />
                </form>

            </CadastroContainer>
        </>
    );
}

export default Cadastro;