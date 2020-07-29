<script lang="ts">
  import { Link } from "svelte-routing";
  import welcomeMessage from "../stores/welcomeMessage.store.ts";
  import { onMount } from "svelte";

  onMount(() => {
    welcomeMessage.fetchMessage();
  });
</script>

<svelte:head>
  <title>DSW - Welcome!</title>
</svelte:head>

<main class="welcome">
  <h1 class="welcome__title">Welcome to our app!</h1>
  <p>
    Now, you may edit the routes on the `Routes.svelte` file and/or edit this
    file to start developing your app :]
  </p>
  {#await $welcomeMessage}
    <p>Welcome message is being fetched from the api...</p>
  {:then $welcomeMessage}
    <p class="welcome__message">{$welcomeMessage}</p>
  {/await}
  <p>
    To understand a bit better about routing, take a look at our
    <Link to="/sample-nested-page/">sample nested page</Link>
    .
  </p>
</main>
