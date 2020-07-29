<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<svelte:head>
  <title>DRW - Sample Nested Page</title>
</svelte:head>

<main class="sample-nested-page">
  <h1>Welcome to our sample nested page!</h1>
  <p>It exists so we can discuss one thing: routing.</p>
  <p>
    Since this is a SPA inside a django app, we end up having routing both in
    the backend (django) and the frontend (svelte-routing); so we need to keep
    them both in sync.
  </p>
  <p>
    To do that, django handles all requests, but all 404 cases are redirected to
    the svelte app, so we can put a 404 message with the frontend.
  </p>
  <p>
    <Link to="/">Back to home.</Link>
  </p>
</main>
