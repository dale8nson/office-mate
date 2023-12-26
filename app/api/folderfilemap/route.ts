import { getFiles, getRootFolderId } from "@/app/desktop/cloud/cloud-actions"
import { NextResponse } from "next/server";

const getFolderFileMap = async (folderMeta = [], pageToken = null) => {
  const rootFolderId = await getRootFolderId();
  console.log(`rootFolderId: ${rootFolderId}`);

  return await getFiles('files(name,id,mimeType,parents),nextPageToken', 'mimeType%3d%27application/vnd.google-apps.folder%27', pageToken).then(meta => {
    const folders = [...meta.files.filter(file => Object.hasOwn(file, 'parents') && file.parents[0] === rootFolderId)]
    // console.log(`filesMeta:`, filesMeta);
    folderMeta = [...folderMeta, ...folders];
    if (Object.hasOwn(meta, 'nextPageToken') && meta.nextPageToken !== pageToken) {
      getFolderFileMap(folderMeta, meta.nextPageToken)
    }
    console.log(`folderMeta:`, folderMeta);
    return folderMeta;
  })
    .then(folderMeta => {
      console.log(`folderMeta:`, folderMeta);

      let folderFileMap = {}
      for (const folder of folderMeta) {
        console.log(`folder:`, folder);

        getFiles('files(id,name,mimeType,hasThumbnail,thumbnailLink,iconLink)', `%27${folder.id}%27+in+parents`).then(meta => {
          // console.log(`files in ${folder.name}:`, meta.files);
          folderFileMap[folder.id] = {folderName: folder.name, files:meta.files};
          console.log(`folderFileMap:`, folderFileMap);

        });
      }
      console.log(`folderFileMap:`, folderFileMap);

      return folderFileMap;
    })
}

const GET = async () => {

  const folderFileMap = await getFolderFileMap();

  console.log(`GET route.ts folderFileMap:`, folderFileMap);

  // const str = JSON.stringify(folderFileMap);
  // console.log(`str: ${str}`);

  const res = new Response(folderFileMap);
  return res.blob();

}

export { GET };