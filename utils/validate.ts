import { User } from "../types/User";

// TIPO OBJ PARA ARMAZENAR VALIDAÇÃO DE ERROS

type Error = {
    [key: string] : string 
}


// FUNÇÃO QUE VERIFICA SE HÁ ERRO NOS DADOS CADASTRADOS
export const validate = (data:User) =>{
    const errors: Error= {};
    if(!data.name){
        errors['name'] = 'o nome é obrigatório'
    }
    if(!data.email){
        errors['email'] = 'o e-mail é obrigatório'
    }
    if(!data.agree){
        errors['agree'] = 'Você precisa concordar com os termos'
    }
    return errors
}