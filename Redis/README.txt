
cd c:\Redis

redis-server.exe redis.windows.conf

redis-cli.exe -h 127.0.0.1 -p 6379

set mykey abc

get mykey

redis.windows.conf,设置密码，注意空格
requirepass 123312323

cd c:\Redis

redis-server.exe redis.windows.conf

redis-cli.exe -p 6379

auth 123312323

set myKey abc

get myKey

del mykey

设置定时删除的key
setex myKey 10 "i am value"

分类设置key
set session:sessionId 123

获取全部的key
keys *


