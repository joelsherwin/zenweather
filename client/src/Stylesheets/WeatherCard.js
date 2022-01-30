import {makeStyles} from "@mui/styles"

export default makeStyles(()=>({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        borderRadius:'30px',
        boxShadow : '-6px -6px 20px rgba(255,255,255,1), 6px 6px 20px rgba(0,0,0,0.1)',
        width:'250px',
        margin:'20px',
        padding:'10px'
    },
    content: { flex: 1 },

}))