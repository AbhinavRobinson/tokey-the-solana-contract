import web3 = require('@solana/web3.js')
import { PRIVATE_KEY } from './env'

const key = Uint8Array.from(PRIVATE_KEY)
const connection = new web3.Connection(web3.clusterApiUrl('devnet'))

async function main() {
  const signer = web3.Keypair.fromSecretKey(key)
  console.log(
    `SOL: ${
      (await connection.getBalance(signer.publicKey)) / web3.LAMPORTS_PER_SOL
    }`
  )
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
