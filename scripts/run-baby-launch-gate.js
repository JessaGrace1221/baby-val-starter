const { spawnSync } = require('node:child_process');
const path = require('node:path');

const root = path.join(__dirname, '..');
const tests = [
  'test/babyValEdition.test.js',
  'test/tenantApiKeyVault.test.js',
  'test/valEnvironments.test.js',
  'test/valBoardPackets.test.js',
  'test/valObserverEvidence.test.js',
  'test/valEvidenceQualifiedObserverReview.test.js',
  'test/valSourceObserverMatrix.test.js',
  'test/valLiveSourceIngress.test.js',
  'test/valExecutiveInbox.test.js',
  'test/valExecutiveInboxAdmission.test.js',
  'test/valTranscriptIntelligence.test.js',
  'test/transcriptIntelligenceIndex.test.js',
  'test/transcriptTabRegression.test.js',
  'test/contextualChat.test.js',
  'test/witnessingPacketMap.test.js',
  'test/valDocuments.test.js',
  'test/valSourceProcessing.test.js',
  'test/valIntelligenceSpine.test.js',
  'test/valConversationIdentity.test.js',
  'test/valEnvelopes.test.js',
  'test/valCoworkContextAudit.test.js'
];

const result = spawnSync(process.execPath, ['--test', ...tests], {
  cwd: root,
  stdio: 'inherit'
});

process.exit(result.status ?? 1);
