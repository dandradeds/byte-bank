import {Cliente} from "./Cliente.js";
import { Gerencia } from "./Funcionarios/Gerencia.js";
import { Diretoria } from "./Funcionarios/Diretoria.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretoria ("Daniel", 10000, 55566633390)
diretor.cadastrarSenha("123456789")
const gerente = new Gerencia ("Isaias", 5000, 55566633391)
gerente.cadastrarSenha(123)

const cliente = new Cliente("Roberto", 44499887790, "9876")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "9876");

console.log(clienteEstaLogado, diretorEstaLogado, gerenteEstaLogado)




















// // const cliente1 = new Cliente("Ricardo", 11122233309);
// // const contaCorrenteRicardo = new ContaCorrente( cliente1, 1001);
// // const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// // const contaSalario = new ContaSalario(cliente1);
// // contaSalario.depositar(100);
// // contaSalario.sacar(10);
