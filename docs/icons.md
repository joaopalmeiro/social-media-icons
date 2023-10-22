<script setup>
// https://vitejs.dev/guide/features.html#static-assets
import behance from "../icons/behance.svg?raw";
import dev from "../icons/dev.svg?raw";
import discord from "../icons/discord.svg?raw";

import Icon from "./components/Icon.vue";

// console.log(behance, typeof behance);
</script>

# Icons

|                            | Name    | Filename      |
| -------------------------- | ------- | ------------- |
| <Icon :svgRaw="behance" /> | Behance | `behance.svg` |
| <Icon :svgRaw="dev" />     | DEV     | `dev.svg`     |
| <Icon :svgRaw="discord" /> | Discord | `discord.svg` |
