import ValidacaoUsuarios from "../services/ValidacaoUsuarios.js";

describe("Usuários", () => {
  test("Quando a validação de nome retorna false", () => {
    expect(ValidacaoUsuarios.validaNome("")).toBe(false);
    expect(ValidacaoUsuarios.validaNome("1")).toBe(false);
    expect(ValidacaoUsuarios.validaNome("12")).toBe(false);
    expect(ValidacaoUsuarios.validaNome(1245678)).toBe(false);
    expect(ValidacaoUsuarios.validaNome(true)).toBe(false);
    expect(ValidacaoUsuarios.validaNome([])).toBe(false);
    expect(ValidacaoUsuarios.validaNome({})).toBe(false);
    expect(ValidacaoUsuarios.validaNome(NaN)).toBe(false);
    expect(ValidacaoUsuarios.validaNome()).toBe(false);
  });

  test("Quando o validação de nome retorna true", () => {
    expect(ValidacaoUsuarios.validaNome("Nome")).toBe(true);
  });

  test("Quando a validação de sobrenome retorna false", () => {
    expect(ValidacaoUsuarios.validaSobrenome("")).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome("1")).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome("12")).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome(1245678)).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome(true)).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome([])).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome({})).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome(NaN)).toBe(false);
    expect(ValidacaoUsuarios.validaSobrenome()).toBe(false);
  });

  test("Quando o validação de sobrenome retorna true", () => {
    expect(ValidacaoUsuarios.validaSobrenome("Sobrenome")).toBe(true);
  });

  test("Quando a validação de email retorna false", () => {
    expect(ValidacaoUsuarios.validaEmail("")).toBe(false);
    expect(ValidacaoUsuarios.validaEmail("1")).toBe(false);
    expect(ValidacaoUsuarios.validaEmail("@")).toBe(false);
    expect(ValidacaoUsuarios.validaEmail(1245678)).toBe(false);
    expect(ValidacaoUsuarios.validaEmail(true)).toBe(false);
    expect(ValidacaoUsuarios.validaEmail([])).toBe(false);
    expect(ValidacaoUsuarios.validaEmail({})).toBe(false);
    expect(ValidacaoUsuarios.validaEmail(NaN)).toBe(false);
    expect(ValidacaoUsuarios.validaEmail()).toBe(false);
  });

  test("Quando o validação de email retorna true", () => {
    expect(ValidacaoUsuarios.validaEmail("email@gmail.com")).toBe(true);
    expect(ValidacaoUsuarios.validaEmail("email@hotmail.com")).toBe(true);
  });

  test("Quando a validação de senha retorna false", () => {
    expect(ValidacaoUsuarios.validaSenha("")).toBe(false);
    expect(ValidacaoUsuarios.validaSenha("1")).toBe(false);
    expect(ValidacaoUsuarios.validaSenha("12")).toBe(false);
    expect(ValidacaoUsuarios.validaSenha(1245678)).toBe(false);
    expect(ValidacaoUsuarios.validaSenha(true)).toBe(false);
    expect(ValidacaoUsuarios.validaSenha([])).toBe(false);
    expect(ValidacaoUsuarios.validaSenha({})).toBe(false);
    expect(ValidacaoUsuarios.validaSenha(NaN)).toBe(false);
    expect(ValidacaoUsuarios.validaSenha("1265487912345")).toBe(false);
  });

  test("Quando o validação de senha retorna true", () => {
    expect(ValidacaoUsuarios.validaSenha("156472")).toBe(true);
    expect(ValidacaoUsuarios.validaSenha("15647t4")).toBe(true);
    expect(ValidacaoUsuarios.validaSenha("1564r44&")).toBe(true);
    expect(ValidacaoUsuarios.validaSenha("1564#55@5")).toBe(true);
    expect(ValidacaoUsuarios.validaSenha("156472222Q")).toBe(true);
    expect(ValidacaoUsuarios.validaSenha("1564222W2d7")).toBe(true);
  });

  test("Quando a validação de telefone retorna false", () => {
    expect(ValidacaoUsuarios.validaTelefone("")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("1")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("12")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone(1245678)).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone(true)).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone([])).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone({})).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone(NaN)).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone()).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("(41) 988557478)")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("(41)988557478)")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("(41) 98855-7478)")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("(41) 9 8855-7478)")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("(41)98855-7478)")).toBe(false);
    expect(ValidacaoUsuarios.validaTelefone("41 988557478)")).toBe(false);
  });
})
 
