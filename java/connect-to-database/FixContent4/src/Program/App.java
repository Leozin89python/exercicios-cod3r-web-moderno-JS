package Program;

import java.sql.Connection;
import Db.Database;

public class App {

	public static void main(String[] args) {
		
		Connection con = Database.getConnect();
		Database.closeConnect();
	}
}
