import web3 = require('@solana/web3.js')
import { id, PRIVATE_KEY } from './env'

const key = Uint8Array.from(PRIVATE_KEY)
const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
const programId = new web3.PublicKey(id)

async function main() {
  const signer: web3.Keypair = web3.Keypair.fromSecretKey(key)
  console.log(
    `SOL: ${
      (await connection.getBalance(signer.publicKey)) / web3.LAMPORTS_PER_SOL
    }`
  )

  const transaction: web3.Transaction = new web3.Transaction().add(
    new web3.TransactionInstruction({
      keys: [],
      programId,
    })
  )

  await web3
    .sendAndConfirmTransaction(connection, transaction, [signer])
    .then((sig) => {
      console.log({ sig })
    })
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
