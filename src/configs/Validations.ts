import { Utils } from "./Utils";

export class Validations {

    static validateRequiredField = (field: string | number, nameField: string) => {

        if(!field || field === undefined || field == null) {
            return `O campo ${nameField} deve ser preenchido!\n`;
        }

        return '';
    }

    static validateNumberMoreThanZero = (field: number, nameField: string) => {

        if(!field || field === undefined || field == null || field <= 0) {
            return `O campo ${nameField} deve ser preenchido e maior que 0!\n`;
        }

        return '';
    }

    static validateUsername = (username: string) => {

        var error = '';

        if(!username || username === undefined || username == null) {
            error += 'O e-mail/username deve ser preenchido!\n';
        }

        return error;
    }

    static validatePassword = (password: string) => {

        var error = '';

        if(!password || password === undefined || password == null) {
            error += 'A senha deve ser preenchida!\n';
        }

        if(password?.length < 8) {
            error += 'A senha deve ter mais de 8 caracteres!\n';
        }

        return error;
    }

    static validateCpf = (cpf: string | undefined | null) => {

        if(!cpf || cpf === undefined || cpf === '')
        {
            return `O campo CPF deve ser preenchido!\n`;
        }
        else if(Utils.removeDiacritics(cpf).length !== 11)
        {
            return `O campo CPF não está preenchido corretamente! (Obs: 000.000.000-00)`;
        }
        else if(!Utils.isValidCPF(cpf))
        {
            return `O campo CPF não é válido`;
        }

        return '';
    }

    static validateBirthday = (birthday: string) => {

        if(!birthday)
        {
            return 'Data de nascimento deve ser preenchida!';
        }

        var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var regexVarTest = regexVar.test(birthday);

        var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1"));
        var todayYear = (new Date()).getFullYear();

        var cutOff16 = new Date();
        cutOff16.setFullYear(todayYear - 16);

        var cutOff100 = new Date();
        cutOff100.setFullYear(todayYear - 100);

        if (!regexVarTest)
        {
            return "Digite uma data de nascimento no formato dd/mm/yyyy!";
        }
        else if (userBirthDate > cutOff16) {
            return "Você precisa ter mais de 16 anos!";
        }
        else if (userBirthDate < cutOff100) {
            return "Você precisa ter menos de 100 anos!";
        }

        return '';
    }

    static validateNumberPhone = (numberPhone: string) => {

        if(!numberPhone)
        {
            return 'Telefone deve ser preenchido!';
        }
        else if(!numberPhone.match(/^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/))
        {
            return 'Digite um telefone no formato (00)00000-0000';
        }

        return '';
    }

    static validateEmail = (email: string) => {

        if(!email)
        {
            return 'Email deve ser preenchido!';
        }
        else if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            return 'Digite um email no formato ana@gmail.com';
        }

        return '';
    }

    // static validateRequiredSelect = (select: SelectModel | null | undefined, nameField: string) => {

    //     if(!select || select === undefined || select == null
    //         || select.value === '' || select.value === undefined) {
    //         return `O campo ${nameField} deve ser preenchido!\n`;
    //     }

    //     return '';
    // }

    // static validateFile = (file: File | undefined, nameField: string) => {

    //     if(!file || file === undefined || file == null)
    //     {
    //         return `O campo ${nameField} deve ser preenchido!\n`;
    //     }

    //     return '';
    // }
}
