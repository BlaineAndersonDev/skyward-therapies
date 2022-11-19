# Skyward Therapies
> Originally Created: March 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev)
> Updated: Oct 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev)
> Updated: July 2021 by [Blaine Anderson](https://github.com/BlaineAndersonDev)
> Last Updated: Nov 2022 by [Blaine Anderson](https://github.com/BlaineAndersonDev)

#### Digital Ocean Setup:
  * Create a base droplet with minimal specs (using SSH).
  * Clone project into the root of the droplet.
  * At droplet root, use the following terminal commands on first setup:
    * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
    * `sudo apt-get install -y nodejs`
    * `sudo apt-get install -y build-essential`
    * `npm i -g pm2`
    * `npm i -g serve` (Default port is `8080`)
    * Now `cd` into your App
    * `npm install`
    * Using my custom script:
      * `npm run cloud`
    * OR Using basic commands:
      * `npm run build`
      * `pm2 serve build`
    * At this point, the newly built app should be running on port `8080`
      * `<Ip>:8080`
    * Done!

#### Namecheap DNS Setup:
  * *We do this before setting up the actual HTTP / HTTPS because it takes some time to propagate the DNS.*
  * [Digial Ocean / Namecheap Guide](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars)
  * Use an A record: [Guide](https://www.digitalocean.com/docs/networking/dns/how-to/manage-records/)
  * Propagation takes a while. Consider doing something while you wait about 30 minutes up to 48 hours.

#### Nginx(HTTP) & Certbot(HTTPS) Setup:
  * The Nginx section is based off the guide provided [here](https://blog.usejournal.com/setting-up-a-ufw-secured-nginx-reverse-proxy-with-http-authentication-and-tls-certificates-from-b1103d67779f).
  * Install Nginx (added security, and allows use of specific ports. I.E. 5000)
    * `sudo apt-get install nginx` (If prompted, input `yes`)
  * We now need to alter the default Nginx file located at '~/etc/nginx/sites-available/default'
  * Paste the following setup OVER whats in by default, making the specified changes below:
    * 'server_name': The actual domain name that you have your DNS A Record pointed to.
    * 'proxy_pass': The exact HTTP address that should be used. Actual IP and Port are required.
  ```
  server {
          listen 80;
          server_name <ActualDomainName(I.E. skywardtherapies.com)>;

          location / {
                  proxy_pass <ActualIpAndPort(I.E. http://167.71.152.102:8080/)>;
                  proxy_redirect off;
                  proxy_set_header Host $http_host;
                  proxy_set_header X-Real-IP $remote_addr;
                  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection “upgrade”;
          }
  }
  server {
          listen 443 ssl;
          server_name <ActualDomainName(I.E. skywardtherapies.com)>;

          location / {
                  proxy_pass <ActualIpAndPort(I.E. http://167.71.152.102:8080/)>;
                  proxy_set_header Host $http_host;
                  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                  proxy_set_header X-Forwarded-Proto $scheme;
                  proxy_buffering off;
          }
  }
  ```
  * Now that we have all of our setup for Nginx done, we can implement Certbot!
    * Follow the instructions on [Certbot](https://certbot.eff.org/instructions).
    * After Certbot inserts its changes into your default file for Nginx, it should look similiar to this:
    ```
    server {
        if ($host = skywardtherapies.com) {
            return 301 https://$host$request_uri;
        } # managed by Certbot

            listen 80;
            server_name skywardtherapies.com;

            location / {
                    proxy_pass http://167.71.152.102:8080/;
                    proxy_redirect off;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header Upgrade $http_upgrade;
                    proxy_set_header Connection “upgrade”;
            }
    }
    server {
            listen 443 ssl;
            server_name skywardtherapies.com;

            location / {
                    proxy_pass http://167.71.152.102:8080/;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header X-Forwarded-Proto $scheme;
                    proxy_buffering off;
            }

        ssl_certificate /etc/letsencrypt/live/skywardtherapies.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/skywardtherapies.com/privkey.pem; # managed by Certbot
    }
    ```
    * After implementing Certbot, the site should be accessible using both HTTP & HTTPS (HTTP should push the user to HTTPS).
