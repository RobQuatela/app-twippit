import React from 'react';

export const ProfileForm = ({submitSearch}) => {
    const [username, setUsername] = React.useState('');

    return (
        <div className={'container'}>
            <div className="mb-3">
                <input type="input" className="form-control"
                       style={{
                           backgroundColor: '#202327',
                           border: 'none',
                           borderRadius: 20,
                           color: 'var(--secondary-txt-color)'
                       }}
                       id="exampleFormControlInput1"
                       placeholder="AlpharettaJS" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            {username.length > 0 ?
                <button style={{backgroundColor: 'var(--action-color)', borderColor: 'var(--action-color)'}}
                        className="btn btn-primary" onClick={() => submitSearch(username)}>Search
                </button> : <div/>}

        </div>

    );
}
