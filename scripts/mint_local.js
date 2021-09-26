const {ethers} = require('hardhat')

async function mint() {
    const signer = await ethers.getSigner()
    console.log(signer.address)

    const transaction = {
        to: '0xccD6CB5034C15C63761070433cE436F5C4636501',
        value: ethers.utils.parseEther('3000'),
        gasLimit: ethers.BigNumber.from('25000'),
        maxFeePerGas: ethers.BigNumber.from('1000000108'),
        nonce: await signer.getTransactionCount(),
    }

    const res = await signer.sendTransaction(transaction)
    await res.wait()
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
