-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


DROP TABLE "migration_table",
			"states_coord",
			"postal_data";

CREATE TABLE "migration_table" (
    "destination" varchar   NOT NULL,
    "year" int   NOT NULL,
    "population" int   NOT NULL,
    "origin" varchar   NOT NULL,
    "total" int   NOT NULL
);

CREATE TABLE "states_coord" (
    "state" varchar   NOT NULL,
    "lat" int   NOT NULL,
    "lng" int   NOT NULL,
    CONSTRAINT "pk_states_coord" PRIMARY KEY (
        "state"
     )
);

CREATE TABLE "postal_data" (
    "state" varchar NOT NULL,
    "postal" varchar   NOT NULL
);

ALTER TABLE "migration_table" ADD CONSTRAINT "fk_migration_table_destination" FOREIGN KEY("destination")
REFERENCES "states_coord" ("state");

ALTER TABLE "migration_table" ADD CONSTRAINT "fk_migration_table_origin" FOREIGN KEY("origin")
REFERENCES "states_coord" ("state");

ALTER TABLE "postal_data" ADD CONSTRAINT "fk_postal_data_state" FOREIGN KEY("state")
REFERENCES "states_coord" ("state");
