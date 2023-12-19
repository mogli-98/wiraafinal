// import React, { useEffect, useState } from 'react';
// import { BlobServiceClient } from '@azure/storage-blob';

// const ConvertImage = ({ blobUrl }) => {

//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const blobServiceClient = new BlobServiceClient(blobUrl);
//       const containerClient = blobServiceClient.getContainerClient('images');
//       const blobClient = containerClient.getBlobClient('DefaultEndpointsProtocol=https;AccountName=wiraastorage;AccountKey=QP0bfK9+k4fzs/dyKzrDSC5KTJud6E56Snc4sxM2YHKfevJK+TPvw+KILa8tZgbV17iudBVpExLH+AStUpEJJg==;EndpointSuffix=core.windows.net'

//       );

//       const blobData = await blobClient.downloadToBuffer();
//       const blobType = blobData.contentType;

//       const blob = new Blob([blobData], { type: blobType });
//       const url = URL.createObjectURL(blob);

//       setImageUrl(url);
//     };

//     fetchData();
//   }, [blobUrl]);

//   return (
//     <div>
//       {imageUrl && <img src={imageUrl} alt="Azure Blob Image" />}
//     </div>
//   );
// };

// export default ConvertImage;

import React, { useEffect, useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const ConvertImage = ({ blobUrl }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Create a BlobServiceClient using the provided blobUrl
      const blobServiceClient = new BlobServiceClient(blobUrl);

      // Replace 'images' with your container name
      const containerClient = blobServiceClient.getContainerClient('images');

      // Replace 'yourBlobName' with the actual blob name
      const blobName = 'profileImage-1701779209169-WhatsApp Image 2023-07-14 at 3.28.52 PM.jpeg';

      // Get the BlobClient
      const blobClient = containerClient.getBlobClient(blobName);

      try {
        // Download blob data to ArrayBuffer
        const blobData = await blobClient.downloadToBuffer();

        // Get blob content type
        const blobType = blobData.contentType;

        // Create a Blob from the ArrayBuffer
        const blob = new Blob([blobData], { type: blobType });

        // Create an object URL for the Blob
        const url = URL.createObjectURL(blob);

        // Set the image URL in the state
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching blob:', error);
      }
    };

    fetchData();
  }, [blobUrl]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Azure Blob Images" />}
    </div>
  );
};

export default ConvertImage;


