create table todo_list (
`id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`content` varchar(100) NOT NULL DEFAULT '',
`list_status` varchar(100) NOT NULL DEFAULT '',
`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(`id`)
) ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARSET = utf8;