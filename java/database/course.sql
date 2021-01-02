											
										=== codigos de colsulta ===

drop table department;
drop table seller;

select * from department;
select * from seller;

select s.Name ,s.Email , d.Name 
from department d
inner join seller s
on d.Id = s.Id



