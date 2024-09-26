<script lang="ts">
  import { scaleTime } from "d3-scale";
  import dayjs from "dayjs";

  const currentDay = dayjs(Date.now());
  const militaryTime = [currentDay.hour(0).toDate(), currentDay.hour(23).toDate()];

  const yScale = scaleTime(militaryTime, [0, 500]);
  console.log(yScale.domain());
</script>

<div>svg grid goes here</div>
