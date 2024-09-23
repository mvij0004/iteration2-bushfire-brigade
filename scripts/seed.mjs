import { db } from "@vercel/postgres";
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import pkg from "@next/env"; // Import the whole module

const { loadEnvConfig } = pkg; // Destructure to get the function you need

// Load environment variables (if needed)
loadEnvConfig(process.cwd());

const parseCSV = async (filePath) => {
  const csvFile = fs.readFileSync(path.resolve(filePath), "utf8");
  return new Promise((resolve) => {
    Papa.parse(csvFile, {
      header: true,
      complete: (result) => {
        resolve(result.data);
      },
    });
  });
};

async function seed(client) {
  //   // Drop the school_bushfire_risk table if it exists first
  //   await client.sql`
  //       DROP TABLE IF EXISTS school_bushfire_risk;
  //     `;
  //   console.log("Dropped existing school_bushfire_risk table");

  //   // Drop the schools table if it exists
  //   await client.sql`
  //       DROP TABLE IF EXISTS schools;
  //     `;
  //   console.log("Dropped existing schools table");

  //   // Drop the risk_categories table if it exists
  //   await client.sql`
  //       DROP TABLE IF EXISTS risk_categories;
  //     `;
  //   console.log("Dropped existing risk_categories table");

  //   // Now create the tables again
  //   // Create risk_categories table with a unique constraint on category_name
  //   const createRiskCategoriesTable = await client.sql`
  //       CREATE TABLE IF NOT EXISTS risk_categories (
  //         id SERIAL PRIMARY KEY,
  //         category_name VARCHAR(255) NOT NULL UNIQUE,
  //         descriptions TEXT
  //       );
  //     `;
  //   console.log("Created risk_categories table");

  //   const riskCatData = await parseCSV("./risk_categories.csv");

  //   const riskCatPromises = riskCatData.map((riskCat) => {
  //     return client.sql`
  //         INSERT INTO risk_categories (category_name, descriptions)
  //         VALUES (${riskCat["category_name"]}, ${riskCat["descriptions"]})
  //         ON CONFLICT (category_name) DO NOTHING;
  //       `;
  //   });

  //   const riskCatResults = await Promise.all(riskCatPromises);
  //   console.log(`Seeded ${riskCatResults.length} risk_categories`);

  //   // Create schools table
  //   await client.sql`
  //       CREATE TABLE IF NOT EXISTS schools (
  //         id SERIAL PRIMARY KEY,
  //         school_no VARCHAR(50) NOT NULL UNIQUE,
  //         education_sector VARCHAR(255),
  //         entity_type INT,
  //         school_name VARCHAR(255),
  //         school_type VARCHAR(255),
  //         school_status VARCHAR(1),
  //         address_line_1 VARCHAR(255),
  //         address_line_2 VARCHAR(255),
  //         address_town VARCHAR(255),
  //         address_state VARCHAR(10),
  //         address_postcode VARCHAR(10),
  //         postal_address_line_1 VARCHAR(255),
  //         postal_address_line_2 VARCHAR(255),
  //         postal_town VARCHAR(255),
  //         postal_state VARCHAR(10),
  //         postal_postcode VARCHAR(10),
  //         full_phone_no VARCHAR(20),
  //         lga_id INT,
  //         lga_name VARCHAR(255),
  //         x FLOAT,
  //         y FLOAT
  //       );
  //     `;
  //   console.log("Created schools table");

  //   const schoolData = await parseCSV("./schools.csv");

  //   const schoolPromises = schoolData
  //     .map((school) => {
  //       const entityType = parseInt(school["Entity_Type"], 10);
  //       const lgaId = parseInt(school["LGA_ID"], 10);
  //       const x = parseFloat(school["X"]) || null;
  //       const y = parseFloat(school["Y"]) || null;

  //       if (!isNaN(entityType) && !isNaN(lgaId)) {
  //         return client.sql`
  //             INSERT INTO schools (
  //               school_no,
  //               education_sector,
  //               entity_type,
  //               school_name,
  //               school_type,
  //               school_status,
  //               address_line_1,
  //               address_line_2,
  //               address_town,
  //               address_state,
  //               address_postcode,
  //               postal_address_line_1,
  //               postal_address_line_2,
  //               postal_town,
  //               postal_state,
  //               postal_postcode,
  //               full_phone_no,
  //               lga_id,
  //               lga_name,
  //               x,
  //               y
  //             ) VALUES (
  //               ${school["School_No"]},
  //               ${school["Education_Sector"]},
  //               ${entityType},
  //               ${school["School_Name"]},
  //               ${school["School_Type"]},
  //               ${school["School_Status"]},
  //               ${school["Address_Line_1"]},
  //               ${school["Address_Line_2"]},
  //               ${school["Address_Town"]},
  //               ${school["Address_State"]},
  //               ${school["Address_Postcode"]},
  //               ${school["Postal_Address_Line_1"]},
  //               ${school["Postal_Address_Line_2"]},
  //               ${school["Postal_Town"]},
  //               ${school["Postal_State"]},
  //               ${school["Postal_Postcode"]},
  //               ${school["Full_Phone_No"]},
  //               ${lgaId},
  //               ${school["LGA_Name"]},
  //               ${x},
  //               ${y}
  //             )
  //             ON CONFLICT (school_no) DO NOTHING;
  //           `;
  //       } else {
  //         console.error(
  //           `Skipping invalid data for school_no: ${school["School_No"]}`
  //         );
  //         return null;
  //       }
  //     })
  //     .filter(Boolean);

  //   const schoolResults = await Promise.all(schoolPromises);
  //   console.log(`Seeded ${schoolResults.length} schools`);

  //   // Create school_bushfire_risk table
  //   await client.sql`
  //     CREATE TABLE IF NOT EXISTS school_bushfire_risk (
  //       id SERIAL PRIMARY KEY,
  //       school_no VARCHAR(50) NOT NULL REFERENCES schools(school_no),
  //       fire_risk_category VARCHAR(255) REFERENCES risk_categories(category_name),
  //       facility_name VARCHAR(255),
  //       education_sector VARCHAR(255),
  //       facility_address VARCHAR(255),
  //       town_suburb VARCHAR(255),
  //       local_government_area VARCHAR(255),
  //       fire_weather_district VARCHAR(255),
  //       UNIQUE(school_no, fire_risk_category)
  //     );
  //     `;
  //   console.log("Created school_bushfire_risk table");

  //   const schoolRiskData = await parseCSV("./school_bushfire_risk.csv");

  //   const schoolRiskPromises = schoolRiskData.map((schoolRisk) => {
  //     return client.sql`
  //       INSERT INTO school_bushfire_risk (
  //         school_no,
  //         fire_risk_category,
  //         facility_name,
  //         education_sector,
  //         facility_address,
  //         town_suburb,
  //         local_government_area,
  //         fire_weather_district
  //       ) VALUES (
  //         ${schoolRisk["SCHOOL_NO"]},
  //         ${schoolRisk["Fire_Risk_Category_2023-24"]},
  //         ${schoolRisk["Facility_Name"]},
  //         ${schoolRisk["Education_Sector"]},
  //         ${schoolRisk["Facility_Address"]},
  //         ${schoolRisk["Town_Suburb"]},
  //         ${schoolRisk["Local-Government_Area"]},
  //         ${schoolRisk["Fire_Weather_District"]}
  //       )
  //       ON CONFLICT (school_no, fire_risk_category) DO NOTHING;
  //       `;
  //   });

  //   const schoolRiskResults = await Promise.all(schoolRiskPromises);
  //   console.log(`Seeded ${schoolRiskResults.length} school_bushfire_risk`);

  // Drop the bushfire_history table if it exists first
  await client.sql`
        DROP TABLE IF EXISTS bushfire_history;
      `;

  // Create bushfire_history table
  await client.sql`
      CREATE TABLE IF NOT EXISTS bushfire_history (
        id SERIAL PRIMARY KEY,
        firetype VARCHAR(50) NOT NULL,
        season INT,
        fire_no VARCHAR(50),
        name VARCHAR(255),
        start_date VARCHAR(50),
        strtdatit VARCHAR(50),
        treat_type VARCHAR(50),
        firekey VARCHAR(50),
        dse_id VARCHAR(50),
        cfa_id VARCHAR(50),
        area_ha FLOAT,
        latitude DOUBLE PRECISION,
        longitude DOUBLE PRECISION
      );
      `;
  console.log("Created bushfire_history table");

  const bushfireHistoryData = await parseCSV("./bushfire_history.csv");

  const bushfireHistoryPromises = bushfireHistoryData.map((history) => {
    console.log("Inserting record:", {
      firetype: history["FIRETYPE"],
      season: parseInt(history["SEASON"], 10),
      fire_no: history["FIRE_NO"],
      name: history["NAME"],
      start_date: history["START_DATE"],
      strtdatit: history["STRTDATIT"],
      treat_type: history["TREAT_TYPE"],
      firekey: history["FIREKEY"],
      dse_id: history["DSE_ID"],
      cfa_id: history["CFA_ID"],
      area_ha: history["AREA_HA"],
      latitude: history["latitude"],
      longitude: history["longitude"],
    });

    return client.sql`
        INSERT INTO bushfire_history (
          firetype,
          season,
          fire_no,
          name,
          start_date,
          strtdatit,
          treat_type,
          firekey,
          dse_id,
          cfa_id,
          area_ha,
          latitude,
          longitude
        ) VALUES (
          ${history["FIRETYPE"]},
          ${parseInt(history["SEASON"], 10)},
          ${history["FIRE_NO"]},
          ${history["NAME"]},
          ${history["START_DATE"]},
          ${history["STRTDATIT"]},
          ${history["TREAT_TYPE"]},
          ${history["FIREKEY"]},
          ${history["DSE_ID"]},
          ${history["CFA_ID"]}, 
          ${history["AREA_HA"]},
          ${history["latitude"]},
          ${history["longitude"]}
        );
      `;
  });

  const bushfireHistoryResults = await Promise.all(bushfireHistoryPromises);
  console.log(
    `Seeded ${bushfireHistoryResults.length} bushfire_history records`
  );

  return {
    // createRiskCategoriesTable,
    // seededRiskCategories: riskCatResults.length,
    // seededSchools: schoolResults.length,
    // seededSchoolBushfireRisk: schoolRiskResults.length,
    seededBushfireHistory: bushfireHistoryResults.length,
  };
}

async function main() {
  const client = await db.connect();
  try {
    await seed(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error("Error seeding the database:", err);
});
