# Security Policy

## Scope

InsightTab is a browser extension/web application that processes user-provided content for analysis.

## Reporting a vulnerability

Please avoid publishing exploit details in a public issue. Open a private security report through GitHub's repository security features when available, or contact the repository maintainer through the contact method listed on the maintainer's GitHub profile.

## Development guidance

- Never commit API keys, tokens, cookies, or other credentials.
- Treat page content as untrusted input.
- Keep Chrome extension permissions as narrow as the feature set allows.
- Do not send sensitive page content to third-party AI providers without clear user awareness and consent.
- Validate external API responses before reading nested properties.
