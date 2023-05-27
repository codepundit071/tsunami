import { BASE_AIRTABLE } from './constants';

export async function fetchPropsAndMemes(type: string) {
  const result = await fetch(`${BASE_AIRTABLE}/${type}`, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
  }).then((res) => res.json());

  const records = result.records?.map((el: any) => {
    return {
      src: `${el?.fields?.src}`,
      name: `${el?.fields?.name}`,
      category: `${el?.fields?.category}`,
      type: `${el?.fields?.type}`,
      date: `${el?.fields?.date}`,
    };
  });

  const memes: any[] = records.filter((el: any) => el.type === 'memes');

  const stickers = [
    ['Accessories'],
    ['Chart Props'],
    ['Logos'],
    ['Circles'],
    ['Captions & Words'],
  ];

  const baseStickers: any[] = records
    .filter((el: any) => el.type === 'stickers')
    .map((el: any) => {
      return {
        src: `${el?.src}`,
        category: `${el?.category}`,
      };
    });

  baseStickers.forEach((element: { src: string; category: string }) => {
    if (element.category === 'accessories') {
      Array.isArray(stickers[0][1])
        ? stickers[0][1].push(element)
        : // @ts-ignore
          stickers[0].push([element]);
    }
    if (element.category === 'chart') {
      Array.isArray(stickers[1][1])
        ? stickers[1][1].push(element)
        : // @ts-ignore
          stickers[1].push([element]);
    }
    if (element.category === 'logos') {
      Array.isArray(stickers[2][1])
        ? stickers[2][1].push(element)
        : // @ts-ignore
          stickers[2].push([element]);
    }
    if (element.category === 'rings') {
      Array.isArray(stickers[3][1])
        ? stickers[3][1].push(element)
        : // @ts-ignore
          stickers[3].push([element]);
    }
    if (element.category === 'capwords') {
      Array.isArray(stickers[4][1])
        ? stickers[4][1].push(element)
        : // @ts-ignore
          stickers[4].push([element]);
    }
  });

  return { stickers, memes };
}
