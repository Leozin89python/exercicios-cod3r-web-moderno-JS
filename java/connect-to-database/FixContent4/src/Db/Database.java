package Db;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class Database {

			private static Connection con = null;
			
			
			public static Connection getConnect() {
				try {
					Properties props =  loadProps();
					String url = props.getProperty("dburl");
					con = DriverManager.getConnection(url,props);
				}catch(SQLException e) {
					throw new DbException(e.getMessage());
				}
				return con;
			}				
	
			
			public static void closeConnect() {
				try {
					if(con != null) {
						con.close();
					}
				}catch(SQLException e) {
					throw new DbException(e.getMessage());
				}
			}
			
			public static Properties loadProps() {
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
