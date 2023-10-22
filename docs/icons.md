<script setup>
// https://vitejs.dev/guide/features.html#static-assets
import behance from "../icons/behance.svg?raw";
import dev from "../icons/dev.svg?raw";
import discord from "../icons/discord.svg?raw";
import dribbble from "../icons/dribbble.svg?raw";
import github from "../icons/github.svg?raw";
import instagram from "../icons/instagram.svg?raw";
import linkedin from "../icons/linkedin.svg?raw";
import mastodon from "../icons/mastodon.svg?raw";
import npm from "../icons/npm.svg?raw";

import Icon from "./components/Icon.vue";

// console.log(behance, typeof behance);
</script>

# Icons

|                              | Name      | Filename        |
| ---------------------------- | --------- | --------------- |
| <Icon :svgRaw="behance" />   | Behance   | `behance.svg`   |
| <Icon :svgRaw="dev" />       | DEV       | `dev.svg`       |
| <Icon :svgRaw="discord" />   | Discord   | `discord.svg`   |
| <Icon :svgRaw="dribbble" />  | Dribbble  | `dribbble.svg`  |
| <Icon :svgRaw="github" />    | GitHub    | `github.svg`    |
| <Icon :svgRaw="instagram" /> | Instagram | `instagram.svg` |
| <Icon :svgRaw="linkedin" />  | LinkedIn  | `linkedin.svg`  |
| <Icon :svgRaw="mastodon" />  | Mastodon  | `mastodon.svg`  |
| <Icon :svgRaw="npm" />       | npm       | `npm.svg`       |
