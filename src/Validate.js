export default function validate(values) {
    let errors = {};

    if (values.name.length < 2) {
        errors.name = 'Nome precisa ser acima de duas letras';
    }

    if (!values.email) {
        errors.email = 'Favor inserir email no campo';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email invalido';
    }

    if (values.whatsapp.length < 10) {
        errors.whatsapp = 'Número invalido!';
    }

    if (values.city.length < 3) {
        errors.city = 'Cidade invalida!';
    }

    if (values.uf.length < 2) {
        errors.uf = 'UF invalido!';
    }

    if (Object.keys(errors).length > 0) {
        return errors;
    }

    return errors;
}
