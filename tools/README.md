# Tools

## Download Icons

(Since I'm bit lazy) This script allow us to download icons from [devicon repo](https://github.com/devicons/devicon).

### Add a new icon

* Go to [icon.json](../src/config/icons.json)
* Add a new item to the list (check on [devicon repo](https://github.com/devicons/devicon))
* Run `yarn update-icons`

Check on [assets/icons](../src/assets/icons) and [src/config/validicons.json](../src/config/validicons.json)

### How it works?

By using curl command, we check for the file existence and if it's true then we download it

Validate file command

```bash
curl -o /dev/null --silent -Iw '%{http_code}' https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg
```

Download command

```bash
curl https://raw.githubusercontent.com/devicons/devicon/master/icons/babel/babel-origial.svg > babel.svg
```

### How could I add a new icon?

(glad you ask)
Well, we just need to add a new item of the list follow object structure [here icons.json](../src/config/icons.json)
