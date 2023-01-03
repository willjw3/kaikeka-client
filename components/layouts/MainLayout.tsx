import Box from '@mui/material/Box'
import {ChildrenProps} from 'components/components'
import AppBar from 'components/navigation/AppBar'

export default function MainLayout({children}: ChildrenProps) {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
        <AppBar />
        {children}
    </Box>
  )
}
