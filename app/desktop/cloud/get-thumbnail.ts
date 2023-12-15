"use server";
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import * as pdf2html from 'pdf2html';
import { PDFDocument } from 'pdf-lib';
import type PDFPage from 'pdf-lib';
import { The_Nautigal } from 'next/font/google';



const getThumbnail: (fileId: string) => Promise<string> = async (fileId: string) => {
  const access_token = cookies().get('access_token')?.value;

  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=thumbnailLink,contentHints`, { headers: { Authorization: `Bearer ${access_token as string}` } });
  // const res = await fetch(req).then(res => res?.arrayBuffer()).catch(error => console.log(error));
  const file = await fetch(req).then(res => res.json()).catch(error => console.log(error));
  console.log(`file json:`, file);
if(!!(file?.thumbnailLink)) {
  // const urlReq = new NextRequest(file.thumbnailLink);
  // const url = await fetch(file.thumbnailLink).then(res => res.text()).catch(error => console.log(error));
  const url = file?.thumbnailLink;
  // console.log(`url json:`, url as string);
  return url || file.contentHints.thumbnail.image;
}
  // else { return file.contentHints.thumbnail.image; }

  // if (!!res) {
  //   const doc = await PDFDocument.load(res, { ignoreEncryption: true }).catch(error => console.log(error));
  //   const pdfDoc = await PDFDocument.create().catch(error => console.log(error));
  //   const [tb] = await pdfDoc.copyPages(doc, [0]).catch(error => console.log(error));
  //   if (!!tb) {
  //     pdfDoc.addPage(tb);
  //     const b64Pdf = pdfDoc.saveAsBase64({ dataUri: true });

  //     // console.log(`thumbnailPng:`,thumbnailPng)

  //     return b64Pdf;
  //   }
  
}


export default getThumbnail;