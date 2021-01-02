package Db;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Database {

	private static Connection con = null;
	
	public static Connection getCon() {
		if(con == null) {
			try {
				
			Properties prop = loadProperties();
			String url = prop.getProperty("dburl");
			con = DriverManager.getConnection(url,prop);
			}catch(SQLException e) {
				throw new DbException(e.getMessage());
			}
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
	
	public static Properties loadProperties() {
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
