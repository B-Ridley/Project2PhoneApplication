INSERT INTO phone_plans (plan_name, price, data_speed, plan_type, device_limit)
VALUES ("Mystic Unlimited Premium Plan", 50.00, "4G LTE and 5G LTE where possible",
	"unlimited talk, text, and high-speed data that will not slow down based on usage", 6);

UPDATE phone_plans
SET device_limit = 6
WHERE plan_name = "Mystic Family Plan" 


Select * from phone_plans
ORDER BY price asc;



INSERT INTO phone_plans (plan_name, price, data_speed, plan_type, device_limit)
VALUES ("Mystic Unlimited Extra Plan", 40.00, "4G LTE and 5G LTE where possible",
	"unlimited talk, text, data, + 60GB of premium data", 5),
     ("Mystic Essential Plan", 30.00, "4G LTE and 5G LTE where possible",
	"unlimited talk, text, + 50GB of premium data", 4),
    ("Mystic Basic Plan", 45.00, "4G LTE and 5G LTE where possible",
	"unlimited talk, text, 20GB of high-speed data, unlimited data up to 1.5Mbps, unlimited mobile hotspot data at 4G speeds ", 4),
     ("Mystic Family Plan", 55.00, "4G LTE and 5G LTE where possible",
	"unlimited talk, text, high-speed data, and customizable features for seniors and children", 6)
    

		