use myblog;

-- 基本查询

insert into users(username,`password`,realname)values("lisi","123","李四");

select * from users

select id,username from users

select * from users where username="dahl" and `password`="123"

select * from users where `password` like '%1%' order by id desc