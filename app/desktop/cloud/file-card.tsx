import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

const FileCard = ({ file }) => {

  const extensions = {
    null: <FolderOutlinedIcon />,
    'pdf': <PictureAsPdfOutlinedIcon />,
    'epub': <AutoStoriesOutlinedIcon />,
    'docx': <TextSnippetOutlinedIcon />
  }

  const ext = file.name.match(/(?<=[.]).+$/);

  const fileName = file.name.match(/^[^.]*(?=[.])?/);

  return (
    <Box component='div' sx={{ marginBlock: '5%' }} >
      <Card sx={{ height: '20vw', width: 'calc(20vw * 0.7070707070707071)', '& .MuiPaper-root': { marginBlock: '5vw' } }}>
        <CardHeader avatar={extensions[ext] || null} />
        <CardContent >
          <Typography sx={{fontSize:'0.75rem'}} >{fileName}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FileCard;