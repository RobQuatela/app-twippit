import React from 'react';

export const ProfileCard = ({profile}) => {
    return (
        <div className="card"
             style={{width: '21rem', backgroundColor: 'var(--main-bg-color)', borderColor: 'var(--border-color)'}}>
            <img src={profile.avatarUrl}
                 className="card-img-top" alt="test"/>
            <div className="card-body">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 className="card-title" style={{margin: 0}}>{profile.name} |</h5>
                    <small className="card-text">{profile.handle}</small>
                </div>

                <p className="card-text" style={{fontStyle: 'italic'}}>{profile.description}</p>
                <small className="card-text">{profile.joinedAt}</small>
                <p className="card-text mt-3"><strong>{profile.followerCount}</strong> followers</p>
                <p className="card-text"><strong>{profile.followingCount}</strong> following</p>
                <a href={profile.url} target="_blank" className="btn btn-primary"
                   style={{backgroundColor: 'var(--action-color)', borderColor: 'var(--action-color)'}}>View on
                    Twitter</a>
            </div>
        </div>
    )
}
