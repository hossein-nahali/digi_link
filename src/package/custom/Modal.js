import {Box, Button, Modal, Typography} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import {Navigate} from "react-router-dom";

export const CModal = ({closeModal, modal, redirectHome, text, status = ''}) => {

    return (
        <Modal
            keepMounted
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modal}
            onClose={closeModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    backgroundColor: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: '0 0 4px #19bfd399',
                    zIndex: '15',
                    width: 400,
                    height: 230,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}>
                    <Box>
                        <Typography variant="h2" component="h2" sx={{
                            fontSize: '18px',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}>
                            {text}
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button variant="contained" color="success" sx={{marginLeft: '15px'}}>
                            نمایش محصولات
                        </Button>
                        <Button variant="outlined" color="error" onClick={redirectHome} status={'error'}>
                            افزودن محصول جدید
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}