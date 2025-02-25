CREATE DATABASE IF NOT EXISTS social_network;

USE social_network;

-- Users table creation (as described previously)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,                -- Unique user identifier
    email VARCHAR(255) NOT NULL UNIQUE,                -- Email, unique and cannot be null
    username VARCHAR(255) NOT NULL UNIQUE,             -- Username, unique and cannot be null
    password_hash VARCHAR(255) NOT NULL,               -- Password hash
    verification_code VARCHAR(255),                    -- Verification code for account activation
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    -- Date and time when the account was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Date and time of the last update
    deleted_at TIMESTAMP NULL DEFAULT NULL,            -- Date and time when the account was deleted (soft delete)
    CONSTRAINT email_unique UNIQUE (email),           -- Ensure email uniqueness
    CONSTRAINT username_unique UNIQUE (username)      -- Ensure username uniqueness
);

-- Posts table creation
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,                -- Unique post identifier
    user_id INT NOT NULL,                              -- Foreign key referencing the user who made the post
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    -- Date and time when the post was created
    is_anonymous BOOLEAN DEFAULT FALSE,                -- Boolean flag to determine if the post is anonymous
    post_content TEXT NOT NULL,                        -- The content of the post (text)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Date and time of the last update
    deleted_at TIMESTAMP NULL DEFAULT NULL,            -- Date and time when the post was deleted (soft delete)
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, -- Foreign key constraint on user_id
    CONSTRAINT check_content_length CHECK (CHAR_LENGTH(post_content) <= 280)  -- Optional: Limit post content to 280 characters (like Twitter)
);

