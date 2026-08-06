const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const server = fs.readFileSync(path.join(root, 'server.js'), 'utf8');
const hearth = fs.readFileSync(path.join(root, 'hearth-prototype.js'), 'utf8');
const dashboard = fs.readFileSync(path.join(root, 'dashboard.html'), 'utf8');

test('timezone is a durable executive preference with a dedicated API', () => {
  assert.match(server, /function validIanaTimeZone/);
  assert.match(server, /async function saveExecutiveTimezone/);
  assert.match(server, /app\.get\('\/api\/val\/preferences\/timezone'/);
  assert.match(server, /app\.post\('\/api\/val\/preferences\/timezone'/);
  assert.match(server, /timezone:validIanaTimeZone\(input\.timezone\)\|\|executiveTimeZone\(\)/);
});

test('saved timezone governs calendar, scheduling, and Board timing', () => {
  assert.match(server, /outlook\.timezone="\$\{executiveTimeZone\(\)\}"/);
  assert.match(server, /timeZone:executiveTimeZone\(\)/);
  assert.match(server, /currentBoardBriefingSlot\(\{now,timeZone:executiveTimeZone\(\)\}\)/);
  assert.match(server, /await getBabyStudioSettings\(\)\.catch\(\(\)=>null\);/);
  assert.doesNotMatch(server, /timeZone:CLIENT_CONFIG\.timezone/);
});

test('VAL Setup and command center both expose the timezone selector', () => {
  assert.match(hearth, /data-val-executive-timezone/);
  assert.match(hearth, /VAL uses this for greetings, calendars, scheduled work, and Board briefings/);
  assert.match(hearth, /hourInExecutiveTimezone/);
  assert.match(dashboard, /id="babyStudioTimezone"/);
  assert.match(dashboard, /timeZone:VAL_CONFIG\.timezone/);
});
