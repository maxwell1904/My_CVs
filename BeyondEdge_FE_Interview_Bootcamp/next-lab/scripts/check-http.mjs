import assert from "node:assert/strict";

const base = process.env.LAB_URL ?? "http://127.0.0.1:3001";
const page = await fetch(`${base}/catalog`);
assert.equal(page.status, 200);
const html = await page.text();
for (const name of ["City Workshop", "Pocket Garden", "Lunar Rover"])
  assert.ok(html.includes(name));
const ok = await fetch(`${base}/api/catalog`);
assert.equal(ok.status, 200);
assert.equal(ok.headers.get("cache-control"), "no-store");
assert.equal((await ok.json()).length, 3);
const empty = await fetch(`${base}/api/catalog?scenario=empty`);
assert.equal(empty.status, 200);
assert.deepEqual(await empty.json(), []);
const error = await fetch(`${base}/api/catalog?scenario=error`);
assert.equal(error.status, 503);
assert.equal((await error.json()).message, "Simulated service unavailable");
assert.equal((await fetch(`${base}/api/catalog?scenario=other`)).status, 400);
assert.equal(
  (await fetch(`${base}/api/catalog`, { method: "POST" })).status,
  405,
);
assert.equal((await fetch(`${base}/missing-page`)).status, 404);
console.log(
  "HTTP smoke passed: server HTML, success, empty, 503, 400, 405, 404.",
);
