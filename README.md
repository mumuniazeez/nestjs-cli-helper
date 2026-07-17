# Nestjs Module Installation Helper

A CLI script that allows you to easily install official Nestjs Modules on the in your Nestjs project seamlessly.

## Features

- List all Nestjs Modules
- Install Nestjs Modules
- Get info about your Nestjs Project

## Usage

You can run this CLI without installing it on your machine,

```bash
npx @azcodes/nestjs-cli-helper
```

If you prefer to install it

```bash
npm install -g @azcodes/nestjs-cli-helper
```

## Command Avialable

### List all Nestjs Module

```bash
nestjs-helper list
```

That will list all Modules on the Nestjs Documentation

### Install modules

```bash
nestjs-helper install
```

That will list all modules, you can select the ones you want to install and
select which package manager you want to use to install it.

### Info

```bash
nestjs-helper info
```

This will show the current the current Nestjs CLI Version, along side all official nestjs modules you have already installed.

## Contributing
Feel free to create a PR or raise an issue.

## License
MIT

## AI Usage Disclosure

AI wasn't used in this project at all. I only used claude to get a list of all Nestjs modules, and wrote the JSON format for them in t