import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SidebarItem = ({title = '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title]);

    const activeNote = () => {
        const note = {
            title,
            body,
            id,
            date,
            imageUrls
        }

        dispatch(setActiveNote(note));
    }

    return (
        <ListItem 
            disablePadding
            onClick={activeNote}
        >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid 
                    container
                    direction='column'
                    justifyContent='center'
                >
                    <ListItemText primary={newTitle.length > 0 ? newTitle : 'Untitled'} />
                    <ListItemText secondary={body.length > 0 ? body : 'No text'} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
