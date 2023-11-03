import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">About ArtBlock</h2>
          <p className="text-sm">ArtBlock is a decentralized platform that fosters creator-based communities, allowing the creation and trading of unique artworks and NFTs.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Platform Features</h2>
          <ul className="text-sm">
            <li>- Creation of DAO-based art communities</li>
            <li>- Publication of exclusive and general art items</li>
            <li>- Dutch auction & general marketplace for sales</li>
            <li>- Resell market with dynamic royalties</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm">For inquiries and support, please contact us at support@artblock.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">© 2023 ArtBlock. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;