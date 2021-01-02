package Program;

import java.sql.Connection;
import Db.BancoDeDados;

public class Programa {

	public static void main(String[] args) {
		
		Connection conexao = BancoDeDados.abraConexao();
		BancoDeDados.fechaConexao();
	}
}
