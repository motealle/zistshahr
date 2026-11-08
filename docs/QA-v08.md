# Edition 08 — Support open research

The home and final City chapter open the English crypto donation panel. The Research Atlas also offers a crypto donation button alongside the existing contact options. Share `/en/#support` to open the panel directly. It appears as a centered modal on desktop and a bottom sheet on narrow screens.

The four supplied destinations are presented as their respective mainnet native assets (SOL, ETH, BTC, TRX). Checked Solana Base58 length, Ethereum EIP-55, Bitcoin Taproot Bech32m, and TRON Base58Check. The supplied TRON 20-byte hex payload was encoded with the TRON 0x41 prefix as `TKnEkcyzMY8J9pCyESFEcBmrSoVwJbRZnJ`, per [TRON's address documentation](https://developers.tron.network/docs/account). QR codes contain the exact displayed address and all four were decoded independently. Donors complete transfers in their own wallet. The panel presents addresses without requesting a connection, amount, or payment data. Address encoding was validated; no test transfer was sent.

Tested Chrome desktop and 360px/390px mobile frames. Verified one visible QR per network, matching full addresses, keyboard dismissal and focus return, and opening from the Atlas. The local HTTP preview verified selectable-address fallback when Clipboard API is unavailable.

Deployment verification pending.
