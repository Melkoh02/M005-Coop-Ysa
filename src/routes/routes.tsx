import { observer } from 'mobx-react-lite';
import HomeRoutes from './groups/HomeRoutes';

import { Box } from '@mui/material';

const AppRoutes = observer(function AppRoutes() {
  return (
    <Box sx={{ height: '100vh', width: '100%', display: 'flex', flex: 1 }}>
      <HomeRoutes />
    </Box>
  );
});

export default AppRoutes;
