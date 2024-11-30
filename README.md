# Homework

## #<a id="title1"> Список знакомых команд git на данный момент</a>

## Инициализация

1. `git init` - инициализирует работу и создает репозиторий .git в корне

## Конфигурация

1. `git config (--global) user.name` - локально (глобально) устанавлиет имя пользователя проекта
2. `git config (--global) user.email` - локально (глобально) устанавливает элетронный адрес пользователя проекта
3. `git config --unset user.name` - удаляет локальное имя пользователя
4. `git config --unset user.email` - удаляет локальное имя пользователя
5. `git config --remove-section user` - удаляет секцию пользователя из конфигурации
6. `git config --global alias.c 'config --global'` - установка алиаса для команд
7. `git config alias.sayHI '!echo "hello"; echo "from git"'` - установка алиаса для ряда комманд
8. `git [...] -h` - Все опции комманды с описаниями
9. `git help [...]` - Вызов помощника по определенной команде
10. `git config --list (--global)` - выводит параметры из всех конфигов (только глобальных)

## LESS

1. <kbd>/</kbd> - поиск по строке
2. <kbd>n</kbd> - поиск вперед
3. <kbd>Shift</kbd>+ <kbd>n</kbd> - поиск назад
4. <kbd>q</kbd> - выход из LESS

## Отслеживание

1. `tree -a` - Выводит древо каталога
2. `cat .git/config` - выводит содержимое файла (в данном случае .git/config)
3. `git status` - Вывод информации о состоянии рабочих файлов в проекте
4. `chmod +x/-x [...]` - Изменение исполнимости файла (для UNIX-систем)
5. `git update-index` --chmod=+x index.html - поставить исполнимый бит файлу напрямую в индексе (для UNIX-систем)
6. `git show [не менее 5 символов в начале коммита]` - показывает детали коммита (автор файла, автор коммита, даты изменений, название коммита и его содержание)

## Добавление

1. `git add [...]` - добавляет файл из рабочей директории в Индекс и начинает отслеживать (индксирует его)
2. `git add .` - добавляет все изменения в каталог
3. `git commit (-m "Описание изменения")` - Записывает информацию в репозиторий (при использовании флага -m без открытиия редактора)
4. `git add -f [...]` - форсированное применение команды (флаг -f позволяет индексировать игнорируемые файлы)
5. `git reset HEAD [...]` - сьрасывает изменения в Индексе для [...]
6. `git add -p [...]` - Построчное добаление изменений в Индекс
7. `git commit --all -m 'message'` - Перенос **ВСЕХ** отслеживаемых рабочих файлов в репозиторий. Шаг с индексом производится невидимо. (не рекомендуется)
8. `git commit -m "message" .[путь к файлу]` - Перенос отслеживаемого файла в репозиторий. Шаг с индексом производится невидимо. (не рекомендуется)
9. `alias.commitall '!git add .; git commit'` - алиас для переноса **ВСЕХ** рабочих файлов в текущей директории репозиторий. Шаг с индексом производится невидимо.
10. `alias.commitall '!git add -A; git commit'` - алиас для переноса **ВСЕХ** рабочих файлов проекта в репозиторий. Шаг с индексом производится невидимо.

## Удаление

1. `git add [...] после удаления файла из директории` - индексирует удаление файла и позволяет его закоммитить
2. `git rm [...]` - удаление конкретного файла
3. `git rm -r [...]` - Удаление директории
4. `git rm -r --cached [...]` - Удаляет директорию из индекса, но оставляет в рабочем каталоге (git add [...] может поаторно индексировать директорию)

## Переименование

1. `git mv [file1] [file2]` - Переименовывает _файл 1_ в файл с названием _файл 2_. Шаг с индексом производится невидимо.

## Флаги

- --global - Воздействует на все проекты в рамках пользователя системой
- --unset - Убирает установленное значение
- --cached - Сохраняет файлы в рабочей директории
- -f/ --force - Игнорирует предупреждения

[Перейти к началу](#title1)
