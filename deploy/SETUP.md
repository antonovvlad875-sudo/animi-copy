# Инструкция по деплою finx.bet на VPS

## Предварительные требования на сервере

SSH в ваш сервер:
```bash
ssh root@185.196.9.46
```

### 1. Установка Nginx

```bash
apt update
apt install nginx -y
systemctl start nginx
systemctl enable nginx
```

### 2. Установка SSL сертификата (Let's Encrypt)

```bash
# Установка certbot
apt install certbot python3-certbot-nginx -y

# Получение SSL сертификата
certbot --nginx -d finx.bet -d www.finx.bet

# Автообновление сертификата (опционально)
certbot renew --dry-run
```

### 3. Создание директории для сайта

```bash
mkdir -p /var/www/finx.bet
chown -R www-data:www-data /var/www/finx.bet
```

### 4. Настройка Nginx

После первого деплоя файл конфигурации будет автоматически скопирован в `/etc/nginx/sites-available/finx.bet`

Или вручную:
```bash
nano /etc/nginx/sites-available/finx.bet
# Вставьте содержимое из deploy/nginx.conf

# Создайте симлинк
ln -s /etc/nginx/sites-available/finx.bet /etc/nginx/sites-enabled/

# Проверьте конфигурацию
nginx -t

# Перезагрузите nginx
systemctl reload nginx
```

### 5. Настройка firewall (опционально)

```bash
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw enable
```

## Деплой с локальной машины

### Предварительные требования

1. Node.js и npm установлены
2. SSH доступ к серверу настроен

### Автоматический деплой

```bash
# Сделайте скрипт исполняемым
chmod +x deploy/deploy.sh

# Запустите деплой
./deploy/deploy.sh
```

### Ручной деплой

```bash
# 1. Соберите проект
npm run build

# 2. Скопируйте файлы на сервер
scp -r dist/* root@185.196.9.46:/var/www/finx.bet/dist/

# 3. Установите правильные права
ssh root@185.196.9.46 "chown -R www-data:www-data /var/www/finx.bet && chmod -R 755 /var/www/finx.bet"
```

## Проверка

После деплоя проверьте:
- HTTP: http://finx.bet (должен редиректить на HTTPS)
- HTTPS: https://finx.bet
- HTTPS с www: https://www.finx.bet

## Обновление сайта

Просто запустите скрипт деплоя снова:
```bash
./deploy/deploy.sh
```

## Логи Nginx

```bash
# Ошибки
tail -f /var/log/nginx/error.log

# Доступ
tail -f /var/log/nginx/access.log
```

## Troubleshooting

### Nginx не запускается
```bash
nginx -t  # проверить конфигурацию
systemctl status nginx  # статус
journalctl -xe  # посмотреть логи
```

### Сайт не открывается
1. Проверьте DNS записи (уже настроены на 185.196.9.46)
2. Проверьте firewall: `ufw status`
3. Проверьте nginx: `systemctl status nginx`
4. Проверьте логи: `tail -f /var/log/nginx/error.log`

### SSL сертификат не работает
```bash
certbot certificates  # проверить статус
certbot renew  # обновить сертификаты
```
