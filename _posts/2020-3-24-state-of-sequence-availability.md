---
title: State of COVID-19 Sequence Availability
author: Steven Weaver
date: 2020-3-24
---

The following is sourced from [ObservableHQ](https://api.observablehq.com/@stevenweaver/case-vs-sequence-count)

<div id="value"></div>
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@stevenweaver/case-vs-sequence-count.js?v=3";
const inspect = Inspector.into("#value");
(new Runtime).module(define, name => inspect());
</script>

