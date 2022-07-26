import React, { useEffect, useState } from "react";
import { getI18n } from "react-i18next";
import { Button } from "../../components/Button";
import { PasswordInput } from "../../components/PasswordInput";
import { ProgressBar } from "../../components/ProgressBar";
import { TextInput } from "../../components/TextInput";
import * as Component from "./styles";

type decimal = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;

export function SignUp(){

        const [username, setUsername] = useState<string>("");
        const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
        const [confirmPassword, setConfirmPassword] = useState<string>("");

        const [step, setStep] = useState<1|2|3>(1);

        function getProgress(){
            
            const progress = new Array<boolean>();
            if(username) { progress.push(true)};
            if(email) { progress.push(true)};
            if(password) { progress.push(true)};
            if(confirmPassword) { progress.push(true)};

            if(progress.length === 1){
                return 0.25
            }else if( progress.length === 2){
                return 0.50
            }else if(progress.length === 3){
                return 0.75
            }else if(progress.length === 4){
                return 1.0
            }else if(progress.length === 0){
                return 0
            }
        }

        function registerUser(){
            //chamada api

            setEmail("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");

            setStep(1);
        }

        function backStep1(){
            setPassword("");
            setConfirmPassword("");
            setStep(2);
        }

        useEffect(()=>{
            if(username && email.length>5){
                setStep(2);
            }
        }, [username, email])
    return (
        <Component.Container>

           

            <Component.HalfContainer>
                <Component.Title>
                    Faça seu registro.
                </Component.Title>
                <Component.Description>
                    É rápido, simples e fácil!
                </Component.Description>

                <Component.ProgressContainer>
                    <ProgressBar 
                        width={300}
                        visible={true}
                        loading={getProgress()} 
                    />    
                </Component.ProgressContainer>

            

                 

                <Component.Form>

                    {step !== 3 && (
                    <>
                    <Component.Label> Coloque o nome de usuário: </Component.Label>
                    <TextInput 
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Nome de usuário:"
                    />
                    <Component.Label> Coloque o email: </Component.Label>
                    <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="E-mail:"
                    />
                    </>
                    )}

                    {step === 3 && (
                        <>
                    <Component.Label> Coloque a senha: </Component.Label>
                    <PasswordInput 
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha:"
                    />
                    <Component.Label> Confirme sua senha: </Component.Label>
                    <PasswordInput 
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirme sua senha:"
                    />
                        </>
                    )}

                   


                   <Component.ButtonContainer>

                        {step!==3 && (
                        <Button
                        disable={step===1}
                        secondary
                        title="Continuar"
                        onPress={()=>{setStep(3)}}
                        />
                        )}

                        {step===3 && (
                            <>
                        <Button
                        secondary
                        title="Passo 1"
                        onPress={()=>{backStep1()}}
                        />
                        <Button
                        disable={getProgress()!==1.0}
                        title="Registrar"
                        onPress={()=>{registerUser()}}
                        />
                        </>
                        )}
                   </Component.ButtonContainer>
                </Component.Form>
                
            </Component.HalfContainer>
        </Component.Container>
    )
}