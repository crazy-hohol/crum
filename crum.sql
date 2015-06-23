-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Чрв 23 2015 р., 15:33
-- Версія сервера: 5.5.40-0ubuntu0.14.04.1
-- Версія PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База даних: `crum`
--

-- --------------------------------------------------------

--
-- Структура таблиці `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп даних таблиці `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2015_01_28_221642_create_tickets_table', 1),
('2015_05_10_185613_add_check_list', 2),
('2015_06_13_094458_create_users_table', 3);

-- --------------------------------------------------------

--
-- Структура таблиці `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `who_add` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблиці `tickets`
--

CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(10) unsigned NOT NULL,
  `story` int(10) unsigned DEFAULT NULL,
  `priority` int(11) NOT NULL DEFAULT '0',
  `assigned` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `checklist` longtext COLLATE utf8_unicode_ci NOT NULL,
  `project_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

--
-- Дамп даних таблиці `tickets`
--

INSERT INTO `tickets` (`id`, `created_at`, `updated_at`, `title`, `text`, `status`, `story`, `priority`, `assigned`, `checklist`, `project_id`) VALUES
(1, '2015-01-31 19:56:06', '2015-04-06 02:24:37', 'Внедрить SASS', 'Внедрить SASS. Переверстать доску тикетов и форму просмотра\\редактирования тикета', 2, NULL, 0, '', '', 0),
(2, '2015-01-31 22:32:46', '2015-06-06 18:47:02', 'Реализовать груперовку тикетов по истории', 'Реализовать груперовку тикетов по истории. Создать отдельную таблицу со связью на тикеты. реализовать интерфейс создания и редактирования истории. Реализовать смену истории в тикете', 2, NULL, 0, '', '[{"text":"test","done":0},{"text":"333","done":1},{"text":"test22","done":0}]', 0),
(3, '2015-02-09 02:27:04', '2015-02-09 02:27:04', 'aa', 'fff', 6, NULL, 0, '', '', 0),
(4, '2015-03-01 22:15:30', '2015-04-06 02:31:02', 'Реализовать удалени тикетов и перемещение в архив', 'Реализовать удалени тикетов и перемещение в архив', 2, NULL, 0, '', '', 0),
(5, '2015-03-01 23:10:03', '2015-04-06 02:29:02', 'Создать шаблон просмотра тикетов в виде списка', 'Создать вью списка тикетови шаблон', 2, NULL, 0, '', '', 0),
(6, '2015-03-01 23:10:33', '2015-05-13 00:02:07', 'Реализовать приоритеты тикетов', 'Реализовать приоритеты тикетов', 2, NULL, 0, '', '', 0),
(7, '2015-03-07 22:15:50', '2015-04-06 02:29:32', 'Редактирование и просмотр тикетаa', 'Используя Router создать страницу просмотра тикета. Создать механизм редактирование отдельных полей тикета на стр просмотра.', 5, NULL, 0, '', '', 0),
(8, '2015-04-05 20:23:16', '2015-05-08 19:31:28', 'Внедрить систему модулей amd RequireJS!', 'Внедрить систему модулей amd RequireLS\n\nhabrahabr.ru/post/209228/\nhttp://requirejs.org/docs/api.html#modulename\nstepansuvorov.com/blog/2012/10/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA-%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%B9-requirejs/\nhab', 5, NULL, 0, '', '', 0),
(14, '2015-06-06 21:42:28', '2015-06-13 18:23:46', 'Ввести сущность пользователя', '', 3, NULL, 0, '', '[{"text":"Создать таблицы users, projects","done":1},{"text":"Добавить страницу регестрацыи пользователя","done":0},{"text":"Добавить страницу авторизации и реализовать механизм авторизации и  его проверку ","done":0},{"text":"Создани проэкта","done":0},{"text":"Выбор проекта","done":0}]', 0),
(15, '2015-06-13 18:26:04', '2015-06-13 18:26:04', 'Спринт', 'Спринт', 2, NULL, 0, '', '', 0);

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_login_unique` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблиці `users_projects`
--

CREATE TABLE IF NOT EXISTS `users_projects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
