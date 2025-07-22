-- Migration number: 0001 	 2025-06-19T18:13:02.648Z
CREATE TABLE IF NOT EXISTS downloads (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    url TEXT NOT NULL,
    status TEXT NULL,
    metadata TEXT NULL,
    create_date DATETIME NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
);
