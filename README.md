# Discord Widget
## Code Snippet
    <script type="text/javascript" src="//cdn.jsdelivr.net/gh/restingcoder/discord-widget@1.1/discord-widget.min.js"></script>
    <script type="text/javascript">
        discordWidget.init({
            serverId: '51143782082543616',
            title: 'Discord Widget Title',
            join: true,
            joinText: 'Join Server',
            alphabetical: false,
            theme: 'light',
            hideChannels: ['Channel Name 1', 'Channel Name 2'],
            showAllUsers: true,
            allUsersDefaultState: true,
            showNick: false,
            userName: '',
            useCDN: true
        });
        discordWidget.render();
    </script>
    <div class="discord-widget"></div>

## Usage
Paste the snippet above into your site, and change the `serverId` parameter.

## Screenshot
![](http://i.imgur.com/6zRoK2V.png)

## Changelog
#### 1.2
##### New Features
* Added option to set join button text. (joinText: 'Join Server')
* Added option to set default username. (userName: '')
* Added option to choose if CDN is used or not (e.g. for css themes). (useCDN: true)


#### 1.1
##### New Features
* Added option to hide all channels and only show online users. (hideChannels: true)


#### 1.0
##### New Features
* Added version info to the widget to make troubleshooting issues on user sites easier.
* Started this changelog.

##### Bug Fixes
* N/A

## Help
If you run into trouble, let me know [here](https://github.com/RestingCoder/discord-widget/issues).
