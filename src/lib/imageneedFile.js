const { BlobServiceClient } = require('@azure/storage-blob');


const containerName = 'images';
const blobName = 'profileImage-1701779209169-WhatsApp Image 2023-07-14 at 3.28.52 PM.jpeg';

const connStr = 'DefaultEndpointsProtocol=https;AccountName=wiraastorage;AccountKey=QP0bfK9+k4fzs/dyKzrDSC5KTJud6E56Snc4sxM2YHKfevJK+TPvw+KILa8tZgbV17iudBVpExLH+AStUpEJJg==;EndpointSuffix=core.windows.net';

const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);

async function downloadBlob() {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(blobName);

  try {
    const downloadBlockBlobResponse = await blobClient.download();
    const buffer = await streamToBuffer(downloadBlockBlobResponse.readableStreamBody);
    return buffer.toString('base64'); // Return base64 encoded string
  } catch (error) {
    console.error('Error downloading blob', error.message);
    throw error; // Propagate the error
  }
}

// Helper function to convert a readable stream to a Buffer
async function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', (data) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on('error', reject);
  });
}

