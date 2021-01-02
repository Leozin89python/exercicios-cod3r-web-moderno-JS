package Application;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import db.DB;
import db.DbException;

public class App {

	public static void main(String[] args) throws ParseException {
	
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		Connection con = null;
		PreparedStatement st =null;
		try {
			con = DB.getConection();
			
			st = con.prepareStatement(
					"INSERT INTO seller"
					+"(Name,Email,BirthDate,BaseSalary,DepartmentId)"
					+"values"
					+"(?,?,?,?,?)");
			
			st.setString(1,"Carl Urban");
			st.setString(2, "carl@eu.com");
			st.setDate(3, new java.sql.Date(sdf.parse("22/03/1987").getTime()));
			st.setDouble(4, 2354.35);
			st.setInt(5, 4);
			
			int rowsAffected = st.executeUpdate();
			
			System.out.println("Done! rows affected" + "," + rowsAffected);
			
		}catch(SQLException e) {
			throw new DbException(e.getMessage());
		}catch(ParseException e) {
			e.printStackTrace();
		}finally {
			DB.closeConnection();
			DB.closeStatement(st);
		}
		
	}
}
