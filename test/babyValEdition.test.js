const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const server = fs.readFileSync(path.join(root, 'server.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'hearth-prototype.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'hearth-prototype.css'), 'utf8');
const client = fs.readFileSync(path.join(root, 'hearth-prototype.js'), 'utf8');
const environmentRoutes = fs.readFileSync(path.join(root, 'services', 'valEnvironmentsRoutes.js'), 'utf8');

test('Baby VAL is the default governed edition', () => {
  assert.match(server, /process\.env\.VAL_EDITION \|\| 'baby'/);
  assert.match(server, /babyValEdition:BABY_VAL_EDITION/);
  assert.match(html, /<body class="baby-val-edition">/);
});

test('Baby VAL keeps the approved visible foundation surfaces', () => {
  assert.match(html, /observer-board-button/);
  assert.match(html, /class="baby-witnessing-cta"[^>]*data-val-witnessing-action="true"[^>]*data-workflow-action="valWitnessingResume"[\s\S]*Witnessing Session/);
  assert.match(html, /Executive Inbox/);
  assert.match(html, /Transcripts/);
  assert.match(html, /cowork-notebook/);
  assert.match(html, /Open VAL Studio/);
  assert.match(html, /data-val-drawer-connections/);
});

test('Witnessing has one permanent prominent navigation label', () => {
  assert.match(css, /body\.baby-val-edition \.baby-witnessing-cta/);
  assert.doesNotMatch(html, />Continue Witnessing<\/button>/);
  assert.match(client, /const actionLabel = 'Witnessing Session'/);
  assert.doesNotMatch(client, /data-workflow-action="valWitnessingResume">Continue Witnessing<\/button>/);
});

test('Baby VAL hides non-foundation functions and disables voice', () => {
  for (const selector of [
    '.project-drawer-link',
    '.relationship-drawer-link',
    '.source-drawer-link',
    '[data-workspace-tool="voice"]'
  ]) {
    assert.ok(css.includes(`body.baby-val-edition ${selector}`), `${selector} must be hidden in Baby VAL`);
  }
  assert.match(server, /Voice is not included in Baby VAL/);
  assert.match(client, /if\(!clientFeatureLocks\.voiceEnabled\) return/);
});

test('Baby VAL includes governed Environment sharing and importing', () => {
  assert.match(environmentRoutes, /\/api\/val\/environments\/:id\/export/);
  assert.match(environmentRoutes, /\/api\/val\/environments\/import/);
  assert.match(client, /Share Environment/);
  assert.match(client, /Import Environment/);
});

test('Anthropic is available in encrypted VAL Connections', () => {
  assert.match(server, /id:'anthropic'/);
  assert.match(server, /\['openai','anthropic','outscraper'\]/);
  assert.match(client, /Anthropic API key/);
});

test('Baby VAL updates existing Postgres data additively', () => {
  assert.match(server, /create table if not exists val_transcripts/i);
  assert.match(server, /create table if not exists tenant_api_keys/i);
  assert.match(server, /add column if not exists/i);
  assert.match(server, /app\.delete\('\/api\/val\/clean-start',requirePermission\('data:delete'\)/);
});
