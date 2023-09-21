import { response } from "express"
import ValidacaoUsuarios from "../services/ValidacaoUsuarios.js"

describe("Usuários", ()=>{
    test("Quando a validação de nome retorna false",()=>{
        expect(ValidacaoUsuarios.validaNome("")).toBe(false)
        expect(ValidacaoUsuarios.validaNome("1")).toBe(false)
        expect(ValidacaoUsuarios.validaNome("12")).toBe(false)
        expect(ValidacaoUsuarios.validaNome(1245678)).toBe(false)
        expect(ValidacaoUsuarios.validaNome(true)).toBe(false)
        expect(ValidacaoUsuarios.validaNome([])).toBe(false)
        expect(ValidacaoUsuarios.validaNome({})).toBe(false)
        expect(ValidacaoUsuarios.validaNome(NaN)).toBe(false)
        expect(ValidacaoUsuarios.validaNome()).toBe(false)
    })

    test("Quando o validação de nome retorna true", ()=>{
        expect(ValidacaoUsuarios.validaNome("Nome")).toBe(true)
    })

    test("Quando a validação de sobrenome retorna false",()=>{
        expect(ValidacaoUsuarios.ValidaSobrenome("")).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome("1")).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome("12")).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome(1245678)).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome(true)).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome([])).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome({})).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome(NaN)).toBe(false)
        expect(ValidacaoUsuarios.ValidaSobrenome()).toBe(false)
    })

    test("Quando o validação de sobrenome retorna true", ()=>{
        expect(ValidacaoUsuarios.ValidaSobrenome("Sobrenome")).toBe(true)
    })

    test("Quando a validação de email retorna false",()=>{
        expect(ValidacaoUsuarios.ValidaEmail("")).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail("1")).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail("@")).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail(1245678)).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail(true)).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail([])).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail({})).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail(NaN)).toBe(false)
        expect(ValidacaoUsuarios.ValidaEmail()).toBe(false)
    })

    test("Quando o validação de email retorna true", ()=>{
        expect(ValidacaoUsuarios.ValidaEmail("email@gmail.com")).toBe(true)
        expect(ValidacaoUsuarios.ValidaEmail("email@hotmail.com")).toBe(true)
    })

    test("Quando a validação de CPF retorna false",()=>{
        expect(ValidacaoUsuarios.ValidaCPF("")).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF("1")).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF("12")).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF(1245678)).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF(true)).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF([])).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF({})).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF(NaN)).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF()).toBe(false)
        expect(ValidacaoUsuarios.ValidaCPF("126.655.506-08")).toBe(false)
    })

    test("Quando o validação de CPF retorna true", ()=>{
        expect(ValidacaoUsuarios.ValidaCPF("15658874558")).toBe(true)
    })

    test("Quando a validação de senha retorna false",()=>{
        expect(ValidacaoUsuarios.ValidaSenha("")).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha("1")).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha("12")).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha(1245678)).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha(true)).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha([])).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha({})).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha(NaN)).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha()).toBe(false)
        expect(ValidacaoUsuarios.ValidaSenha("1265487912345")).toBe(false)
    })

    test("Quando o validação de senha retorna true", ()=>{
        expect(ValidacaoUsuarios.ValidaSenha("15647")).toBe(true)
        expect(ValidacaoUsuarios.ValidaSenha("156472")).toBe(true)
        expect(ValidacaoUsuarios.ValidaSenha("15647t4")).toBe(true)
        expect(ValidacaoUsuarios.ValidaSenha("1564r44&")).toBe(true)
        expect(ValidacaoUsuarios.ValidaSenha("1564#55@5")).toBe(true)
        expect(ValidacaoUsuarios.ValidaSenha("156472222Q")).toBe(true)
        expect(ValidacaoUsuarios.ValidaSenha("1564222W2d7")).toBe(true)
    })

    test("Quando a validação de telefone retorna false",()=>{
        expect(ValidacaoUsuarios.ValidaTelefone("")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("1")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("12")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone(1245678)).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone(true)).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone([])).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone({})).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone(NaN)).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone()).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("(41) 988557478)")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("(41)988557478)")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("(41) 98855-7478)")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("(41) 9 8855-7478)")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("(41)98855-7478)")).toBe(false)
        expect(ValidacaoUsuarios.ValidaTelefone("41 988557478)")).toBe(false)
    })

    test("Quando o validação de Telefone retorna true", ()=>{
        expect(ValidacaoUsuarios.ValidaTelefone("41988771564")).toBe(true)
    })
})