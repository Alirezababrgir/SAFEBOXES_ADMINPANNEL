import { Box, Fab } from "@mui/material";
import { useSignMessage } from 'wagmi'
import { usePostTokenMutation } from "../../api/apiSlice";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Homecontent = () => {

    const [PostToken] = usePostTokenMutation()
    const { address } = useAccount()
    const { signMessage, status, data } = useSignMessage()
    const [cookies, setCookie] = useCookies(['token']);

    const Handlesignature = async () => {
        try {
            signMessage({ message: 'Safeboxes' })
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (cookies.token === undefined && status === "success") {
            const auth = async () => {
                const authenticate = await PostToken({ address: address, signature: data })
                console.log(authenticate)
                setCookie('token', authenticate.data.token, { path: '/' })
            }
            auth()

        }
    }, [data, address, PostToken, cookies.token, setCookie, status])

    console.log(cookies.token)


    return (
        <Box sx={{ p: 2 }}>
            <w3m-button />
            {cookies.token ? <Fab sx={{ mt: 1, fontSize: "10px" }} variant="extended" size="small" color="primary" disabled>{address}</Fab> : address === undefined ? <Fab sx={{ mt: 2}} size="small" variant="extended" color="primary" onClick={Handlesignature} disabled>Authenticate</Fab> : <Fab sx={{ mt: 2 }} size="small" variant="extended" color="primary" onClick={Handlesignature}>Authenticate</Fab>}
        </Box>
    )
}
export default Homecontent;