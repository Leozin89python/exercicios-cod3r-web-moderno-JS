package Db;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;
import java.sql.DriverManager;

public class Database {

	private static Connection con = null;
	
	
	
	public static Connection getCon() {
		try {
		Properties props = loadProp();
		String url = props.getProperty("dburl");
		con = DriverManager.getConnection(url,props);
		}catch(SQLException e) {
			throw new DbException(e.getMessage());
		}
		return con;
	}
	
	
	public static void closeCon() {
		if(con != null) {
			try {
			con.close();
			}catch(SQLException e) {
				throw new DbException(e.getMessage());
			}
		}	
	}
	
	
	
	public static Properties loadProp() {
		try {
			FileInputStream fs = new FileInputStream("db.properties");
			Properties props = new Properties();
			 props.load(fs);
			 return props;
		}catch(IOException e) {
			throw new DbException(e.getMessage());
		}
	}
	
}
