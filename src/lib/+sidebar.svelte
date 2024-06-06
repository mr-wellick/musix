<script lang="ts">
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let value = format(date);
    let dayOfWeek = days[date.getDay()];
    let dayOfMonth = date.getDate();

    function handleDateUpdate(event: Event){
        date = (event.target as HTMLInputElement).valueAsDate!
        value = format(date);
        dayOfWeek = days[date.getDay()];
        dayOfMonth = date.getDate();
    }

    function format(date: Date) {
        return date.toISOString().replace(/T.*/,'').split('-').join('-');
    }
</script>

<h1 class="p-2 text-center">
    Musix
</h1>

<div class="flex flex-col items-center">
    <p>{dayOfWeek}</p>
    <div class="text-9xl">{dayOfMonth}</div>
</div>

<label for="start">
    <input
        bind:value
        on:change={handleDateUpdate}
        type="date"
        id="start"
        name="trip-start"
    />
</label>
