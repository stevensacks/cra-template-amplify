import {DataStore, Predicates} from '@aws-amplify/datastore';
import {Post, PostStatus} from 'models';
import {Auth} from 'aws-amplify';
import React from 'react';
import {rng} from 'utils/rng';
import './index.scss';

const onCreate = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const rating = rng(Date.now(), 7) + 1;
    const post = new Post({
        title: `New title ${Date.now()}`,
        rating,
        owner: user.username,
        status: PostStatus.ACTIVE,
    });
    console.log({title: post.title, rating: post.rating});
    DataStore.save(post);
};

const onDeleteAll = () => DataStore.delete(Post, Predicates.ALL);

const onQuery = async () => {
    const posts = await DataStore.query(Post, c => c.rating('gt', 4));
    console.log(posts.map(({title, rating}) => ({title, rating})));
};

const App = () => (
    <div className="app">
        <header className="app-header">
            <div>
                <span>v0.1.0</span>
            </div>
            <div className="test-buttons">
                <input onClick={onCreate} type="button" value="NEW" />
                <input
                    onClick={onQuery}
                    type="button"
                    value="QUERY rating > 4"
                />
                <input onClick={onDeleteAll} type="button" value="DELETE ALL" />
            </div>
            <span>Check console for output of these buttons</span>
            <button className="sign-out-link" onClick={() => Auth.signOut()}>
                Sign Out
            </button>
        </header>
    </div>
);

export default App;
