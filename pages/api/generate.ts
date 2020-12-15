import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import PDFDocument from 'pdfkit';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const doc = new PDFDocument;

  doc.pipe(fs.createWriteStream('public/mark_pap_cv.pdf'));

  doc
    .fontSize(20)
    .text('Hello, my name is Márk Pap,')
    .moveDown()
    .fontSize(12)
    .text('A 27 year old Application Developer, living in Debrecen, Hungary.')
    .text('Currently i write applications using NodeJS, React, React Native, Swift, Objective C, and Python. Long time ago i was used to develop applications and websites with PHP, however i almost completely dropped it because of the newer and often stronger languages become more successful.')
    .moveDown()
    .text('My future goal is, to switch from web to mobile development using React Native, Swift and Objective C with backend in Node or Python. No plans for native android development.')
    .text('I also have some hobbies. I used to play football for one and half year. Dogs all the way. Also, i did some cool tricks on my BMX bike, however after a minor accident, i had to stop with extreme sports.')
    .moveDown()
    .fontSize(16)
    .text('Past Projects')
    .moveDown()
    .fontSize(12)
    .text('- Finnoconsult Website @Finno Consult [Gatsby, React, Typescript, GitHub Actions, NodeJS, Strapi, Postgres]')
    .text('- ADAC Openhouse @Finno Consult [NodeJS, Koa, React, Typescript, Inversify, Postgres]')

  doc.end();

  res.status(200).json({ ok: true });
}