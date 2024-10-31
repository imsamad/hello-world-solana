import * as web3 from "@solana/web3.js";
import {
  TransactionInstruction,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
// Manually initialize variables that are automatically defined in Playground
const PROGRAM_ID = new web3.PublicKey("APKiaHNUUajUSqYsTywgh4bHRcFQXpAhdsGR6iCQZPhE");
const connection = new web3.Connection("https://api.devnet.solana.com", "confirmed");
const wallet = { keypair: web3.Keypair.generate() };

async function main() {
  
  const inx = new TransactionInstruction({
    keys: [],
    data: Buffer.alloc(0),
    programId: PROGRAM_ID,
  });

  const hash = await sendAndConfirmTransaction(
    connection,
    new Transaction().add(inx),
    [wallet.keypair]
  );
  
  console.log("hash: ", hash);
}

main().catch(console.error);
