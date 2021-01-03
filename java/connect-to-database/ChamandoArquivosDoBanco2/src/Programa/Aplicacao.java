package Programa;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import Banco.BaseDeDados;
import Banco.Excecao;
public class Aplicacao {

	public static void main(String[] args) {
		
		Connection conexao = BaseDeDados.abraConexao();
		ResultSet rs =null;
		Statement st = null;
		
		try {
			
			conexao = BaseDeDados.abraConexao();
			
			st = conexao.createStatement();
			rs = st.executeQuery("SELECT * FROM client");
			
			while(rs.next()) {
				System.out.println(rs.getString("name") + "," + rs.getString("email"));
			}
			
		}catch(SQLException e) {
			throw new Excecao(e.getMessage());
		}finally {
			BaseDeDados.closeRs(rs);
			BaseDeDados.closeSt(st);
		}
		
	}
}
