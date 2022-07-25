-- Phone Plan Schema
-- Will tell Spring to look at this database format

-- The Plans table holds all of important plan information
create table plans(
    planname varchar(125) not null primary key, 
    price double not null,
    dataspeed varchar not null, --data speed is either 4G or 5G
    plantype varchar(160) not null,   -- plan type 
    devicelimit int not null,
    enabled boolean not null
);

insert into plans values('Mystic Unlimited Premium Plan', 50.00, '4G LTE and 5G LTE where possible', 'unlimited talk, text, + high-speed data that will not slow down based on usage', 6);
insert into plans values('Mystic Unlimited Extra Plan', 40.00, '4G LTE and 5G LTE where possible', 'unlimited talk, text, data, + 60GB of Premium Data', 5);
insert into plans values('Mystic Essential Plan', 30.00, '4G LTE and 5G LTE where possible', 'unlimited talk, text, + 50GB of Premium Data', 4);
insert into plans values('Mystic Basic Plan', 45.00, '4G LTE and 5G LTE where possible', '20GB of high-speed data, unlimited data up to 1.5Mbps, unlimited mobile hotspot data at 4G speeds ', 4);
insert into plans values('Mystic Family Plan', 50.00, '4G LTE and 5G LTE where possible', 'unlimited talk, text, high-speed data, and customizable features for seniors and children ', 7);

