package Banco;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class BaseDeDados {

			private static Connection conexao = null;
	
			public static Connection abraConexao() {
				try {
					Properties propriedade = propriedades();
					String rede = propriedade.getProperty("dburl");
					conexao = DriverManager.getConnection(rede, propriedade);
				}catch(SQLException e) {
					throw new Excecao(e.getMessage());
				}
				return conexao;
			}
		
	
			public static void fechaConexao() {
				try {
					if(conexao != null) {
						conexao.close();
					}
				}catch(SQLException e) {
					throw new Excecao(e.getMessage());
				}
			}
	
	
			public static Properties propriedades() {
				try {
					FileInputStream dados = new FileInputStream("db.properties");
					Properties propriedade = new Properties();
					propriedade.load(dados);
					return propriedade;
				}catch(IOException e) {
					throw new Excecao(e.getMessage());
				}
			}
			
			public static void closeRs(ResultSet rs) {
				if(rs != null) {
					try {
						rs.close();
					}catch(SQLException e) {
						throw new Excecao(e.getMessage());
					}
				}	
			}
			
			public static void closeSt(Statement st) {
				if(st != null) {
					try {
						st.close();
					}catch(SQLException e) {
						throw new Excecao(e.getMessage());
					}
				}	
			}
			
			
			
	}
