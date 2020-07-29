# django-svelte

This is a template for django-svelte apps. For simplicity and better integration with django, we used the webpack version of svelte's template.

It has typescript and sass enabled by default, together with integration with django's urls and static files handling.

It's still on beta, so expect little bugs to happen. They shouldn't, but if they pop up, add an issue and we'll get right to it!

## Setup

The easiest way to get started with this boilerplate is to run:

```sh
npx degit lucianoratamero/django-svelte my-app
```

It downloads the current code and removes the git folder, so you can get started right away!

Before installing the dependencies and running the code, you'll need an active python3 virtualenv. You may set it up with `python3 -m venv my-app` and activate it with `source my-app/bin/activate`. Then, go inside the project folder.

We use NVM, so if you use other solutions (or none) to manage node environments, you'll need install the dependencies manually (via `npm install --dev` and `pip install -r requirements`).

But if you're fine using NVM, just run `make install_dependencies`. It will do everything for you.

Then, finally, copy the `env.example` file to a `.env` file and review the environment variables for better security.

If everything went right, you should be able to use `npm run dev` to have a server running at `localhost:8000`. Visit that on your browser to make sure everything is working <3


## Postinstall

There are a couple of things we suggest you do after installing the boilerplate.

You may want to:

- start a new git repository;
- add `nvm use` to the end of your `bin/activate` script, so that you're always using nvm whenever the virtualenv is active;
- check `project/settings.py` for variables that need to be customized (PWA related, for example).

## Powered by

- Django: https://www.djangoproject.com/
- Svelte: https://svelte.dev/
- Typescript: https://www.typescriptlang.org/
- SASS: https://sass-lang.com/
- Webpack: https://webpack.js.org/
- Workbox: https://developers.google.com/web/tools/workbox
