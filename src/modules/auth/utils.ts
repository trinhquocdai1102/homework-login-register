import { ILoginParams, ILoginValidation } from '../../models/auth';
import { IRegisterParams, IRegisterValidation } from '../../models/auth';
import { validEmailRegex } from '../../utils';

const validateEmail = (email: string) => {
    if (!email) {
        return 'emailRequire';
    }

    if (!validEmailRegex.test(email)) {
        return 'emailInvalid';
    }

    return '';
};

const validateName = (name: string) => {
    if (!name) {
        return 'nameRequire';
    }

    return '';
};

const validatePassword = (password: string) => {
    if (!password) {
        return 'passwordRequire';
    }

    if (password.length < 4) {
        return 'minPasswordInvalid';
    }

    return '';
};

const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword) {
        return 'confirmPasswordRequire';
    }

    if (confirmPassword.length < 4) {
        return 'minPasswordInvalid';
    }

    if (confirmPassword !== password) {
        return 'confirmPasswordInvalid';
    }

    return '';
};

const validateGender = (gender: string) => {
    if (!gender) {
        return 'genderRequire';
    }

    return '';
};

const validateRegion = (region: number | string) => {
    if (!region) {
        return 'regionRequire';
    }

    return '';
};

const validateState = (state: number | string) => {
    if (!state) {
        return 'stateRequire';
    }

    return '';
};

// const validateField = (field: string, value: string) => {
//     if (value) return '';
//     let fieldRequire = '';
//     switch (field) {
//         case 'name':
//             fieldRequire = 'nameRequire';
//             break;

//         case 'gender':
//             fieldRequire = 'genderRequire';
//             break;

//         case 'region':
//             fieldRequire = 'regionRequire';
//             break;

//         case 'state':
//             fieldRequire = 'stateRequire';
//             break;
//     }
//     return fieldRequire;
// };

export const validateLogin = (values: ILoginParams): ILoginValidation => {
    return {
        email: validateEmail(values.email),
        password: validatePassword(values.password),
    };
};

export const validLogin = (values: ILoginValidation) => {
    return !values.email && !values.password;
};

export const validateRegister = (values: IRegisterParams): IRegisterValidation => {
    return {
        email: validateEmail(values.email),
        password: validatePassword(values.password),
        confirmPassword: validateConfirmPassword(values.password, values.confirmPassword),
        name: validateName(values.name),
        gender: validateGender(values.gender),
        region: validateRegion(values.region),
        state: validateState(values.state),
    };
};

export const validRegister = (values: IRegisterValidation) => {
    return (
        !values.email &&
        !values.password &&
        !values.confirmPassword &&
        !values.name &&
        !values.gender &&
        !values.region &&
        !values.state
    );
};
