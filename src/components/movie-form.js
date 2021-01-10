import React, {useState, useEffect} from 'react'

function MovieForm(props) {
    console.log(props)
    const [ title, setTitle ] = useState(props.movie.title);
    // const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState(props.movie.description);
    // const [ description, setDescription ] = useState('');


    return (
        <React.Fragment>
            {props.movie ? (
                <div>
                    <label for="title">Title</label><br/>
                    <input id="title" type="text" placeholder="title" value={title}
                        onChange={ evt=> setTitle(evt.target.value)}
                    /><br/>
                    <label for="description">Description</label><br/>
                    <textarea id="description" type="text" placeholder="Description"></textarea><br/>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default MovieForm;