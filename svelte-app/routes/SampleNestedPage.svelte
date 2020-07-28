<script>
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
    To do that, for every route we create on the frontend (this one, for
    example), we need to create a mirror on the backend. It points to the same
    html as the index one. Please, take a look at your `urls.py` to see how
    it&apos;s done. :D
  </p>
  <p>
    <Link to="/">Back to home.</Link>
  </p>
</main>
