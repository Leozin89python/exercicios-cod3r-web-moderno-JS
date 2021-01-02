package Application;

import java.sql.Connection;
import db.DB;

public class App {

	public static void main(String[] args) {
		Connection con = DB.getConection();
		DB.closeConnection();
	}
}
