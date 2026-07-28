# Baby VAL Replacement SOP

1. Confirm the existing Railway service is still attached to its original
   Postgres service.
2. Record the current `DATABASE_URL` variable name and service connection.
   Never paste the value into GitHub.
3. Replace the old Baby VAL source with this repository or point the existing
   Railway service at this repository.
4. Set `VAL_EDITION=baby`.
5. Keep the recipient's existing identity, OAuth, encryption, session, and
   database variables unchanged.
6. Deploy.
7. Verify `/api/health`.
8. Log in and confirm the recipient's name, Witnessing progress, Connections,
   transcripts, and saved VAL Studio Environments are still present.
9. Confirm the visible surfaces are Board of Observers, Executive Inbox,
   Transcripts, text Co-Work, prominent VAL Studio, and quiet VAL Setup.
10. Confirm no Voice control appears and Baby voice endpoints return 404.
11. Export one Environment, import it, and confirm the import is a disconnected
    Draft with no private evidence or credentials.

## Never Do This

- Do not replace or detach the Postgres service.
- Do not run Clean Start or Delete My Data as part of deployment.
- Do not commit recipient data, credentials, exports, or Witnessing documents.
- Do not make an imported Environment live before reconnecting and testing it.
