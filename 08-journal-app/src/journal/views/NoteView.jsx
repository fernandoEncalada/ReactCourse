import { SaveOutlined, TransgenderTwoTone, UploadFileOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from "react";

export const NoteView = () => {

  const dispatch = useDispatch();

  const fileInputRef = useRef();

  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

  const {  title, body, date, onInputChange, formState } = useForm( note );
  
  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [ date ])

  useEffect(() => {
    dispatch( setActiveNote( formState ));
  }, [ formState ])

  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire('Note updated', messageSaved, 'success');
    }
  }, [messageSaved])
  
  
  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  const onFileInputChange = ({ target }) => {
    if ( target.files === 0 ) return;

    dispatch( startUploadingFiles( target.files ) );

  }
  
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          { dateString }
        </Typography>
      </Grid>

      <Grid item>
        <input type="file" multiple ref={ fileInputRef }
        onChange={ onFileInputChange } style={{ display: 'none'}} />
        <IconButton color="primary" disabled={ isSaving }
        onClick={ () => fileInputRef.current.click() }>
          <UploadFileOutlined />
        </IconButton>
        <Button disabled={ isSaving } onClick={ onSaveNote } color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Enter a title"
          label="title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={ title }
          onChange={ onInputChange }
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What's happened today?"
          minRows={ 5 }
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>

      <ImageGallery />

    </Grid>
  );
};
