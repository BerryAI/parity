// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { PropTypes } from 'react';

import unknownImage from '@parity/shared/assets/images/contracts/unknown-64x64.png';
import IconCache from '~/ui/IconCache';

const iconCache = IconCache.get();

export default function TokenImage ({ token }, { api }) {
  const imageurl = token.image || iconCache.images[token.address];
  let imagesrc = unknownImage;

  if (imageurl) {
    const host = /^(\/)?api/.test(imageurl)
      ? api.dappsUrl
      : '';

    imagesrc = `${host}${imageurl}`;
  }

  return (
    <img
      src={ imagesrc }
      alt={ token.name }
    />
  );
}

TokenImage.contextTypes = {
  api: PropTypes.object
};

TokenImage.propTypes = {
  token: PropTypes.shape({
    image: PropTypes.string,
    address: PropTypes.string
  }).isRequired
};