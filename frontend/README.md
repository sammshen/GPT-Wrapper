***Front-End Configuration***

Make sure to change the port in the `fetch` call in `script.js` to the correct port of your backend.

nginx configuration on a Linux Server

`sudo apt update`

`sudo apt install nginx`

`sudo mv /root/GPT-Wrapper/frontend/* /var/www/html/`

`vim /etc/nginx/sites-available/gpt-wrapper` (or whatever editor you use)

Modify this configuration: (the root should be the path to your GPT-Wrapper/frontend folder with the front end code)

`server {
    listen 80;
    server_name your_domain_or_IP;

    location / {
        root root/GPT-Wrapper/frontend/;
        index index.html;
    }
}`



