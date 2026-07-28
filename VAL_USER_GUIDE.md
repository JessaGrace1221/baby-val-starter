# Baby VAL User Guide

Baby VAL is the foundation edition of VAL: a smaller, governed workspace for
understanding what is happening, preserving evidence, and building useful
executive Environments.

## Start Here

1. Open **VAL Setup**.
2. Start or resume **Witnessing** so VAL can understand how you work.
3. Open **Connections** and connect the sources you want VAL to use.
4. Review **Transcripts** and **Executive Inbox**.
5. Open the **Board of Observers** to inspect what each Observer noticed and
   why.
6. Use **Co-Work with VAL** when you want to reason through the available
   context in text.
7. Open **VAL Studio** to build, test, share, or import an Environment.

## The Visible Experience

### Board of Observers

The Board reviews admitted evidence through fourteen distinct lenses. An
Observer must either present a grounded observation with inspectable evidence
or state that it found no meaningful signal. The Board is not a decorative
summary layer.

Click an Observer to inspect what it is seeing, what evidence supports the
observation, and what it would explore with you.

### Executive Inbox

Executive Inbox surfaces admitted relationship and decision-bearing messages.
Use it to review important email context without treating every incoming
message as executive work.

### Transcripts

Transcripts preserves meeting evidence, key points, attendees, and action
items. Open a transcript to inspect the source rather than relying on a summary
without proof.

### Co-Work with VAL

Baby VAL includes text Co-Work. Use it to ask questions, examine evidence,
develop an idea, or decide what to do next. Voice is intentionally not included
in this edition.

### VAL Studio

VAL Studio turns a desired outcome into a governed Environment. The executive
chooses the outcome, participating Observers, sources, destinations, approval
boundaries, and what should happen when context is missing.

An Environment is tested against real history before it can become live.

## Sharing Environments

Use **Share Environment** to download a portable `.val-environment.json` file.
The file contains the governed workflow contract but excludes credentials,
private evidence, account mappings, approvals, receipts, and run history.

Use **Import Environment** to install a shared Environment. Imported
Environments always arrive as disconnected Drafts. Reconnect the recipient's
sources and destinations, confirm approval boundaries, and run a historical
test before making one live.

## Witnessing and Connections

Witnessing and Connections are intentionally quiet, but they are not optional
architecture. They are what make the visible experience truthful.

Connections can include:

- Google for Gmail, Calendar, Drive, and Docs
- Microsoft for Outlook and Microsoft Calendar
- Krisp for transcripts
- OpenAI for VAL reasoning
- Anthropic / Claude as an optional approved model provider

API keys entered through Connections are encrypted. Never paste keys into chat,
documentation, GitHub, or screenshots.

## Data and Updates

Baby VAL stores recipient data in the connected Postgres database. Updating the
application code does not delete Witnessing answers, connections, transcripts,
Board evidence, or VAL Studio Environments as long as the existing
`DATABASE_URL` remains connected.

Do not replace or detach the recipient's Postgres service during an update.
