import stream from 'stream';
import { promisify } from 'util';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);

const EXTENSIONS: any = ['mp4', ...new Array(44).fill(0).map((_) => 'jpg')];
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { mintId } = req.query;
  console.log(
    `http://project-meta-nft.s3.us-east-2.amazonaws.com/unmei/${mintId}.${
      EXTENSIONS[parseInt(`${mintId}`)]
    }`
  );
  const response = await fetch(
    `http://project-meta-nft.s3.us-east-2.amazonaws.com/unmei/${mintId}.${
      EXTENSIONS[parseInt(`${mintId}`)]
    }`
  ); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader(
    'Content-Type',
    parseInt(`${mintId}`) === 0 ? 'video/mp4' : 'image/jpeg'
  );
  res.setHeader('Content-Disposition', 'inline');
  // @ts-ignore
  await pipeline(response.body, res);
}
