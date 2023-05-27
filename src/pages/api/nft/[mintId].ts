import { NextApiRequest, NextApiResponse } from 'next';

const METADATA: any = [
  {
    description:
      'First, there was man. Then, there were machines. Now, there is 𝙐𝙉𝙈𝙀𝙄',
    name: '𝙐𝙉𝙈𝙀𝙄: A Buddhists Evolution',
    isAnimated: true,
  },
  ...new Array(44).fill(0).map((_) => ({
    description:
      'First, there was man. Then, there were machines. Now, there is 𝙐𝙉𝙈𝙀𝙄',
    name: '𝙐𝙉𝙈𝙀𝙄',
    isAnimated: false,
  })),
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { mintId } = req.query;

  res.setHeader('Contet-Type', 'application/json');
  return res.status(200).send(
    JSON.stringify({
      ...METADATA[parseInt(`${mintId}`)],
      external_url: `https://www.abuddhistevolves.com/`,
      ...{
        [METADATA[parseInt(`${mintId}`)]?.isAnimated
          ? 'animation_url'
          : 'image']: `https://www.abuddhistevolves.com/api/nft/media/${mintId}`,
      },
    })
  );
}
