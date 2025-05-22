import pool from "./db";

export async function getProjectsWithTech() {
    const client = await pool.connect();
    try {
        const result = await client.query(`
      SELECT
        p.title,
        p.description,
        p.image,
        p.github_link,
        p.prod_link,
        json_agg(
          json_build_object('name', t.name, 'class', t.class)
        ) AS "techStack"
      FROM project p
      JOIN project_tech pt ON p.id = pt.project_id
      JOIN tech t ON pt.tech_id = t.id
      GROUP BY p.id
      ORDER BY p.id;
    `);
        return result.rows;
    } finally {
        client.release();
    }
}

export async function getAllTech() {
    const client = await pool.connect();
    try {
        const res = await client.query(`
      SELECT name, class FROM tech ORDER BY name;
    `);
        return res.rows;
    } finally {
        client.release();
    }
}