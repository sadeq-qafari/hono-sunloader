-- Migration number: 0003    2025-08-01T23:50:00Z
-- Make start_date and end_date columns nullable
DROP TABLE downloads;

CREATE TABLE downloads (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    url TEXT NOT NULL,
    status TEXT NULL,
    progress REAL NULL,
    metadata TEXT NULL,
    create_date DATETIME NOT NULL,
    start_date DATETIME NULL,
    end_date DATETIME NULL
);
