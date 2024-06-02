// Create a variable to hold your NFTs
let nfts = [];

// Helper function to generate a unique identifier
function generateUniqueID() {
    return Math.floor(Math.random() * Date.now()).toString(36);
}

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(animeName, author, studio, genre, rating) {
    const nft = {
        id: generateUniqueID(),  // Unique identifier for each NFT
        animeName: animeName,
        author: author,
        studio: studio,
        genre: genre,
        rating: rating,
        creationDate: new Date().toISOString()  // Timestamp for when the NFT was minted
    };
    nfts.push(nft);
}

// it will  "loop" through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`ID: ${nfts[i].id}, Anime Name: ${nfts[i].animeName}, Author: ${nfts[i].author}, Studio: ${nfts[i].studio}, Genre: ${nfts[i].genre}, Rating: ${nfts[i].rating}, Creation Date: ${nfts[i].creationDate}`);
    }
}

// to Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Calling the functions below this line

// Minting NFTs
mintNFT("Your Name", "Makoto Shinkai", "CoMix Wave Films", "Romance", 8.9);
mintNFT("Weathering with You", "Makoto Shinkai", "CoMix Wave Films", "Fantasy", 8.2);
mintNFT("5 Centimeters per Second", "Makoto Shinkai", "CoMix Wave Films", "Drama", 7.6);
mintNFT("Naruto", "Masashi Kishimoto", "Pierrot", "Action", 8.3);
mintNFT("Attack on Titan", "Hajime Isayama", "Wit Studio", "Action", 9.0);
mintNFT("My Hero Academia", "Kohei Horikoshi", "Bones", "Action", 8.5);

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());
