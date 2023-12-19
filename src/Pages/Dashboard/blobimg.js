import React, { useState, useEffect } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const AzureBlobImage = () => {
    const [imageBlob, setImageBlob] = useState(null);

    useEffect(() => {
        // Your Azure Storage Account connection string
        const connectionString = 'DefaultEndpointsProtocol=https;AccountName=wiraastorage;AccountKey=QP0bfK9+k4fzs/dyKzrDSC5KTJud6E56Snc4sxM2YHKfevJK+TPvw+KILa8tZgbV17iudBVpExLH+AStUpEJJg==;EndpointSuffix=core.windows.net';

        // Your container name and blob name
        const containerName = 'images';
        const blobName = 'https://wiraastorage.blob.core.windows.net/images/profileImage-1701779209169-WhatsApp Image 2023-07-14 at 3.28.52 PM.jpeg';

        // Create BlobServiceClient
        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

        // Get a reference to a container
        const containerClient = blobServiceClient.getContainerClient(containerName);

        // Get a block blob client
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        // Download blob content as a Uint8Array
        const downloadBlob = async () => {
            const response = await blockBlobClient.downloadToUint8Array();
            setImageBlob(response);
        };

        downloadBlob();
    }, []); // Empty dependency array to run the effect once

    if (!imageBlob) {
        return <div>Loading...</div>;
    }

    // Create a Blob URL from the Uint8Array data
    const blobUrl = URL.createObjectURL(new Blob([imageBlob]));

    return (
        <div>
            <h2>Azure Blob Image</h2>
            <img src={blobUrl} alt="Azure Blob" />
        </div>
    );
};

export default AzureBlobImage;
