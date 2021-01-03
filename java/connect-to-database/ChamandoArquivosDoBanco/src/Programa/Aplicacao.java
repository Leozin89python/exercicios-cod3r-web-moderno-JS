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
			rs = st.executeQuery("SELECT c.name, c.email, r.country, r.estate, r.city, p.item, p.price, p.quantity\r\n" + 
					"	FROM client c\r\n" + 
					"	INNER JOIN route r\r\n" + 
					"	ON c.idclient = r.idcli\r\n" + 
					"	INNER JOIN product p\r\n" + 
					"	ON c.idclient = p.idcli");
			
			while(rs.next()) {
				System.out.println(rs.getString("c.name") + "," + rs.getString("c.email") + "," + rs.getString("r.country") + "," + rs.getString("r.estate") + "," + rs.getString("r.city") + "," + rs.getString("p.item") + "," + rs.getDouble("p.price") + "," + rs.getInt("p.quantity"));
			}
			
		}catch(SQLException e) {
			throw new Excecao(e.getMessage());
		}finally {
			BaseDeDados.closeRs(rs);
			BaseDeDados.closeSt(st);
		}
		
	}
}
