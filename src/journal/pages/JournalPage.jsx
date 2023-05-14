import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal';


export const JournalPage = () => {

    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>

            {/* NothingSelectedView */}

            <NothingSelectedView/>

            {/* NoteView */}

            {/* <NoteView/> */}

            <IconButton
                onClick={onClickNewNote}
                size='large'
                sx={{
                    color: 'white.main',
                    backgroundColor: 'error.main',
                    ':hover' : {backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{fontSize: 30}} />
            </IconButton>

        </JournalLayout>
    )
}
