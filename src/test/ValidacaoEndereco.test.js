import { response } from "express"
import ValidacaoEndereco from "../services/ValidacaoEndereco.js"

describe("Endereço", ()=>{
    test("Quando a validação de logradouro retorna false",()=>{
        expect(ValidacaoEndereco.validaLogradouro("")).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro("1")).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro("12")).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro(1245678)).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro(true)).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro([])).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro({})).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro(NaN)).toBe(false)
        expect(ValidacaoEndereco.validaLogradouro()).toBe(false)
    })
    /**
     * Tipos de logradouro segundo o IBGE
     */
    test("Quando o validação de logradouro retorna true", ()=>{
        expect(ValidacaoEndereco.validaLogradouro("Aeroporto")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Alameda")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Área")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Avenida")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Campo")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Chácara")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Colônia")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Conjunto")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Distrito")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Esplanada")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Estação")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("Estrada")).toBe(true)
        expect(ValidacaoEndereco.validaLogradouro("favela")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("fazenda")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("feira")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("jardim")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("ladeira")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("lago")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("lagoa")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("largo")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("loteamento")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("morro")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("núcleo")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("parque")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("passarela")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("pátio")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("praça")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("quadra")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("recanto")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("residencial")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("rodovia")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("rua")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("setor")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("sítio")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("travessa")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("trecho")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("trevo")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("vale")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("vereda")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("via")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("viaduto")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("viela")).toBe(true);
        expect(ValidacaoEndereco.validaLogradouro("vila")).toBe(true);
    })  

    test("Quando a validação de número retorna false",()=>{
        expect(ValidacaoEndereco.validaCidade("")).toBe(false)
        expect(ValidacaoEndereco.validaNumero("0")).toBe(false)
        expect(ValidacaoEndereco.validaNumero(1245678)).toBe(false)
        expect(ValidacaoEndereco.validaNumero(true)).toBe(false)
        expect(ValidacaoEndereco.validaNumero([])).toBe(false)
        expect(ValidacaoEndereco.validaNumero({})).toBe(false)
        expect(ValidacaoEndereco.validaNumero(NaN)).toBe(false)
        expect(ValidacaoEndereco.validaNumero()).toBe(false)
    })
    
    test("Quando o validação de número retorna true", ()=>{
        expect(ValidacaoEndereco.validaNumero("1")).toBe(true)
    })

    test("Quando a validação de cidade retorna false",()=>{
        expect(ValidacaoEndereco.validaCidade("")).toBe(false)
        expect(ValidacaoEndereco.validaCidade("1")).toBe(false)
        expect(ValidacaoEndereco.validaCidade(1245678)).toBe(false)
        expect(ValidacaoEndereco.validaCidade(true)).toBe(false)
        expect(ValidacaoEndereco.validaCidade([])).toBe(false)
        expect(ValidacaoEndereco.validaCidade({})).toBe(false)
        expect(ValidacaoEndereco.validaCidade(NaN)).toBe(false)
        expect(ValidacaoEndereco.validaCidade()).toBe(false)
        expect(ValidacaoEndereco.validaCidade("au")).toBe(false)

    })
    
    test("Quando o validação de cidade retorna true", ()=>{
        expect(ValidacaoEndereco.validaCidade("Curitiba")).toBe(true)
    })

    test("Quando a validação de estado retorna false",()=>{
        expect(ValidacaoEndereco.validaUF("")).toBe(false)
        expect(ValidacaoEndereco.validaUF("1")).toBe(false)
        expect(ValidacaoEndereco.validaUF(1245678)).toBe(false)
        expect(ValidacaoEndereco.validaUF(true)).toBe(false)
        expect(ValidacaoEndereco.validaUF([])).toBe(false)
        expect(ValidacaoEndereco.validaUF({})).toBe(false)
        expect(ValidacaoEndereco.validaUF(NaN)).toBe(false)
        expect(ValidacaoEndereco.validaUF()).toBe(false)
        expect(ValidacaoEndereco.validaUF("AAA")).toBe(false)

    })
    
    test("Quando o validação de estado retorna true", ()=>{
        expect(ValidacaoEndereco.validaUF("PR")).toBe(true)
        expect(ValidacaoEndereco.validaUF("MG")).toBe(true)
        expect(ValidacaoEndereco.validaUF("AC")).toBe(true)
        expect(ValidacaoEndereco.validaUF("AL")).toBe(true)
        expect(ValidacaoEndereco.validaUF("AM")).toBe(true)
        expect(ValidacaoEndereco.validaUF("AP")).toBe(true)
        expect(ValidacaoEndereco.validaUF("BA")).toBe(true)
        expect(ValidacaoEndereco.validaUF("CE")).toBe(true)
        expect(ValidacaoEndereco.validaUF("DF")).toBe(true)
        expect(ValidacaoEndereco.validaUF("ES")).toBe(true)
        expect(ValidacaoEndereco.validaUF("GO")).toBe(true)
        expect(ValidacaoEndereco.validaUF("MA")).toBe(true)
        expect(ValidacaoEndereco.validaUF("MT")).toBe(true)
        expect(ValidacaoEndereco.validaUF("MS")).toBe(true)
        expect(ValidacaoEndereco.validaUF("MG")).toBe(true)
        expect(ValidacaoEndereco.validaUF("PA")).toBe(true)
        expect(ValidacaoEndereco.validaUF("PB")).toBe(true)
        expect(ValidacaoEndereco.validaUF("PR")).toBe(true)
        expect(ValidacaoEndereco.validaUF("PE")).toBe(true)
        expect(ValidacaoEndereco.validaUF("PI")).toBe(true)
        expect(ValidacaoEndereco.validaUF("RJ")).toBe(true)
        expect(ValidacaoEndereco.validaUF("RN")).toBe(true)
        expect(ValidacaoEndereco.validaUF("RS")).toBe(true)
        expect(ValidacaoEndereco.validaUF("RO")).toBe(true)
        expect(ValidacaoEndereco.validaUF("RR")).toBe(true)
        expect(ValidacaoEndereco.validaUF("SC")).toBe(true)
        expect(ValidacaoEndereco.validaUF("SP")).toBe(true)
        expect(ValidacaoEndereco.validaUF("SE")).toBe(true)
        expect(ValidacaoEndereco.validaUF("TO")).toBe(true)

    })
   
})