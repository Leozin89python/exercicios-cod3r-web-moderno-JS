											
											=== CRUD SQL ===
                                        
                                        
                                        
                                        

drop table department;
drop table seller;

insert into seller values(null,'Erica Souza','Ericalinda@gmail.com','1989-04-21 00:00:00',2456,3);
insert into seller values(null,'Fernanda Sena','nandalindamenina@gmail.com','1995-06-24 00:00:00',2456,3);
insert into seller values(null,'Renata Souza','renacris@gmail.com','1981-07-15 00:00:00',2456,3);
insert into seller values(null,'Rodrigo Mendes','menderr@gmail.com','1992-02-01 00:00:00',2014,2);
insert into seller values(null,'Miguel Coelho','miguelito@outlook.com','1997-05-21 00:00:00',998,1);
insert into seller values(null,'Renata Souza','renacris@gmail.com','1981-07-15 00:00:00',2456,3);
insert into seller values(null,'Renata Souza','renacris@gmail.com','1981-07-15 00:00:00',2456,3);

select * from department;
select * from seller;


delete from seller where id = '8';

update seller set Name  ='Debora Block' where id ='14'
update seller set Email ='deboraagata@eu.com' where id ='14'


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






