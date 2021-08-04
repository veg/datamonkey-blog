---
title: Lab Note
author: Steven Weaver
date: 2021-8-4
---

<div id="value"></div>
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@stevenweaver/sars-cov-2-research-contributions.js?v=3";
const inspect = Inspector.into("#value");
(new Runtime).module(define, name => inspect());
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@3/dist/inspector.css"/>
