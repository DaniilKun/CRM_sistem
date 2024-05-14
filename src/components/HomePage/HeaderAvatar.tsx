import { Avatar, ListItemText } from '@mui/material';

const HeaderAvatar = () => {

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
      <ListItemText primary="UserName" />

    </div>
  );
};

export default HeaderAvatar;
