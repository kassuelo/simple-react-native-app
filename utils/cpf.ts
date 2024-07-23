export default class Cpf {
    static formatar(cpf: string): string {
        let cpfCopia = cpf;
        if (cpfCopia.length > 11) {
            cpfCopia = cpfCopia.substring(0, 11)
        }
        return cpfCopia
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    }
    static desformatar(cpf: string): string {
        return cpf.replace(/\D/g, '')
    }
}