# 07 Social / SSO-First Login

An enterprise-ready authentication interface emphasizing clearly labeled single sign-on providers (Google, Microsoft, Okta, GitHub) with honest demo disclosures and a streamlined corporate email fallback flow.

## Design Highlights
- **SSO provider grid**: Distinct brand icons (inline SVGs) for Okta, Google Workspace, Microsoft Entra ID, and GitHub Enterprise.
- **Honest simulation disclosure**: Clicking any SSO provider immediately explains that OAuth/SAML requires a server callback, directing users to test the client-side email flow.
- **Corporate email fallback**: Clean inline divider with magic-link token dispatch simulation and accessible validation.
- **Zero remote dependencies**: Pure HTML, CSS custom properties, and inline SVGs.

## Class Prefix
All classes are strictly scoped under `.auth-sso-*`.
