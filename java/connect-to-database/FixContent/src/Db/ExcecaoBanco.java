package Db;

public class ExcecaoBanco extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public  ExcecaoBanco(String msg) {
		super(msg);
	}
}
