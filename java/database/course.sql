											
										=== codigos de colsulta ===
                                        
                                        
                                        
                                        

drop table department;
drop table seller;

select * from department;
select * from seller;

select s.Name ,s.Email , d.Name 
from department d
inner join seller s
on d.Id = s.Id;

select s.Name ,s.Email , d.Name 
from department d
left outer join seller s
on d.Id = s.Id;

select s.Name ,s.Email , d.Name 
from department d
right outer join seller s
on d.Id = s.Id;

select d.Name,s.DepartmentId,s.Name,s.Email,s.BaseSalary
from department d
inner join seller s
on d.id = s.id;

select d.Name,s.DepartmentId,s.Name,s.Email,s.BaseSalary,s.BirthDate
from department d
inner join seller s
on d.id = s.id;

select d.Name,s.DepartmentId,s.Name,s.Email,s.BaseSalary
from department d
inner join seller s
on d.id = s.id
where d.Name = 'Fashion';






create view vdepartment as select * from department;

select * from  vdepartment;




create view vseller as select * from seller;

select * from  vseller;






DELIMITER $$

CREATE PROCEDURE vseller()
BEGIN
	SELECT * FROM seller;
END $$


DELIMITER ;

CALL vseller();






