CREATE TABLE videos (
    id_video INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fk_author INT NOT NULL,
    title VARCHAR(30),
    likes INT NOT NULL,
    dislikes INT NOT NULL
);

INSERT INTO videos (fk_author, title, likes, dislikes) VALUES (1, 'MySQL', 10, 2);
INSERT INTO videos (fk_author, title, likes, dislikes) VALUES (1, 'HTML', 30, 1);
INSERT INTO videos (fk_author, title, likes, dislikes) VALUES (1, 'css', 18, 3);
INSERT INTO videos (fk_author, title, likes, dislikes) VALUES (2, 'JavaScript', 15, 8);
INSERT INTO videos (fk_author, title, likes, dislikes) VALUES (3, 'Python', 50, 0);

CREATE TABLE author (
    id_author INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    born DATE
);

INSERT INTO author (nome, born) VALUES ('Maria', '1992-04-19');
INSERT INTO author (nome, born) VALUES ('Pedro', '2000-10-12');
INSERT INTO author (nome, born) VALUES ('João', '1998-03-09');
INSERT INTO author (nome, born) VALUES ('Flávia', '2008-12-05');

ALTER TABLE videos ADD CONSTRAINT `fk_author` FOREIGN KEY(`fk_author`) REFERENCES `author` (`id_author`) ON DELETE CASCADE ON UPDATE CASCADE;

SELECT * FROM videos JOIN author ON videos.fk_author=author.id_author;

SELECT videos.title, author.nome FROM videos JOIN author ON video.fk_author = author.id_author;

INSERT INTO videos (fk_author, title, likes, dislikes) VALUES (3, 'PHP', 20, 8);

CREATE TABLE seo (
    id_seo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(20)
)

INSERT INTO seo (category) VALUES (front-end);
INSERT INTO seo (category) VALUES (back-end);

ALTER TABLE videos ADD fk_seo INT NOT NULL AFTER fk_author;
UPDATE TABLE videos SET fk_seo = 1 WHERE id_video in (2, 3, 4);
UPDATE TABLE videos SET fk_seo = 2 WHERE id_video in (1, 5, 6);

ALTER TABLE videos ADD CONSTRAINT fk_seo FOREIGN KEY (fk_seo) REFERENCES seo (id_seo);

SELECT videos.title, seo.category, author.nome FROM videos JOIN seo ON videos.fk_seo = seo.id_seo JOIN author ON videos.fk_author = author.id_author;

CREATE TABLE playlists (
    id_playlist INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL
);

ALTER TABLE playlists CHANGE title pl_title VARCHAR(30) NOT NULL;

INSERT INTO playlists (pl_title) VALUES ('HTML + CSS');
INSERT INTO playlists (pl_title) VALUES ('HTML + PHP + JS');
INSERT INTO playlists (pl_title) VALUES ('Python + JS');

CREATE TABLE videos_playlists (
    id_vp INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fk_videos INT NOT NULL,
    fk_playlist INT NOT NULL
);

INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (2, 1);
INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (3, 1);
INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (2, 2);
INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (6, 2);
INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (4, 2);
INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (5, 3);
INSERT INTO videos_playlists (fk_videos, fk_playlists) VALUES (4, 3);

ALTER TABLE videos_playlists ADD CONSTRAINT fk_videos FOREIGN KEY (fk_videos) REFERENCES videos (id_video);
ALTER TABLE videos_playlists ADD CONSTRAINT fk_playlists FOREIGN KEY (fk_playlists) REFERENCES playlists (id_playlist);

SELECT playlists.pl_title, videos.title, author.name FROM `playlists`
JOIN videos_playlists ON playlists.id_playlist = videos_playlists.fk_playlists 
JOIN videos ON videos.id_video = videos_playlists.fk_videos 
JOIN author ON videos.fk_author = author.id_author;

ALTER TABLE playlists ADD fk_pl_author INT NOT NULL AFTER id_playlist;

UPDATE playlists SET fk_pl_author = 4 WHERE playlists.id_playlist = 1;
UPDATE playlists SET fk_pl_author = 2 WHERE playlists.id_playlist in (2, 3);

ALTER TABLE playlists ADD CONSTRAINT fk_pl_author FOREIGN KEY (fk_pl_author) REFERENCES author (id_author);
