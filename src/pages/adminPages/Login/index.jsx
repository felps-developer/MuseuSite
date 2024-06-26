import styled from "styled-components";
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";
import { useEffect } from "react";


const LoginContainer = styled.main``;

const Login = () => {

    useEffect(() => {
        // Remover as rolagens do body quando o componente montar
        document.body.style.overflow = 'hidden';

        // Limpar o estilo quando o componente desmontar
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const login = (dados) => {
        console.log(dados)
    }
    return (
        <>
            <LoginContainer className="surface-100 flex justify-content-center align-items-center ">
                <form onSubmit={handleSubmit(login)} className="w-3 surface-100 border-round-lg ">
                    <h2 className="text-center mb-4">Login</h2>  
                    <label htmlFor="email" className="block text-sm font-bold uppercase mb-1">Email</label>
                    <div className="mb-3">
                        <InputText
                            id="email"
                            type="email"
                            placeholder="email@gmail.com"
                            className="w-full mb-3"
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? true : false}
                            invalid={errors.email ? true : false}
                        />
                        {
                            errors.email && (
                                <span className="text-red-500">Campo obrigatório</span>
                            )
                        }
                    </div>
                    <label htmlFor="password" className="block text-sm font-bold uppercase mb-1">Password</label>
                    <div className="mb-3">


                        <InputText
                            id="password"
                            type="password"
                            placeholder="**********"
                            className="w-full mb-3"
                            // toggleMask
                            // feedback={false}
                            // panelStyle={{ width: '100%' }}
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? true : false}
                            invalid={errors.password ? true : false}

                        />
                        {
                            errors.password && (
                                <span className="text-red-500">Campo obrigatório</span>
                            )
                        }
                    </div>
                    <Button
                        label="Entrar"
                        type="submit"
                        className="w-full"
                    />
                </form>
            </LoginContainer>
        </>
    );
}

export default Login;