DROP DATABASE fakeGitHub2;
CREATE DATABASE fakeGitHub2;
USE fakeGitHub2;

CREATE TABLE info (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user VARCHAR(50) NOT NULL,
  repourl VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO info (user, repourl) VALUES ('John Smith', 'www.johnsmith.com/repo1');
INSERT INTO info (user, repourl) VALUES ('John Smith', 'www.johnsmith.com/repo2');