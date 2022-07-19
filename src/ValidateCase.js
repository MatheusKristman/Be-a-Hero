export default function validateCase(values) {
    let errors = {};

    console.log(values.caseValue);

    if (values.title.length < 2) {
        errors.title = 'Dado invalido! Precisa ser acima de duas letras.';
    }

    if (values.title.length === 0) {
        errors.title = 'Campo vazio! favor preencher';
    }

    if (values.desc.length < 10) {
        errors.desc = 'Descrição invalida! Precisa ser cima de 10 letras.';
    }

    if (values.desc.length === 0) {
        errors.desc = 'Campo vazio! favor preencher';
    }

    if (Number(values.caseValue) < 20) {
        errors.caseValue = 'Valor invalido! Precisa ser acima de 20 Reais.';
    }

    if (values.caseValue.length === 0) {
        errors.caseValue = 'Campo vazio! favor preencher';
    }

    return errors;
}
