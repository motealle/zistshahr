# Presentation1.pptx — lossless binary source archive

The exact original 23-slide presentation is archived as **eight ordered Base64 parts** because the connected GitHub single-blob upload exceeded the transport limit. These are Git-tracked UTF-8 Base64 pieces of the same original file, **not** a changed/recompressed deck.

Original file: `Presentation1.pptx` (9,135,482 bytes)
SHA-256: `959adcc1cb3cff31026ba50aa8f96c2e9edb67f323d74342f9cc1cc76cfc22af`
Git blob SHA-1 for original binary: `962f3b863ab9a1ca4977b158f5f4999b9e3e1ddf`

To reconstruct on macOS/Linux from this directory:

```bash
cat part-*.b64 | base64 -d > ../Presentation1.pptx
sha256sum ../Presentation1.pptx
```

On PowerShell:

```powershell
$b64 = (Get-ChildItem part-*.b64 | Sort-Object Name | Get-Content) -join ''
[IO.File]::WriteAllBytes((Join-Path (Get-Location) '..\\Presentation1.pptx'), [Convert]::FromBase64String($b64))
```

Ensure the resulting SHA-256 matches the value above. Byte-for-byte reconstruction was verified locally on 2026-11-07. The original .pptx is also available as one file in ChatGPT Library: `/Zistshahr/Source/Presentation1.pptx`. For research excerpts/slide headings, see `../../presentation1-slide-index.md`.
