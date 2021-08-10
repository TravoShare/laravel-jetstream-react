# Laravel Jetstream Inertia + React

**⚠️ This repo is just an example of the post-installation result, click the repo below to see the installer ⚠️**

https://github.com/TravoShare/laravel-jetstream-react-installer

---

Components were remade almost 1-1 of the 1st party ones written in vue.

Changes:
- Files that were located in `Pages/{page}/Partials` are now in `Domains/{page}/`, chose this as a personal decision as I like to keep my `Pages/` folder contain only pages served by our app
- Added prettier config (for both js + php) to `package.json`

# Usage

See the code for the cli installer here

https://github.com/TravoShare/laravel-jetstream-react-installer

```bash
$ laravel new myapp --jet --stack=inertia
$ cd myapp
$ npx laravel-jetstream-react install

# works with teams
$ laravel new myapp --jet --stack=inertia --teams
$ cd myapp
$ npx laravel-jetstream-react install --teams
```

# Contributing

Since this is just an example of the final product, all issues/PR's will be accepted at the CLI repo below which handles the scaffolding.

https://github.com/TravoShare/laravel-jetstream-react-installer
