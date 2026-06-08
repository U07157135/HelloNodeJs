# Hello Node.js Cloud Run API

Minimal Express API that returns `Hello Node.js` and is ready to deploy to Google Cloud Run with GitHub Actions.

## Run locally

```bash
npm install
npm test
npm start
```

The API listens on `PORT` when set, otherwise `8080`.

Endpoints:

- `GET /` returns `Hello Node.js`
- `GET /healthz` returns `ok`

## Docker

```bash
docker build --tag hello-nodejs-cloud-run:test .
docker run --rm -p 8080:8080 -e PORT=8080 hello-nodejs-cloud-run:test
```

## GitHub Actions deployment

The workflow in `.github/workflows/deploy-cloud-run.yml` deploys on push to `main`.

Configure these GitHub repository variables:

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `CLOUD_RUN_SERVICE`
- `ARTIFACT_REGISTRY_REPOSITORY`

Configure these GitHub repository secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

The deployment uses Workload Identity, pushes the image to Artifact Registry, and deploys Cloud Run with public unauthenticated access.
