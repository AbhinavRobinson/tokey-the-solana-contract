# Tokey the Solana Contract

Simple solana contract with cli app to interact with it!

## How to use

- `REQUIRED` rust, cargo, nodejs, npm/yarn, solana, cargo-build-bpf
- Install cli deps:
  - `<npm/yarn> install`
- Build rust app:
  - `cargo build-bpf`
- Deploy program:
  - `solana program deploy <path/to/program.so>`
  - Copy the programId/signature to clipboard!
- Setup ENV:
  - `cp env.example.ts env.ts`
  - Paste program id to id.
  - Paste in your solana secret key. (looks like a array)
- Run app:
  - `solana logs <program-id>` to check logs on-chain.
  - `yarn dev` to run app!
  - Check logs for results!
