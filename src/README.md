<p align="center">
  <a href="https://www.brighthr.com">
    <img alt="Bright favicon" src="./images/favicon.png" width="60" />
  </a>
</p>
<h1 align="center">
    Progression at Bright
</h1>

This is a static site that displays the progression frameworks that Bright use internally for our staff 🙌

It's built in Gatsby, and deployed using Netlify.

## 🚀 Quick start

You'll need the Gatsby CLI on your machine, so if you don't have it, install it!
``` sh
npm install --global gatsby-cli
```

Next, navigate to the `progression-framework` directory and use yarn to get everything installed

``` sh
cd progression-framework
npm install
```

If you're developing locally, you can start up the site locally with hot loading ⚡
``` sh
npm start
```
Which runs (`gatsby develop`)

Finally, you can build everything into a set of static files 🛠️
``` sh
npm build
```
Which runs (`gatsby build`)
Reason why I'm not using ` Yarn `to instal the node_modules is there is a strange issue when downloading and running the `Sharp` package using our network. 🤷🏽‍♂️ 