import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core'
import PostItem from './PostItem'

/**
 * Beinhaltet alle PostItems und die Logik hinter diesen. Ermoeglicht eine Filterung nach Titel und Beschreibung der einzelnen PostItems
 * @see PostItem
 */
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          searchKey: "",
        };
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({posts})}
        ); 
    }

    changesearchKey(event){
        this.setState({searchKey: event.target.value})
        // console.log(this.state.searchKey)
    }

    search(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let newposts = posts.filter(post => {
                if (post.title.includes(this.state.searchKey)){
                    return post
                }
            })
            this.setState({posts: newposts})
        }
        ); 
    }
    
    render() {
        return (
            <div >
                <form>
                    <TextField fullWidth label="Suche" size="medium" margin="normal" onChange={this.changesearchKey.bind(this)}  />
                </form>

                <Button style={{
                    backgroundColor: 'deepskyblue',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: 15,
                    marginBottom: 15
                }} onClick={this.search.bind(this)}>Search</Button>

                <Divider variant='fullWidth'></Divider>
                {
                    /** Hier Implementation des Renderings der PostItems */
                    this.state.posts.map(post => (<PostItem key={post.id} title={post.title} img={"https://picsum.photos/690"} url="https://pornhub.com/juliussextape" description={post.title}></PostItem>))
                }
            </div>
        );
    }
}

export default Posts;