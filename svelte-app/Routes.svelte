<script>
  import { Router, Route, Link } from "svelte-routing";
  import Welcome from "./routes/Welcome.svelte";
  import SampleNestedPage from "./routes/SampleNestedPage.svelte";
  import NotFound from "./routes/NotFound.svelte";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";
</script>

<Router {url}>
  <h1>Django + Svelte + Webpack</h1>
  <Route path="sample-nested-page" component={SampleNestedPage} />
  <Route path="/" component={Welcome} />
  <Route component={NotFound} />
</Router>
