package Programa;

import java.sql.Connection;

import Banco.BaseDeDados;
public class App {

	public static void main(String[] args) {
		
		Connection conexao = BaseDeDados.abraConexao();
		BaseDeDados.fechaConexao();
	}
}
