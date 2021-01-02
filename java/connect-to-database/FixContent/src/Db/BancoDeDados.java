package Db;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class BancoDeDados {
	
		private static Connection conexao = null;
		
		public static Connection abraConexao() {
			try {
				Properties propriedade = propriedade();
				String rede = propriedade.getProperty("dburl");
				conexao = DriverManager.getConnection(rede,propriedade);
			}catch(SQLException e) {
				throw new ExcecaoBanco(e.getMessage());
			}
			return conexao;
		}
		
		public static void fechaConexao() {
			try {
				if(conexao != null) {
					conexao.close();
				}
			}catch(SQLException e) {
				throw new ExcecaoBanco(e.getMessage());
			}
		}
		
		public static Properties propriedade() {
			try {
				FileInputStream dados = new FileInputStream("db.properties");
				Properties propriedade = new Properties();
				propriedade.load(dados);
				return propriedade;
			}catch(IOException e) {
				throw new ExcecaoBanco(e.getMessage());
			}
		}
	}
