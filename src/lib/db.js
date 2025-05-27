// src/lib/db.js
import turso from 'lib/turso'; // Make sure you create this file (example below)

// Function to get all slugs
export async function getSlugs() {
  try {
    const result = await turso.execute({
      sql: 'SELECT slug FROM pages',
    });
    return result.rows.map(row => row.slug);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
}

// Function to delete a page by ID
export async function deletePageById(id) {
  try {
    const result = await turso.execute({
      sql: 'DELETE FROM pages WHERE id = ?',
      args: [id],
    });

    // Turso returns number of changes
    if (result.rowsAffected === 0) {
      return null;
    }
    return { success: true };
  } catch (error) {
    console.error('Error deleting page:', error);
    throw error;
  }
}
