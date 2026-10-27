# Domain and LINE Connection

Date: 2026-10-27 (Asia/Taipei)
Product commit: bd495ce18d5bce2f77841eceb7342d2e92acac75
Binding deferral commit: c90dd08039b8f91c0822ff49180a7d4e4c190208
Repository: kevin734196-codeLab/meidao-vet-web

## Scope and Ownership

User requested umesima.com and the Chinese clinic domain, plus LINE URL
https://lin.ee/q2NhyMW. GitHub CLI confirmed admin access to the repository.
Authenticated GoDaddy UI showed both owned domains. Unrelated domains and all
mail/security records are protected. Work used dedicated codex/connect-umesima
worktree. Original approved commits were preserved and published by fast-forward.

## Changes

- Replaced 17 static LINE placeholders and the generated mobile menu link.
- Added page-specific canonical and OG URLs, updated JS cache key to v29.
- Added CNAME umesima.com and configured GitHub Pages domain binding, then deferred
  that binding in a forward commit when primary DNS could not be changed safely.
- Updated outdated not-live footer labels.
- GoDaddy confirmed Chinese-domain permanent forwarding to https://umesima.com.
  A GET against its authoritative forwarding server returned 301 to that URL.
- Primary DNS save and HTTPS are pending verification.

## Verification

- git diff --check: exit 0.
- node --check assets/app.js: exit 0.
- HTMLParser fixture: baseline 17 broken hrefs; updated 17 exact LINE links pass.
- Node VM executed production app.js and opened mobile menu: generated LINE link pass.
- CNAME and four page canonical URLs: pass.
- Live GitHub origin tested with curl --resolve over HTTP: all four pages return
  200 and expose correct LINE links and v29 script (exit 0).
- GitHub Pages reported built, product commit bd495ce, cname umesima.com before
  the temporary binding was deferred to keep the existing GitHub URL reachable.
- DNS at initial check: umesima.com A 76.223.105.230 / 13.248.243.5;
  www CNAME umesima.com; NS ns61/ns62.domaincontrol.com. No MX/AAAA.
- Chinese domain ASCII: xn--hhrp9uvtjp2jfm3b65f.com; original parking A
  3.33.130.190 / 15.197.148.33; forwarding save confirmed by GoDaddy UI.
- Independent reviewer Peirce: no blocking code findings; second safety pass
  accepted fast-forward publication and DNS values. Warned not to leave Pages
  redirect pointing at parked domain if primary cutover cannot finish.

## Remaining and Rollback

Primary A replacement, www CNAME, certificate issuance and HTTPS enforcement are
unfinished. Chrome produced a ScreenCaptureKit capture failure and its GoDaddy
page became blank. User was asked to unlock the Mac and keep Chrome visible.
No sensitive verification code was retained in this package.
Preserve-on-ambiguity applies if browser control fails.
Avoid duplicate writes until authoritative DNS and GoDaddy UI confirm save state.
If cutover cannot finish, restore previous Pages binding through a forward commit
and API update, preserving published LINE and prior approved changes. If DNS has
already changed, preserve the domain binding until DNS rollback caches expire.

GitHub API confirmed cname null and HTTPS enforcement true after deferral. Its
automatic Delete CNAME commit was fast-forwarded locally; all LINE changes remain.
The old redirect can persist in edge caches until the new Pages build completes.
Final status: partially completed, waiting on restored GoDaddy browser access.

Pre-existing hero-demo.html LINE placeholders are outside scope and are not
included in the four production-page verification claim.
