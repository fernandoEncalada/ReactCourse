import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        isSavingNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        noteUpdated: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                
                if( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${ action.payload.title }, updated successfully`;
        },
        deleteNoteById: ( state, action ) => {

        },
    }
});


export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    noteUpdated,
    deleteNoteById, 
    isSavingNote } = journalSlice.actions;