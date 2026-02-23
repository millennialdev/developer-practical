#!/usr/bin/env bash
set -e

echo "=== Building project ==="
npm run build

echo "=== Running lint ==="
npm run lint

# Run unit tests if test files exist
if find src -name '*.test.*' -o -name '*.spec.*' 2>/dev/null | grep -q .; then
  echo "=== Running unit tests ==="
  npx vitest run --reporter=verbose
else
  echo "=== Skipping unit tests (no test files in src/) ==="
fi

# Run e2e tests if spec files exist
if find e2e -name '*.spec.*' 2>/dev/null | grep -q .; then
  echo "=== Running e2e tests ==="
  npx playwright test --reporter=line
else
  echo "=== Skipping e2e tests (no spec files in e2e/) ==="
fi

echo "=== All checks passed ==="
