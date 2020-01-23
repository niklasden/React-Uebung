import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core'

/**
 * Beinhaltet alle PostItems und die Logik hinter diesen. Ermoeglicht eine Filterung nach Titel und Beschreibung der einzelnen PostItems
 * @see PostItem
 */
class Posts extends React.Component {
    render() {
        return (
            <div >
                <form>
                    <TextField fullWidth label="Suche" size="medium" margin="normal" />
                </form>

                <Button style={{
                    backgroundColor: 'deepskyblue',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: 15,
                    marginBottom: 15
                }}>Search</Button>

                <Divider variant='fullWidth'></Divider>
                {
                    /** Hier Implementation des Renderings der PostItems */
                }
            </div>
        );
    }
}

export default Posts;