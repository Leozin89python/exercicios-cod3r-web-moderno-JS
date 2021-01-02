package Application;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import db.DB;
import db.DbException;

public class App {

	public static void main(String[] args) {
		Connection con = DB.getConection();
		Statement st = null;
		ResultSet rs = null;
		try {
			con = DB.getConection();
			
			st = con.createStatement();
			rs = st.executeQuery("select * from department");
			
		while(rs.next()) {
			System.out.println(rs.getInt("Id") + "," + rs.getString("Name"));
		}
			
		}catch(SQLException e) {
			throw new DbException(e.getMessage());
		}finally {
			DB.closeResultSet(rs);
			DB.closeStatement(st);
			DB.closeConnection();
			
		}
	}
}
