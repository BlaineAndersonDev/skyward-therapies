# Skyward Therapies
> Originally Created: March 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev)

> Last Updated: Oct 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev)

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
  * [Digial Ocean / Namecheap Guide](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars)
  * Use an A record: [Guide](https://www.digitalocean.com/docs/networking/dns/how-to/manage-records/)
  * Propagation takes a while. Consider doing something while you wait about 30 minutes up to 48 hours.
