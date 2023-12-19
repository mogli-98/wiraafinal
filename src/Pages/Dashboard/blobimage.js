



import React, { useEffect, useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const AzureBlobImage = ({ blobUrl }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const blobServiceClient = new BlobServiceClient(blobUrl);
      const containerClient = blobServiceClient.getContainerClient('images');
      const blobClient = containerClient.getBlobClient();

      const blobData = await blobClient.downloadToBuffer();
      const blobType = blobData.contentType;

      const blob = new Blob([blobData], { type: blobType });
      const url = URL.createObjectURL(blob);

      setImageUrl(url);
    };

    fetchData();
  }, [blobUrl]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Azure Blob Image"  />}
    </div>
  );
};

export default AzureBlobImage;




