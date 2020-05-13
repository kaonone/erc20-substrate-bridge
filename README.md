[![riot.im](https://img.shields.io/badge/riot.im-join%20chat-green.svg)](https://riot.im/app/#/room/#akropolis:matrix.org)

# ERC20 Ethereum  <-> Parity Substrate Bridge
Ethereum <-> Parity Substrate Blockchain bridge for self transfers of ERC20 representation.

## You can try it out in our chain:
1. Make sure you have Ethereum and Substrate extensions. Typical choices would be:
  <br>a. `Metamask` (or any other Ethereum extension) and switch it to `Kovan`
  <br>b. `polkadot{.js}`
2. Go [here](https://polkadai-bridge.akropolis.io/)
3. Connect with both extensions(two pop-up windows should appear)
4. You will see that your balances from extensions should appear on the page.
5. Transfer some Kovan test DAI to our Substrate-based chain.
6. Transfer some DAI from our chain to your Ethereum account.

It should be pretty obvious from this point.
If you hit any problems, please feel free to file an issue!

```
    cd ./frontend
    npm i
    npm run codegen
    npm run dev
    
   ```
