import { Box } from '@mantine/core';
import { PropsWithChildren } from 'react';

export default function PageContentBox({ children }: PropsWithChildren) {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        top: '100px',
        left: '50%',
        maxWidth: '960px',
        width: '100%',
        height: 'calc(100% - 200px)',
        transform: 'translateX(-50%)',
        backgroundColor: theme.colors.alphaDarkBlue[8],
        borderRadius: '15px',
        zIndex: 1,
        padding: '1em',
        color: 'white',
        overflowY: 'auto',
        '@media (max-width: 620px)': {
          height: 'calc(100% - 100px)',
        },
      })}
    >
      {children}
    </Box>
  );
}
