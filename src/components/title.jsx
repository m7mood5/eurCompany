import { Typography } from "@mui/material"

const Title = ({ children }) => {
    return (
        <Typography
            variant='h4'
            color='#042E3C'
            textAlign='center'
            sx={{
                fontSize: {
                    xs: 'h4.fontSize',
                    md: 'h4.fontSize',
                },
                fontWeight: '600',
            }}
        >
            {children}
        </Typography>
    )
}

export default Title