package Application;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
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
					+"(?,?,?,?,?)",
					Statement.RETURN_GENERATED_KEYS);
			
			st.setString(1,"Carl Urban");
			st.setString(2, "carl@eu.com");
			st.setDate(3, new java.sql.Date(sdf.parse("22/03/1987").getTime()));
			st.setDouble(4, 2354.35);
			st.setInt(5, 4);
			
			int rowsAffected = st.executeUpdate();
			
			if(rowsAffected  > 0) {
				ResultSet rs =  st.getGeneratedKeys();
				while(rs.next()) {
					int id = rs.getInt(1);
					System.out.println("Done! id =" + id);
				}
			}else {
				System.out.println("No rows affected!");
			}
			
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
