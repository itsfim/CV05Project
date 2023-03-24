BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "GameScore" (
	"GameID"	INTEGER,
	"DatePlayed"	INTEGER,
	"TimeScore"	INTEGER,
	"UserID"	INTEGER,
	PRIMARY KEY("GameID"),
	FOREIGN KEY("UserID") REFERENCES "Player"("UserID")
);
CREATE TABLE IF NOT EXISTS "Admin" (
	"AdminID"	INTEGER,
	"AdminName"	INTEGER,
	"AdminEmail"	INTEGER,
	"AdminPassword"	INTEGER,
	PRIMARY KEY("AdminID")
);
CREATE TABLE IF NOT EXISTS "AdminView" (
	"UserID"	INTEGER,
	"TimeScore"	INTEGER,
	"DatePlayed"	INTEGER,
	FOREIGN KEY("UserID") REFERENCES "Player"("UserID"),
	FOREIGN KEY("TimeScore") REFERENCES "GameScore"("TimeScore")
);
CREATE TABLE IF NOT EXISTS "Player" (
	"UserID"	INTEGER,
	"Username"	TEXT,
	"email"	TEXT,
	"Password"	TEXT,
	PRIMARY KEY("UserID")
);
INSERT INTO "GameScore" VALUES (1,'12/02/23','0:17',1);
INSERT INTO "Admin" VALUES (1,'admin','admin@email.com','Apassword');
INSERT INTO "Player" VALUES (1,'Tester1','test@email.com','password');
COMMIT;
