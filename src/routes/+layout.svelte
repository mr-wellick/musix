<script>
  import Sidebar from "$lib/+sidebar.svelte";
import "../app.css";
</script>

<div class="grid grid-cols-12">
    <div class="col-span-2">
        <Sidebar />
    </div>

    <div class="col-span-9">
        <slot></slot>
    </div>

    <div class="col-span-1">
        <slot></slot>
    </div>
</div>
